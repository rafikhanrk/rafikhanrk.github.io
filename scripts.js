document.addEventListener('DOMContentLoaded', function() {
    // Refugee Chart
    var refugeeChart = document.getElementById('refugee-chart');
    var refugeeChartData = {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        datasets: [{
            label: 'Number of Refugees',
            data: [5000, 10000, 15000, 20000, 25000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };
    new Chart(refugeeChart, {
        type: 'line',
        data: refugeeChartData
    });

    // Refugee Map
    var refugeeMap = L.map('refugee-map').setView([47.6062, -122.3321], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(refugeeMap);
    L.marker([47.5480, -122.2929]).addTo(refugeeMap).bindPopup('Rainier Beach').openPopup();
    L.marker([47.4630, -122.2445]).addTo(refugeeMap).bindPopup('Tukwila').openPopup();

    // Findings Chart
    var findingsChart = document.getElementById('findings-chart');
    var findingsChartData = {
        labels: ['Rainier Beach', 'Tukwila'],
        datasets: [{
            label: 'Crime Rate Decrease (%)',
            data: [10, 15],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };
    new Chart(findingsChart, {
        type: 'bar',
        data: findingsChartData
    });

    // Findings Map
    var findingsMap = L.map('findings-map').setView([47.6062, -122.3321], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(findingsMap);
    L.marker([47.5480, -122.2929]).addTo(findingsMap).bindPopup('Rainier Beach').openPopup();
    L.marker([47.4630, -122.2445]).addTo(findingsMap).bindPopup('Tukwila').openPopup();
});

