from flask import Flask, request, jsonify
from flask_cors import CORS
from simulation import run_simulation
from ai_engine import generate_explanation

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "status": "Orbit-Ed Backend Running"
    })
@app.route("/simulate", methods=["POST"])
def simulate():
    data = request.json

    temperature = float(data.get("temperature", 1))
    rainfall = float(data.get("rainfall", 0))

    simulation_result = run_simulation(temperature, rainfall)
    explanation = generate_explanation(simulation_result)

    return jsonify({
        "temperature_change": temperature,
        "rainfall_change": rainfall,
        "risk_level": simulation_result["risk"],
        "impacts": simulation_result["impacts"],
        "ai_explanation": explanation
    })


if __name__ == "__main__":
    app.run(debug=True)
