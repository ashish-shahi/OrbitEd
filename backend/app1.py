from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from simulation import run_simulation

app = Flask(__name__)
CORS(app)

# Load satellite-inspired climate data
with open("data/india_climate.json") as f:
    climate_data = json.load(f)

@app.route("/simulate", methods=["POST"])
def simulate():
    data = request.json

    temperature = float(data["temperature"])
    rainfall = float(data["rainfall"])
    irrigation = float(data["irrigation"])

    result = run_simulation(
        temperature_change=temperature,
        rainfall_change=rainfall,
        irrigation_level=irrigation,
        base_data=climate_data
    )

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
