def run_simulation(temperature, rainfall):
    """
    Simple climate impact simulation logic
    """

    impact = []
    risk_level = "LOW"

    if temperature > 2:
        impact.append("High temperature increase may cause heat stress.")
        risk_level = "HIGH"
    elif temperature > 1:
        impact.append("Moderate warming detected.")
        risk_level = "MEDIUM"
    else:
        impact.append("Temperature within safe limits.")

    if rainfall < -20:
        impact.append("Severe rainfall reduction may cause drought.")
        risk_level = "HIGH"
    elif rainfall < -10:
        impact.append("Moderate rainfall decrease observed.")
        risk_level = "MEDIUM"
    else:
        impact.append("Rainfall levels are stable.")

    return {
        "risk": risk_level,
        "impacts": impact
    }
