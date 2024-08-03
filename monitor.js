document.getElementById('health-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const heartRate = document.getElementById('heart-rate').value;
    const bloodPressure = document.getElementById('blood-pressure').value;
    const bloodSugar = document.getElementById('blood-sugar').value;
    
    const results = `
        <h2>Your Health Metrics</h2>
        <p>Heart Rate: ${heartRate} bpm</p>
        <p>Blood Pressure: ${bloodPressure}</p>
        <p>Blood Sugar Level: ${bloodSugar} mg/dL</p>
    `;
    
    document.getElementById('results').innerHTML = results;
});

