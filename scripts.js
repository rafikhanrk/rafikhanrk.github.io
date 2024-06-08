document.addEventListener('DOMContentLoaded', function() {
    const scroller = scrollama();

    scroller.setup({
        step: '.step',
        offset: 0.5,
        debug: false,
    })
    .onStepEnter(response => {
        const { element, index, direction } = response;
        element.classList.add('is-active');
        handleStepEnter(response);
    })
    .onStepExit(response => {
        const { element } = response;
        element.classList.remove('is-active');
    });

    function handleStepEnter(response) {
        if (response.index === 1) {
            generateChart();
        } else if (response.index === 3) {
            generateMap();
        }
    }

    function generateChart() {
        const chart = c3.generate({
            bindto: '#chart',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ]
            }
        });
    }

    function generateMap() {
        const map = L.map('map').setView([38.9637, 35.2433], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([37.9838, 23.7275]).addTo(map)
            .bindPopup('Athens')
            .openPopup();
    }

    // Initialize the Slick carousel
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});
