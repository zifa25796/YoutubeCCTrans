from flask import Flask, jsonify, request
from flask_cors import CORS
from CCAPI import *

app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/')
def index():
    return jsonify({'status': 200})

@app.route('/test', methods=['POST'])
def post_data():
    data = request.get_json()
    print(data)

    response = jsonify({'status': 200, 'data': getSingleVedilCCList(data['id'])})

    return response

if __name__ == '__main__':
    app.run(debug=True)