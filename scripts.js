document.addEventListener('DOMContentLoaded', function() {
    // Refugee Chart
    var ctx = document.getElementById('refugeeChart').getContext('2d');
    var refugeeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1977', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020'],
            datasets: [{
                label: 'Number of Refugees',
                data: [1000, 2000, 3000, 4000, 5000, 10000, 15000, 20000, 25000, 30000],
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

    // Country Distribution Chart
    var ctx3 = document.getElementById('countryChart').getContext('2d');
    var countryChart = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Somalia', 'Vietnam', 'Ethiopia', 'Burma', 'Bhutan', 'Venezuela', 'Angola', 'Congo', 'Iraq', 'Iran', 'Cambodia', 'Afghanistan', 'Palestine', 'Syria', 'Cuba', 'Sudan'],
            datasets: [{
                label: 'Rainier Valley',
                data: [500, 400, 300, 200, 100, 50, 30, 20, 10, 15, 25, 35, 45, 55, 65, 75],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Tukwila',
                data: [600, 500, 400, 300, 200, 150, 100, 50, 40, 35, 45, 55, 65, 75, 85, 95],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }, {
                label: 'White Center',
                data: [700, 600, 500, 400, 300, 250, 200, 150, 120, 110, 105, 95, 85, 75, 65, 55],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
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
});
