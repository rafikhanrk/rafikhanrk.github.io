document.addEventListener('DOMContentLoaded', function() {
    // Refugee Chart
    var ctx = document.getElementById('refugeeChart').getContext('2d');
    var refugeeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2000', '2005', '2010', '2015', '2020'],
            datasets: [{
                label: 'Number of Refugees',
                data: [5000, 10000, 15000, 20000, 25000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Refugee Map
    var map = L.map('map').setView([47.6062, -122.3321], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([47.5480, -122.2929]).addTo(map).bindPopup('Rainier Beach').openPopup();
    L.marker([47.4630, -122.2445]).addTo(map).bindPopup('Tukwila').openPopup();

    // Crime Chart
    var ctx2 = document.getElementById('crimeChart').getContext('2d');
    var crimeChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Rainier Beach', 'Tukwila'],
            datasets: [{
                label: 'Crime Rate Decrease (%)',
                data: [10, 15],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Findings Map
    var findingsMap = L.map('findings-map').setView([47.6062, -122.3321], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(findingsMap);
    L.marker([47.5480, -122.2929]).addTo(findingsMap).bindPopup('Rainier Beach').openPopup();
    L.marker([47.4630, -122.2445]).addTo(findingsMap).bindPopup('Tukwila').openPopup();
});

