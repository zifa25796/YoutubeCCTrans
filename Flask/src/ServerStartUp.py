from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return jsonify({'status': 500})

if __name__ == '__main__':
    app.run(debug=True)