import flask
from flask import request, jsonify
from flask_json_schema import JsonSchema, JsonValidationError
from k8s_handler import JobHandler

from kubernetes.client.rest import ApiException

import json

app = flask.Flask(__name__)
# app.config["DEBUG"] = True
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
        'algorithm': {
            'type': 'string'
        },
        'rus': {
            'type': 'object'
        }
    },
    'required': ['topology', 'nodes', 'algorithm', 'rus']
}

algorithm_allow_list = {
    "ubuntu": None
}


@app.route('/schedule', methods=['POST'])
@schema.validate(schedule_schema)
def schedule_post():
    if request.content_type != 'application/json' or not request.is_json:
        return bad_request()

    data = request.get_json()
    if data is None or data == []:
        return bad_request()

    if data["algorithm"] not in algorithm_allow_list:
        return f"Algorithm " + data["algorithm"] + " is not allowed", 400

    try:
        handler = JobHandler()
        job_token = handler.register(
            data["nodes"], data["topology"], data["algorithm"], data["rus"])
    except ApiException as e:
        print(e)
        return f"Error registering job: {e.reason}", e.status

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
        return f"Error getting job result: {e.reason}", e.status

    return result


@app.errorhandler(500)
def error_registering_job(error):
    return error, 500


@app.errorhandler(400)
def bad_request(error):
    return f"Bad Request: {error}", 400


@app.errorhandler(JsonValidationError)
def error_validating_schema(error):
    return jsonify({'error': error.message, 'errors': [validation_error.message for validation_error in error.errors]})


app.run()
