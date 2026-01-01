// Initialize map centered on India
const map = L.map("map").setView([20.5937, 78.9629], 5);

// Dark satellite-style basemap
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  {
    attribution: "© OpenStreetMap, © CartoDB"
  }
).addTo(map);

// Risk marker (default LOW)
let riskMarker = L.circleMarker([20.5937, 78.9629], {
  radius: 15,
  color: "#22c55e",
  fillColor: "#22c55e",
  fillOpacity: 0.8
}).addTo(map);

riskMarker.bindPopup("🌍 Risk Level: LOW");

// Function to update marker dynamically
function updateRiskOnMap(risk) {
  let color = "#22c55e";
  let text = "LOW";

  if (risk === "MEDIUM") {
    color = "#f59e0b";
    text = "MEDIUM";
  } else if (risk === "HIGH") {
    color = "#ef4444";
    text = "HIGH";
  }

  riskMarker.setStyle({
    color: color,
    fillColor: color
  });

  riskMarker.setPopupContent(`🌍 Risk Level: ${text}`);
}
// Load saved risk from simulator
const savedRisk = localStorage.getItem("orbitEdRisk");

if (savedRisk) {
  updateRiskOnMap(savedRisk);
}
