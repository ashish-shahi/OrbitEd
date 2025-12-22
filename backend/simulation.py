def run_simulation(temperature_change, rainfall_change, irrigation_level, base_data):
    """
    Core Earth Crisis Simulation Logic
    """

    # Base values from "satellite data"
    base_ndvi = base_data["base_ndvi"]

    # NDVI calculation (simple but meaningful)
    ndvi = (
        base_ndvi
        + (rainfall_change * 0.002)       # rainfall helps vegetation
        - (temperature_change * 0.03)     # heat stress
        + (irrigation_level * 0.1)        # human intervention
    )

    # Clamp NDVI between 0 and 1
    ndvi = max(0, min(ndvi, 1))

    # Convert NDVI to yield percentage
    yield_percent = round(ndvi * 100, 2)

    # Risk assessment
    if ndvi >= 0.65:
        risk = "Low Risk 🌱"
        message = "Healthy vegetation with good growing conditions."
    elif ndvi >= 0.4:
        risk = "Medium Risk ⚠️"
        message = "Moderate crop stress detected. Attention required."
    else:
        risk = "High Risk 🚨"
        message = "Severe environmental stress. Crop failure likely."

    return {
        "ndvi": round(ndvi, 2),
        "yield": yield_percent,
        "risk": risk,
        "message": message
    }
