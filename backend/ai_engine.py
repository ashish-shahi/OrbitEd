def generate_explanation(simulation_result):
    """
    AI-style explanation generator
    """

    risk = simulation_result["risk"]
    impacts = simulation_result["impacts"]

    explanation = f"Overall environmental risk is {risk}. "

    for item in impacts:
        explanation += item + " "

    explanation += "Immediate monitoring and preventive actions are recommended."

    return explanation
