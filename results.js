document.addEventListener('DOMContentLoaded', () => {
    const resultsChart = document.getElementById('resultsChart').getContext('2d');
    let currentChartType = 'radar';

    // Fetch data from localStorage
    const chartData = JSON.parse(localStorage.getItem('intelligenceScores')) || {};
    console.log('Chart Data:', chartData); // Debugging: Check the data fetched

    // Extract labels and data from chartData
    const labels = Object.keys(chartData);
    const data = Object.values(chartData);
    console.log('Labels:', labels); // Debugging: Check labels
    console.log('Data:', data); // Debugging: Check data

    function renderChart(type) {
        if (window.chart) {
            window.chart.destroy();
        }

        window.chart = new Chart(resultsChart, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Intelligence Scores',
                    data: data,
                    backgroundColor: 'rgba(92, 53, 129, 0.2)',
                    borderColor: 'rgba(92, 53, 129, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 10
                    },
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    document.getElementById('radarChart').addEventListener('click', () => {
        currentChartType = 'radar';
        renderChart('radar');
    });

    document.getElementById('barChart').addEventListener('click', () => {
        currentChartType = 'bar';
        renderChart('bar');
    });

    document.getElementById('mainPageButton').addEventListener('click', () => {
        window.location.href = 'index.html'; // Replace with your main page URL
    });

    // Simulate sending data to cloud/database
    setTimeout(() => {
        document.getElementById('confirmationAnimation').style.display = 'block';
    }, 1000);

    // Initial chart render
    renderChart(currentChartType);
});
