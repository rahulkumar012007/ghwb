document.getElementById('symptom-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const symptoms = document.getElementById('symptoms').value;
    
    // Placeholder logic for checking symptoms
    const diagnosis = `
        <h2>Diagnosis</h2>
        <p>Based on your symptoms, we recommend consulting a healthcare professional.</p>
    `;
    
    document.getElementById('diagnosis').innerHTML = diagnosis;
});
