import time
import json
import sys
from docplex.mp.model import Model
from docplex.util.environment import get_environment

import constants
from utils import initial_validation, output_result
from path_gen import path_gen


RU_ID = "id"
DRC_str = "drc"
RU_POS = "ru"
DU_POS = "du"
CU_POS = "cu"
PATH = "path"


class Path:
    def __init__(self, id, source, target, seq, p1, p2, p3, delay_p1, delay_p2, delay_p3):
        self.id = id
        self.source = source
        self.target = target
        self.seq = seq
        self.p1 = p1
        self.p2 = p2
        self.p3 = p3
        self.delay_p1 = delay_p1
        self.delay_p2 = delay_p2
        self.delay_p3 = delay_p3

    def __str__(self):
        return "ID: {}\tSEQ: {}\t P1: {}\t P2: {}\t P3: {}\t dP1: {}\t dP2: {}\t dP3: {}".format(self.id, self.seq, self.p1, self.p2, self.p3, self.delay_p1, self.delay_p2, self.delay_p3)


#incluir RAM na chamada
class CR:
    def __init__(self, id, cpu, num_BS, ram):
        self.id = id
        self.cpu = cpu
        self.num_BS = num_BS
        self.ram = ram

    def __str__(self):
        return "ID: {}\tCPU: {}".format(self.id, self.cpu)

class DRC:
    def __init__(self, id, cpu_CU, cpu_DU, cpu_RU, ram_CU, ram_DU, ram_RU, Fs_CU, Fs_DU, Fs_RU, delay_BH, delay_MH,
                 delay_FH, bw_BH, bw_MH, bw_FH):
        self.id = id

        self.cpu_CU = cpu_CU
        self.ram_CU = ram_CU
        self.Fs_CU = Fs_CU

        self.cpu_DU = cpu_DU
        self.ram_DU = ram_DU
        self.Fs_DU = Fs_DU

        self.cpu_RU = cpu_RU
        self.ram_RU = ram_RU
        self.Fs_RU = Fs_RU

        self.delay_BH = delay_BH
        self.delay_MH = delay_MH
        self.delay_FH = delay_FH

        self.bw_BH = bw_BH
        self.bw_MH = bw_MH
        self.bw_FH = bw_FH


class Fs:
    def __init__(self, id, f_cpu, f_ram):
        self.id = id
        self.f_cpu = f_cpu
        self.f_ram = f_ram


class RU:
    def __init__(self, id, CR):
        self.id = id
        self.CR = CR

    def __str__(self):
        return "RU: {}\tCR: {}".format(self.id, self.CR)


# Global vars
links = []
capacity = {}
delay = {}
CRs = {}
paths = {}
conj_Fs = {}


def read_topology():
    """
    READ TELEFONICA TOPOLOGY FILE
    This method read the topology json file and create the main structure that will be used in all model fases
    :rtype: insert in the globals structures the topology information. For that the method has no return
    """
    with open(constants.TOPOLOGY_PATH) as json_file:
        data = json.load(json_file)
        print("topology:")
        print(data)

        # create a set of links with delay and capacity read by the json file, stored in a global list "links"
        json_links = data["links"]
        for item in json_links:
            link = item
            source_node = int(link["fromNode"])
            destination_node = int(link["toNode"])

            # create links full duplex for each link readed by the json file
            if source_node < destination_node:
                capacity[(source_node, destination_node)] = link["capacity"]
                delay[(source_node, destination_node)] = float(link["delay"])
                links.append((source_node, destination_node))

            # creating links full duplex for each link readed by the json file
            else:
                capacity[(destination_node, source_node)] = link["capacity"]
                delay[(destination_node, source_node)] = float(link["delay"])
                links.append((destination_node, source_node))

        # create and store the set of CR's with RAM and CPU in a global list "CRs"-CR[0] is the core network without CR
        with open(constants.NODES_PATH) as json_file:
            data = json.load(json_file)
            print("nodes:")
            print(data)
            json_nodes = data["nodes"]
            for item in json_nodes:
                node = item
                CR_id = node["nodeNumber"]
                node_RAM = node["RAM"]
                node_CPU = node["cpu"]
                cr = CR(CR_id, node_CPU, node_RAM, node_RAM*1024)
                CRs[CR_id] = cr
        CRs[0] = CR(0, 0, 0, 0)

        # create a set of paths that are calculated previously by the algorithm implemented in "path_gen.py"
        with open('paths.json') as json_paths_file:
            # read the json file that contain the set of paths
            json_paths_f = json.load(json_paths_file)
            json_paths = json_paths_f["paths"]

            # for each path calculate the id, source (always the core node) and destination
            for item in json_paths:
                path = json_paths[item]
                path_id = path["id"]
                path_source = path["source"]

                if path_source == "CN":
                    path_source = 0

                path_target = path["target"]
                path_seq = path["seq"]

                # calculate the intermediate paths p1, p2 and p3 (that path's correspond to BH, MH and FH respectively)
                paths_p = [path["p1"], path["p2"], path["p3"]]

                list_p1 = []
                list_p2 = []
                list_p3 = []

                for path_p in paths_p:
                    aux = ""
                    sum_delay = 0

                    for tup in path_p:
                        aux += tup
                        tup_aux = tup
                        tup_aux = tup_aux.replace('(', '')
                        tup_aux = tup_aux.replace(')', '')
                        tup_aux = tuple(map(int, tup_aux.split(', ')))
                        if path_p == path["p1"]:
                            list_p1.append(tup_aux)
                        elif path_p == path["p2"]:
                            list_p2.append(tup_aux)
                        elif path_p == path["p3"]:
                            list_p3.append(tup_aux)
                        sum_delay += delay[tup_aux]

                    if path_p == path["p1"]:
                        delay_p1 = sum_delay
                    elif path_p == path["p2"]:
                        delay_p2 = sum_delay
                    elif path_p == path["p3"]:
                        delay_p3 = sum_delay

                    if path_seq[0] == 0:
                        delay_p1 = 0

                    if path_seq[1] == 0:
                        delay_p2 = 0

                # create the path and store at the global dict "paths"
                p = Path(path_id, path_source, path_target, path_seq, list_p1, list_p2, list_p3, delay_p1, delay_p2,
                         delay_p3)
                paths[path_id] = p


def DRC_structure():
    # create the DRC's and the set of DRC's
    # DRC5 = 8 -> NG-RAN(3) [CU]-[DU]-[RU]
    #DRC5 = DRC(5, 0.98, 0.735, 3.185, 0, 0, 0, [1, 2], [
       #        3, 4, 5], [6, 7, 8], 30, 30, 2, 151, 151, 152)
    DRC5 = DRC(5, 600, 600, 600, 880, 1200, 800, ['f8', 'f7'], ['f6', 'f5', 'f4', 'f3'], ['f2', 'f1', 'f0'], 30, 30, 2, 151, 151, 152)

    # DRC7 = 13 -> NG-RAN(2) [CU]-[DU+RU]
    #DRC7 = DRC(7, 0, 3, 3.92, 0, 0, 0, [0], [1, 2], [
     #          3, 4, 5, 6, 7, 8], 0, 30, 30, 0, 151, 151)
    DRC7 = DRC(7, 0, 1200, 600, 0, 2080, 800, [0], ['f8', 'f7'], ['f6', 'f5', 'f4', 'f3', 'f2', 'f1', 'f0'], 0, 30, 30, 0, 151, 151)

    # DRC10 = 17 -> C-RAN [CU+DU]-[RU]
    #DRC10 = DRC(10, 0, 1.71, 3.185, 0, 0, 0, [0], [
     #           1, 2, 3, 4, 5], [6, 7, 8], 0, 30, 2, 0, 151, 152)
    DRC10 = DRC(10, 0, 1200, 600, 0, 2080, 800, [0], ['f8', 'f7', 'f6', 'f5', 'f4', 'f3'], ['f2', 'f1', 'f0'], 0, 30, 2, 0, 151, 152)

    # DRC8 = 19 -> D-RAN [CU+DU+RU]
    #DRC8 = DRC(8, 0, 0, 4.9, 0, 0, 0, [0], [0], [
     #          1, 2, 3, 4, 5, 6, 7, 8], 0, 0, 30, 0, 0, 151)
    DRC8 = DRC(8, 0, 0, 1800, 0, 0, 2880, [0], [0], ['f8', 'f7', 'f6', 'f5', 'f4', 'f3', 'f2', 'f1', 'f0'], 0, 0, 30, 0, 0, 151)

    # set of DRC's
    DRCs = {5: DRC5, 7: DRC7, 8: DRC8, 10: DRC10}

    return DRCs


def ru_location():
    """
    Read TELEFONICA topology files
    :return:
    """
    rus = {}
    count = 1
    with open(constants.NODES_PATH) as json_file:
        data = json.load(json_file)

        json_CRs = data["nodes"]

        for item in json_CRs:
            node = item
            num_rus = node["RU"]
            num_CR = node["nodeNumber"]

            for i in range(0, num_rus):
                rus[count] = RU(count, int(num_CR))
                count += 1

    return rus


DRC_f1 = 0
f1_vars = []
f2_vars = []


def run_phase_1():
    """
    This method uses the topology main structure to calculate the optimal solution of the fase 1
    :rtype: This method returns the optimal value of the fase 1
    """

    print("Running Fase - 1")
    print("-----------------------------------------------------------------------------------------------------------")
    alocation_time_start = time.time()

    # read the topology data at the json file
    read_topology()

    DRCs = DRC_structure()

    rus = ru_location()

    # Creates the set of Fs (functional splits)
    # Fs(id, f_cpu, f_ram)
    F1 = Fs('f8', 2, 2)
    F2 = Fs('f7', 2, 2)
    F3 = Fs('f6', 2, 2)
    F4 = Fs('f5', 2, 2)
    F5 = Fs('f4', 2, 2)
    F6 = Fs('f3', 2, 2)
    F7 = Fs('f2', 2, 2)
    F8 = Fs('f1', 2, 2)
    F9 = Fs('f0', 2, 2)
    conj_Fs = {'f8': F1, 'f7': F2, 'f6': F3, 'f5': F4, 'f4': F5, 'f3': F6, 'f2': F7}

    # create the fase 1 model
    mdl = Model(name='NGRAN Problem', log_output=True)

    # tuple that will be used by the decision variable
    i = [(p, d, b)
         for p in paths for d in DRCs for b in rus if paths[p].seq[2] == rus[b].CR]

    # Decision variable X
    mdl.x = mdl.binary_var_dict(i, name='x')

    # Fase 1 - Objective Function
    mdl.minimize(mdl.sum(mdl.min(1, mdl.sum(mdl.x[it] for it in i if c in paths[it[0]].seq)) for c in CRs
                         if CRs[c].id != 0) - mdl.sum(mdl.sum(mdl.max(0, (mdl.sum(mdl.x[it] for it in i
                                                                                  if ((o in DRCs[it[1]].Fs_CU and paths[it[0]].seq[0] == CRs[c].id) or (o in DRCs[it[1]].Fs_DU
                                                                                                                                                        and paths[it[0]].seq[1] == CRs[c].id) or (o in DRCs[it[1]].Fs_RU
                                                                                                                                                                                                  and paths[it[0]].seq[2] == CRs[c].id))) - 1)) for o in conj_Fs) for c in CRs))

    # Constraint 1 (4)
    for b in rus:
        mdl.add_constraint(mdl.sum(mdl.x[it]
                                   for it in i if it[2] == b) == 1, 'unicity')

    # Constrains 1.1 (N)
    mdl.add_constraint(mdl.sum(
        mdl.x[it] for it in i if paths[it[0]].target != rus[it[2]].CR) == 0, 'path')

    # constraint 1.2 (N) quebras de 2 so pode escolher caminhos de 2 quebras
    mdl.add_constraint(mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[0] != 0 and (
        it[1] == 6 or it[1] == 7 or it[1] == 8 or it[1] == 9 or it[1] == 10)) == 0, 'DRCs_path_pick')

    # constraint 1.3 (N) quebras de 3 so pode escolher caminhos de 3 quebras
    mdl.add_constraint(mdl.sum(mdl.x[it] for it in i if
                               paths[it[0]].seq[0] == 0 and it[1] != 6 and it[1] != 7 and it[1] != 8 and it[1] != 9
                               and it[1] != 10) == 0, 'DRCs_path_pick2')

    # constraint 1.4 (N) quebras de 1 so pode escolher caminhos de 1 quebras
    mdl.add_constraint(
        mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[0] ==
                0 and paths[it[0]].seq[1] == 0 and it[1] != 8) == 0,
        'DRCs_path_pick3')

    # constraint 1.5 (N) caminhos de 2 CR's nao podem usar D-RAN
    mdl.add_constraint(
        mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[0] ==
                0 and paths[it[0]].seq[1] != 0 and it[1] == 8) == 0,
        'DRCs_path_pick4')

    # #constraint 1.6 (N) caminhos devem ir para o CR que esta posicionado o RU
    for ru in rus:
        mdl.add_constraint(
            mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[2] != rus[ru].CR and it[2] == rus[ru].id) == 0)

    # Constraint 2 (5)
    for l in links:
        for k in links:
            if l[0] == k[1] and l[1] == k[0]:
                break
        mdl.add_constraint(mdl.sum(mdl.x[it] * DRCs[it[1]].bw_BH for it in i if l in paths[it[0]].p1) +
                           mdl.sum(mdl.x[it] * DRCs[it[1]].bw_MH for it in i if l in paths[it[0]].p2) +
                           mdl.sum(mdl.x[it] * DRCs[it[1]].bw_FH for it in i if l in paths[it[0]].p3) +
                           mdl.sum(mdl.x[it] * DRCs[it[1]].bw_BH for it in i if k in paths[it[0]].p1) +
                           mdl.sum(mdl.x[it] * DRCs[it[1]].bw_MH for it in i if k in paths[it[0]].p2) +
                           mdl.sum(
                               mdl.x[it] * DRCs[it[1]].bw_FH for it in i if k in paths[it[0]].p3) <= capacity[l],
                           'links_bw')

    # Constraint 3 (6)
    for it in i:
        mdl.add_constraint(
            (mdl.x[it] * paths[it[0]].delay_p1) <= DRCs[it[1]].delay_BH, 'delay_req_p1')

    # Constraint 4 (7)
    for it in i:
        mdl.add_constraint(
            (mdl.x[it] * paths[it[0]].delay_p2) <= DRCs[it[1]].delay_MH, 'delay_req_p2')

    # Constraint 5 (8)
    for it in i:
        mdl.add_constraint(
            (mdl.x[it] * paths[it[0]].delay_p3 <= DRCs[it[1]].delay_FH), 'delay_req_p3')

    # Constraint 6 (9) CPU
    for c in CRs:
        mdl.add_constraint(mdl.sum(mdl.x[it] * DRCs[it[1]].cpu_CU for it in i if c == paths[it[0]].seq[0]) +
                           mdl.sum(mdl.x[it] * DRCs[it[1]].cpu_DU for it in i if c == paths[it[0]].seq[1]) +
                           mdl.sum(
                               mdl.x[it] * DRCs[it[1]].cpu_RU for it in i if c == paths[it[0]].seq[2]) <= CRs[c].cpu,
                           'CRs_cpu_usage')
    # Constraint 7 (9) RAM
    for c in CRs:
        mdl.add_constraint(
            mdl.sum(mdl.x[it] * DRCs[it[1]].ram_CU for it in i if c == paths[it[0]].seq[0]) + mdl.sum(
                mdl.x[it] * DRCs[it[1]].ram_DU for it in i if c == paths[it[0]].seq[1]) + mdl.sum(
                mdl.x[it] * DRCs[it[1]].ram_RU for it in i if c == paths[it[0]].seq[2]) <= CRs[c].ram,
            'CRs_ram_usage')

    alocation_time_end = time.time()
    start_time = time.time()
    mdl.solve()
    end_time = time.time()
    print("Stage 1 - Alocation Time: {}".format(alocation_time_end - alocation_time_start))
    print("Stage 1 - Enlapsed Time: {}".format(end_time - start_time))
    
    if mdl.solution is None:
        sys.exit("Stage 1 - Solution not found. Failing algorithm execution")
    
    print("FO: {}".format(mdl.solution.get_objective_value()))

    global f1_vars
    for it in i:
        if mdl.x[it].solution_value > 0:
            f1_vars.append(it)

    with open("stage_1_solution.json", "w") as stage_1_result:
        result_list = {"Solution": []}
        for it in i:
            if mdl.x[it].solution_value > 0:
                result = {RU_ID: 0, DRC_str: 0, CU_POS: 0,
                          DU_POS: 0, RU_POS: 0, PATH: []}
                path_sol = []
                sol_DRC = it[1]
                ru_id = it[2]
                if paths[it[0]].p1:
                    for item in paths[it[0]].p1:
                        path_sol.append(item)
                if paths[it[0]].p2:
                    for item in paths[it[0]].p2:
                        path_sol.append(item)
                if paths[it[0]].p3:
                    for item in paths[it[0]].p3:
                        path_sol.append(item)
                result[PATH] = path_sol
                cu_loc = paths[it[0]].seq[0]
                du_loc = paths[it[0]].seq[1]
                ru_loc = paths[it[0]].seq[2]
                result[RU_ID] = ru_id
                if du_loc == 0:
                    du_loc = ru_loc
                    cu_loc = du_loc
                elif cu_loc == 0 and it[1] > 8:
                    cu_loc = du_loc
                elif cu_loc == 0 and it[1] < 9:
                    cu_loc = du_loc
                    du_loc = ru_loc
                result[RU_ID] = ru_id
                result[DRC_str] = sol_DRC
                result[CU_POS] = cu_loc
                result[DU_POS] = du_loc
                result[RU_POS] = ru_loc
                result[PATH] = path_sol

                result_list["Solution"].append(result)

        print(result_list)
        json.dump(result_list, stage_1_result)

    return mdl.solution.get_objective_value()


def run_phase_2(FO_fase_1):
    """
    This method uses the topology main structure to calculate the optimal solution of the fase 2
    :rtype: This method returns the optimal value of the fase 2
    """

    print("Running Fase - 2")
    print("-----------------------------------------------------------------------------------------------------------")
    alocation_time_start = time.time()

    # read the topology data at the json file
    read_topology()
    DRCs = DRC_structure()
    rus = ru_location()

    # Creates the set of Fs (functional splits)
    # Fs(id, f_cpu, f_ram)
    F1 = Fs('f8', 2, 2)
    F2 = Fs('f7', 2, 2)
    F3 = Fs('f6', 2, 2)
    F4 = Fs('f5', 2, 2)
    F5 = Fs('f4', 2, 2)
    F6 = Fs('f3', 2, 2)
    F7 = Fs('f2', 2, 2)
    F8 = Fs('f1', 2, 2)
    F9 = Fs('f0', 2, 2)
    conj_Fs = {'f8': F1, 'f7': F2, 'f6': F3, 'f5': F4, 'f4': F5, 'f3': F6, 'f2': F7}

    # create the fase 1 model
    mdl = Model(name='NGRAN Problem2', log_output=False)

    # tuple that will be used by the decision variable
    i = [(p, d, b)
         for p in paths for d in DRCs for b in rus if paths[p].seq[2] == rus[b].CR]

    # Decision variable X
    mdl.x = mdl.binary_var_dict(i, name='x')

    # Fase 2 - Objective Function
    mdl.minimize(mdl.sum(
        mdl.min(1, mdl.sum(mdl.x[it] for it in i if it[1] == DRC)) for DRC in DRCs))

    # Constraint fase 1
    mdl.add_constraint(mdl.sum(
        mdl.min(1, mdl.sum(mdl.x[it] for it in i if c in paths[it[0]].seq)) for c in CRs if CRs[c].id != 0) - mdl.sum(
        mdl.sum(mdl.max(0, (mdl.sum(mdl.x[it] for it in i if (
            (o in DRCs[it[1]].Fs_CU and paths[it[0]].seq[0] == CRs[c].id) or (
                o in DRCs[it[1]].Fs_DU and paths[it[0]].seq[1] == CRs[c].id) or (
                o in DRCs[it[1]].Fs_RU and paths[it[0]].seq[2] == CRs[c].id))) - 1)) for o in conj_Fs)
        for c in CRs) == FO_fase_1)

    # Constraint 1 (4)
    for b in rus:
        mdl.add_constraint(mdl.sum(mdl.x[it]
                                   for it in i if it[2] == b) == 1, 'unicity')

    # Constrains 1.1 (N)
    mdl.add_constraint(mdl.sum(
        mdl.x[it] for it in i if paths[it[0]].target != rus[it[2]].CR) == 0, 'path')

    # constraint 1.2 (N) quebras de 2 so pode escolher caminhos de 2 quebras
    mdl.add_constraint(mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[0] != 0 and (
        it[1] == 6 or it[1] == 7 or it[1] == 8 or it[1] == 9 or it[1] == 10)) == 0, 'DRCs_path_pick')

    # constraint 1.3 (N) quebras de 3 so pode escolher caminhos de 3 quebras
    mdl.add_constraint(mdl.sum(mdl.x[it] for it in i if
                               paths[it[0]].seq[0] == 0 and it[1] != 6 and it[1] != 7 and it[1] != 8 and it[1] != 9 and
                               it[1] != 10) == 0, 'DRCs_path_pick2')
    # contraint 1.4 (N) quebras de 1 so pode escolher caminhos de 1 quebras
    mdl.add_constraint(
        mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[0] ==
                0 and paths[it[0]].seq[1] == 0 and it[1] != 8) == 0,
        'DRCs_path_pick3')

    # contraint 1.5 (N) caminhos de 2 CR's nao podem usar D-RAN
    mdl.add_constraint(
        mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[0] ==
                0 and paths[it[0]].seq[1] != 0 and it[1] == 8) == 0,
        'DRCs_path_pick4')

    # #constraint 1.6 (N) caminhos devem ir para o CR que esta posicionado o RU
    for ru in rus:
        mdl.add_constraint(
            mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[2] != rus[ru].CR and it[2] == rus[ru].id) == 0)

    # Constraint 2 (5)
    for l in links:
        for k in links:
            if l[0] == k[1] and l[1] == k[0]:
                break
        mdl.add_constraint(mdl.sum(mdl.x[it] * DRCs[it[1]].bw_BH for it in i if l in paths[it[0]].p1) + mdl.sum(
            mdl.x[it] * DRCs[it[1]].bw_MH for it in i if l in paths[it[0]].p2) + mdl.sum(
            mdl.x[it] * DRCs[it[1]].bw_FH for it in i if l in paths[it[0]].p3) +
            mdl.sum(mdl.x[it] * DRCs[it[1]].bw_BH for it in i if k in paths[it[0]].p1) + mdl.sum(
            mdl.x[it] * DRCs[it[1]].bw_MH for it in i if k in paths[it[0]].p2) + mdl.sum(
            mdl.x[it] * DRCs[it[1]].bw_FH for it in i if k in paths[it[0]].p3)
            <= capacity[l], 'links_bw')

    # Constraint 3 (6)
    for it in i:
        mdl.add_constraint(
            (mdl.x[it] * paths[it[0]].delay_p1) <= DRCs[it[1]].delay_BH, 'delay_req_p1')

    # Constraint 4 (7)
    for it in i:
        mdl.add_constraint(
            (mdl.x[it] * paths[it[0]].delay_p2) <= DRCs[it[1]].delay_MH, 'delay_req_p2')

    # Constraint 5 (8)
    for it in i:
        mdl.add_constraint(
            (mdl.x[it] * paths[it[0]].delay_p3 <= DRCs[it[1]].delay_FH), 'delay_req_p3')

    # Constraint 6 (9)
    for c in CRs:
        mdl.add_constraint(
            mdl.sum(mdl.x[it] * DRCs[it[1]].cpu_CU for it in i if c == paths[it[0]].seq[0]) + mdl.sum(
                mdl.x[it] * DRCs[it[1]].cpu_DU for it in i if c == paths[it[0]].seq[1]) + mdl.sum(
                mdl.x[it] * DRCs[it[1]].cpu_RU for it in i if c == paths[it[0]].seq[2]) <= CRs[c].cpu,
            'CRs_cpu_usage')

    # Constraint 7 (9) RAM
    for c in CRs:
        mdl.add_constraint(
            mdl.sum(mdl.x[it] * DRCs[it[1]].ram_CU for it in i if c == paths[it[0]].seq[0]) + mdl.sum(
                mdl.x[it] * DRCs[it[1]].ram_DU for it in i if c == paths[it[0]].seq[1]) + mdl.sum(
                mdl.x[it] * DRCs[it[1]].ram_RU for it in i if c == paths[it[0]].seq[2]) <= CRs[c].ram,
            'CRs_ram_usage')

    warm_start = mdl.new_solution()

    for it in f1_vars:
        warm_start.add_var_value(mdl.x[it], 1)

    mdl.add_mip_start(warm_start)

    alocation_time_end = time.time()
    start_time = time.time()
    mdl.solve()
    end_time = time.time()

    print("Stage 2 - Alocation Time: {}".format(alocation_time_end - alocation_time_start))
    print("Stage 2 - Enlapsed Time: {}".format(end_time - start_time))

    with open("stage_2_solution.json", "w") as stage_2_result:
        result_list = {"Solution": []}
        for it in i:
            if mdl.x[it].solution_value > 0:
                result = {RU_ID: 0, DRC_str: 0, CU_POS: 0,
                          DU_POS: 0, RU_POS: 0, PATH: []}
                path_sol = []
                sol_DRC = it[1]
                ru_id = it[2]
                if paths[it[0]].p1:
                    for item in paths[it[0]].p1:
                        path_sol.append(item)
                if paths[it[0]].p2:
                    for item in paths[it[0]].p2:
                        path_sol.append(item)
                if paths[it[0]].p3:
                    for item in paths[it[0]].p3:
                        path_sol.append(item)
                result[PATH] = path_sol
                cu_loc = paths[it[0]].seq[0]
                du_loc = paths[it[0]].seq[1]
                ru_loc = paths[it[0]].seq[2]
                result[RU_ID] = ru_id
                if du_loc == 0:
                    du_loc = ru_loc
                    cu_loc = du_loc
                elif cu_loc == 0 and it[1] > 8:
                    cu_loc = du_loc
                elif cu_loc == 0 and it[1] < 9:
                    cu_loc = du_loc
                    du_loc = ru_loc
                result[RU_ID] = ru_id
                result[DRC_str] = sol_DRC
                result[CU_POS] = cu_loc
                result[DU_POS] = du_loc
                result[RU_POS] = ru_loc
                result[PATH] = path_sol

                result_list["Solution"].append(result)
        json.dump(result_list, stage_2_result)

    if mdl.solution is None:
        sys.exit("Stage 1 - Solution not found. Failing algorithm execution")

    print("FO: {}".format(mdl.solution.get_objective_value()))

    global f2_vars
    for it in i:
        if mdl.x[it].solution_value > 0:
            f2_vars.append(it)

    return mdl.solution.get_objective_value()


def run_phase_3(FO_fase_1, FO_fase_2):
    """
    This method uses the topology main structure to calculate the optimal solution of the fase 3
    :rtype: This method returns the optimal value of the fase 3
    """

    print("Running Fase - 3")
    print("-----------------------------------------------------------------------------------------------------------")
    alocation_time_start = time.time()

    # read the topology data at the json file
    read_topology()
    DRCs = DRC_structure()
    rus = ru_location()

    # Creates the set of Fs (functional splits)
    # Fs(id, f_cpu, f_ram)
    F1 = Fs('f8', 2, 2)
    F2 = Fs('f7', 2, 2)
    F3 = Fs('f6', 2, 2)
    F4 = Fs('f5', 2, 2)
    F5 = Fs('f4', 2, 2)
    F6 = Fs('f3', 2, 2)
    F7 = Fs('f2', 2, 2)
    F8 = Fs('f1', 2, 2)
    F9 = Fs('f0', 2, 2)
    conj_Fs = {'f8': F1, 'f7': F2, 'f6': F3, 'f5': F4, 'f4': F5, 'f3': F6, 'f2': F7}

    # set of DRC priority
    DRC_p = {5: 4, 7: 10, 8: 25, 10: 8}

    # create the fase 1 model
    mdl = Model(name='NGRAN Problem3', log_output=False)

    # tuple that will be used by the decision variable
    i = [(p, d, b)
         for p in paths for d in DRCs for b in rus if paths[p].seq[2] == rus[b].CR]

    # Decision variable X
    mdl.x = mdl.binary_var_dict(i, name='x')

    # Fase 3 Objective Function
    mdl.minimize(mdl.sum(mdl.sum(mdl.x[it] * DRC_p[it[1]]
                                 for it in i if it[1] == DRC) for DRC in DRCs))

    # Constraint fase 2
    mdl.add_constraint(mdl.sum(mdl.min(1, mdl.sum(
        mdl.x[it] for it in i if it[1] == DRC)) for DRC in DRCs) == FO_fase_2)

    # Constraint fase 1
    mdl.add_constraint(mdl.sum(
        mdl.min(1, mdl.sum(mdl.x[it] for it in i if c in paths[it[0]].seq)) for c in CRs if CRs[c].id != 0) - mdl.sum(
        mdl.sum(mdl.max(0, (mdl.sum(mdl.x[it] for it in i if (
            (o in DRCs[it[1]].Fs_CU and paths[it[0]].seq[0] == CRs[c].id) or (
                o in DRCs[it[1]].Fs_DU and paths[it[0]].seq[1] == CRs[c].id) or (
                o in DRCs[it[1]].Fs_RU and paths[it[0]].seq[2] == CRs[c].id))) - 1)) for o in conj_Fs)
        for c in CRs) == FO_fase_1)

    # Constraint 1 (4)
    for b in rus:
        mdl.add_constraint(mdl.sum(mdl.x[it]
                                   for it in i if it[2] == b) == 1, 'unicity')

    # Constrains 1.1 (N)
    mdl.add_constraint(mdl.sum(
        mdl.x[it] for it in i if paths[it[0]].target != rus[it[2]].CR) == 0, 'path')

    # constraint 1.2 (N) quebras de 2 so pode escolher caminhos de 2 quebras
    mdl.add_constraint(mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[0] != 0 and (
        it[1] == 6 or it[1] == 7 or it[1] == 8 or it[1] == 9 or it[1] == 10)) == 0, 'DRCs_path_pick')

    # constraint 1.3 (N) quebras de 3 so pode escolher caminhos de 3 quebras
    mdl.add_constraint(mdl.sum(mdl.x[it] for it in i if
                               paths[it[0]].seq[0] == 0 and it[1] != 6 and it[1] != 7 and it[1] != 8 and it[1] != 9 and
                               it[1] != 10) == 0, 'DRCs_path_pick2')

    # contraint 1.4 (N) quebras de 1 so pode escolher caminhos de 1 quebras
    mdl.add_constraint(
        mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[0] ==
                0 and paths[it[0]].seq[1] == 0 and it[1] != 8) == 0,
        'DRCs_path_pick3')

    # contraint 1.5 (N) caminhos de 2 CR's nao podem usar D-RAN
    mdl.add_constraint(
        mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[0] ==
                0 and paths[it[0]].seq[1] != 0 and it[1] == 8) == 0,
        'DRCs_path_pick4')

    # #constraint 1.6 (N) caminhos devem ir para o CR que esta posicionado o RU
    for ru in rus:
        mdl.add_constraint(
            mdl.sum(mdl.x[it] for it in i if paths[it[0]].seq[2] != rus[ru].CR and it[2] == rus[ru].id) == 0)

    # Constraint 2 (5)
    for l in links:
        for k in links:
            if l[0] == k[1] and l[1] == k[0]:
                break
        mdl.add_constraint(mdl.sum(mdl.x[it] * DRCs[it[1]].bw_BH for it in i if l in paths[it[0]].p1) + mdl.sum(
            mdl.x[it] * DRCs[it[1]].bw_MH for it in i if l in paths[it[0]].p2) + mdl.sum(
            mdl.x[it] * DRCs[it[1]].bw_FH for it in i if l in paths[it[0]].p3) +
            mdl.sum(mdl.x[it] * DRCs[it[1]].bw_BH for it in i if k in paths[it[0]].p1) + mdl.sum(
            mdl.x[it] * DRCs[it[1]].bw_MH for it in i if k in paths[it[0]].p2) + mdl.sum(
            mdl.x[it] * DRCs[it[1]].bw_FH for it in i if k in paths[it[0]].p3)
            <= capacity[l], 'links_bw')

    # Constraint 3 (6)
    for it in i:
        mdl.add_constraint(
            (mdl.x[it] * paths[it[0]].delay_p1) <= DRCs[it[1]].delay_BH, 'delay_req_p1')

    # Constraint 4 (7)
    for it in i:
        mdl.add_constraint(
            (mdl.x[it] * paths[it[0]].delay_p2) <= DRCs[it[1]].delay_MH, 'delay_req_p2')

    # Constraint 5 (8)
    for it in i:
        mdl.add_constraint(
            (mdl.x[it] * paths[it[0]].delay_p3 <= DRCs[it[1]].delay_FH), 'delay_req_p3')

    # Constraint 6 (9)
    for c in CRs:
        mdl.add_constraint(
            mdl.sum(mdl.x[it] * DRCs[it[1]].cpu_CU for it in i if c == paths[it[0]].seq[0]) + mdl.sum(
                mdl.x[it] * DRCs[it[1]].cpu_DU for it in i if c == paths[it[0]].seq[1]) + mdl.sum(
                mdl.x[it] * DRCs[it[1]].cpu_RU for it in i if c == paths[it[0]].seq[2]) <= CRs[c].cpu,
            'CRs_cpu_usage')

    # Constraint 7 (9) RAM
    for c in CRs:
        mdl.add_constraint(
            mdl.sum(mdl.x[it] * DRCs[it[1]].ram_CU for it in i if c == paths[it[0]].seq[0]) + mdl.sum(
                mdl.x[it] * DRCs[it[1]].ram_DU for it in i if c == paths[it[0]].seq[1]) + mdl.sum(
                mdl.x[it] * DRCs[it[1]].ram_RU for it in i if c == paths[it[0]].seq[2]) <= CRs[c].ram,
            'CRs_ram_usage')

    alocation_time_end = time.time()
    start_time = time.time()

    warm_start = mdl.new_solution()
    for it in f2_vars:
        warm_start.add_var_value(mdl.x[it], 1)

    mdl.add_mip_start(warm_start)

    mdl.solve()
    end_time = time.time()
    print("Stage 3 - Alocation Time: {}".format(alocation_time_end - alocation_time_start))
    print("Stage 3 - Enlapsed Time: {}".format(end_time - start_time))

    with open("stage_3_solution.json", "w") as stage_3_result:
        result_list = {"Solution": []}
        for it in i:
            if mdl.x[it].solution_value > 0:
                result = {RU_ID: 0, DRC_str: 0, CU_POS: 0,
                          DU_POS: 0, RU_POS: 0, PATH: []}
                path_sol = []
                sol_DRC = it[1]
                ru_id = it[2]
                if paths[it[0]].p1:
                    for item in paths[it[0]].p1:
                        path_sol.append(item)
                if paths[it[0]].p2:
                    for item in paths[it[0]].p2:
                        path_sol.append(item)
                if paths[it[0]].p3:
                    for item in paths[it[0]].p3:
                        path_sol.append(item)
                result[PATH] = path_sol
                cu_loc = paths[it[0]].seq[0]
                du_loc = paths[it[0]].seq[1]
                ru_loc = paths[it[0]].seq[2]
                result[RU_ID] = ru_id
                if du_loc == 0:
                    du_loc = ru_loc
                    cu_loc = du_loc
                elif cu_loc == 0 and it[1] > 8:
                    cu_loc = du_loc
                elif cu_loc == 0 and it[1] < 9:
                    cu_loc = du_loc
                    du_loc = ru_loc
                result[RU_ID] = str(ru_id)
                result[DRC_str] = str(sol_DRC)
                result[CU_POS] = str(cu_loc)
                result[DU_POS] = str(du_loc)
                result[RU_POS] = str(ru_loc)
                result[PATH] = path_sol

                result_list["Solution"].append(result)
        json.dump(result_list, stage_3_result)
        if mdl.solution is None:
            sys.exit("Stage 1 - Solution not found. Failing algorithm execution")
        print("FO: {}".format(mdl.solution.get_objective_value()))

        return result_list


if __name__ == '__main__':
    initial_validation()

    print("starting paths generation")
    path_gen()

    start_all = time.time()

    print("starting phase 1")
    FO_fase_1 = run_phase_1()
    print("starting phase 2")
    FO_fase_2 = run_phase_2(FO_fase_1)
    print("starting phase 3")
    result = run_phase_3(FO_fase_1, FO_fase_2)

    end_all = time.time()

    res = result["Solution"]
    print(f"result: {res}")

    output_result(result["Solution"])
    
    print("TOTAL TIME: {}".format(end_all - start_all))
