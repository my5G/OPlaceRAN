import argparse
import time
import os
import logging
import csv
import subprocess

from datetime import datetime

import utils.constants as constants

from utils.k8s import K8S
from utils.ranplacer import RANPlacer

logging.basicConfig(level=logging.INFO)


def TestRANPlacer(exec_number: int):

    for n in range(exec_number):
        ranplacer = RANPlacer("ranplacer.yaml")

        try:
            logging.info("creating ranplacer")
            ranplacer.create()
            logging.info("waiting to be finished")
            ranplacer.wait_to_be_finished()

            logging.info("collecting results")
            result = ranplacer.collect_result()

            logging.info("outputing csv")
            output_csv(result, "ranplacer_result", n)

            logging.info("outputing results")
            output_result(result, "ranplacer_result", n)
        finally:
            logging.info("deleting ranplacer")
            ranplacer.delete()
            logging.info("waiting for clean up to finish")
            wait_cleanup_finished()


def output_result(result: object, file_name: str, exec_number: int):
    logs_file = open("{}/result-collectors/results/{}.txt".format(os.getcwd(),
                                                                  file_name.split(".")[0]), "a")
    logs_file.write(f"Execution {exec_number}:\n")

    if "state" in result:
        logs_file.write("State: {}\n".format(result["state"]))
        if result["state"] == constants.STATUS_ERROR:
            logs_file.close()
            return

    if "average_initialization_time" in result:
        logs_file.write("average initialization time: {}\n".format(
            result["average_initialization_time"]))

    if "allocated_ran_deployers" in result:
        logs_file.write("allocated ran deployers: {}\n".format(
            result["allocated_ran_deployers"]))

    if "creation_timestamp" in result:
        logs_file.write("creation timestamp: {}\n".format(
            result["creation_timestamp"]))

    if "initialization_time" in result:
        logs_file.write("initialization timestamp: {}\n".format(
            result["initialization_time"]))

    if "latest_to_init" in result:
        logs_file.write("latest_to_init: {}\n".format(
            result["latest_to_init"]))

    logs_file.close()


def output_csv(result: object, file_name: str, exec_number: int):
    output_filename = file_name.split(".")[0]
    output_file = "{}/result-collectors/results/{}.csv".format(os.getcwd(),
                                                               output_filename)
    with open(output_file, "a") as csv_file:
        csv_writer = csv.writer(csv_file, delimiter=';',
                                quotechar='|', quoting=csv.QUOTE_MINIMAL)

        header_line = ["Execution Number", "State", "Average Initialization Time",
                       "Allocated Ran Deployers", "Total Duration"]

        output_line = []
        output_line.append(exec_number)
        output_line.append(result["state"])
        output_line.append(result["average_initialization_time"])
        output_line.append(result["allocated_ran_deployers"])
        output_line.append(result["latest_to_init"]["duration"])

        csv_writer.writerow(header_line)
        csv_writer.writerow(output_line)


def wait_cleanup_finished():
    pods = K8S.list_pods()

    while len(pods.items) > 0:
        time.sleep(5)

        pods = K8S.list_pods()


def output_start_end_times(prefix: str):
    o_file = open(
        "{}/result-collectors/results/{}.txt".format(os.getcwd(), "times"), "a")
    now = datetime.now().strftime("%d/%m/%Y %H:%M:%S\n")
    o_file.write(f"{prefix}: {now}")

    o_file.close()


def main():
    parser = argparse.ArgumentParser(
        formatter_class=argparse.ArgumentDefaultsHelpFormatter)
    parser.add_argument('--number-of-executions', type=int, default=1)

    args = parser.parse_args()

    output_start_end_times("start")

    TestRANPlacer(args.number_of_executions)

    cmd = ['./test.sh']
    subprocess.Popen(cmd, stdout=subprocess.PIPE).wait()
    print(f"shell return code is {p.returncode}")

    output_start_end_times("end")

main()
