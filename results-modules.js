import html2canvas from 'https://cdn.skypack.dev/html2canvas';
import jsPDF from 'https://cdn.skypack.dev/jspdf';

// Your existing code

// Make these available globally
window.html2canvas = html2canvas;
window.jsPDF = jsPDF;

// Add any additional setup or functions you need here
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the user's name from localStorage
    const userName = localStorage.getItem('userName');

    // Setup PDF download button
    document.getElementById('download-pdf').addEventListener('click', () => {
        html2canvas(document.getElementById('chart-container'), { scale: 4 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            // PDF dimensions
            const pdfWidth = 210;
            const pdfHeight = 297;

            // Image dimensions
            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save(userName + '_Intelligence_Results.pdf');
        }).catch(error => {
            console.error("Error capturing canvas: ", error);
        });
    });
});
