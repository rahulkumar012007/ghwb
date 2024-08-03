document.getElementById('location-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const zipCode = document.getElementById('zip-code').value;

    // Placeholder for finding local services based on zip code
    const services = `
        <h2>Local Emergency Services</h2>
        <p>Services near ${zipCode}:</p>
        <ul>
            <li>Local Hospital: 123 Health St, Health City</li>
            <li>Urgent Care: 456 Care Rd, Care Town</li>
            <li>24/7 Pharmacy: 789 Med Dr, Medville</li>
        </ul>
    `;

    document.getElementById('services').innerHTML = services;
    
});
