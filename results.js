const data = JSON.parse(localStorage.getItem('intelligenceScores'));

const intelligenceScores =  Object.entries(data).sort((a, b) => b[1] - a[1]);

console.log(intelligenceScores);

// Logic to create and display charts using a charting library (e.g., Chart.js)
// ...



document.addEventListener('DOMContentLoaded', (event) => {


             // Extract labels and values from the data
             const labels = intelligenceScores.map(item => item[0]);
             const values = intelligenceScores.map(item => item[1]);
 
             // Colors for each bar
             const colors = [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)',
                 'rgba(100, 149, 237, 0.2)',
                 'rgba(60, 179, 113, 0.2)'
             ];
 
             const borderColors = [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(100, 149, 237, 1)',
                 'rgba(60, 179, 113, 1)'
             ];
 
            // Create the chart
            const ctx = document.getElementById('resultsChart').getContext('2d');
            const resultsChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Test Results',
                        data: values,
                        backgroundColor: colors,
                        borderColor: borderColors,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });