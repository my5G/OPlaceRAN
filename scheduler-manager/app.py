import flask
from flask import request
from flask_json_schema import JsonSchema
from k8s_handler import JobHandler

from kubernetes.client.rest import ApiException

import json

app = flask.Flask(__name__)
app.config["DEBUG"] = True
schema = JsonSchema(app)

schedule_schema = {
    'type': 'object',
    'properties': {
        'topology': {
            'type': 'object',
        },
        'nodes': {
            'type': 'object',
        },
    },
    'required': ['topology', 'nodes']
}


@app.route('/schedule', methods=['POST'])
@schema.validate(schedule_schema)
def schedule_post():
    if request.content_type != 'application/json' or not request.is_json:
        return bad_request()

    data = request.get_json()
    if data is None or data == []:
        return bad_request()

    try:
        handler = JobHandler()
        job_token = register_job(nodes, topology)
    except ApiException as e:
        print(e)
        return error_registering_job()

    return {"job_token": job_token}


@app.route('/schedule', methods=['GET'])
def schedule_get():
    job_token = request.args.get('job_token')
    if job_token is None:
        return bad_request()

    try:
        handler = JobHandler(job_token)
        result = handler.get_result()
    except ApiException as e:
        if e.status == 404:
            return job_not_found()
        return error_getting_job_result()

    return result

@app.errorhandler(500)
def error_registering_job(error):
    return 'Error registering algorithm job', 500

@app.errorhandler(404)
def job_not_found(error):
    return 'Job Not Found', 404


@app.errorhandler(500)
def error_getting_job_result(error):
    return 'Error getting job result', 500


@app.errorhandler(400)
def bad_request(error):
    return 'Bad Request', 400

app.run()
