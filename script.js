document.addEventListener("DOMContentLoaded", function() {
    // Scrollama setup
    const scroller = scrollama();
    scroller.setup({
        step: 'section',
        offset: 0.5
    }).onStepEnter(response => {
        response.element.classList.add('active');
    }).onStepExit(response => {
        response.element.classList.remove('active');
    });

    // Leaflet map setup
    const map = L.map('map').setView([33.5138, 36.2765], 6); // Centered on Syria
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // C3.js graph setup
    const iraqChart = c3.generate({
        bindto: '#iraq-graph',
        data: {
            columns: [
                ['Iraq War Casualties', 30000, 60000, 90000, 120000, 150000]
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: ['2003', '2004', '2005', '2006', '2007']
            }
        }
    });

    const syriaChart = c3.generate({
        bindto: '#syria-graph',
        data: {
            columns: [
                ['Syria War Casualties', 50000, 100000, 150000, 200000, 250000]
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: ['2011', '2012', '2013', '2014', '2015']
            }
        }
    });
});
