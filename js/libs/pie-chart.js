const pieChartData = {
  labels: ['Produto 1', 'Produto 2', 'Produto 3'],
  datasets: [{
    label: 'avaliações positivas',
    data: [5, 3, 3],
    backgroundColor: [
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(255, 159, 64, 0.5)'
    ],
    borderColor: [
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const pieChartCanvas = document.getElementById('pieChart');
const pieChartCtx = pieChartCanvas.getContext('2d');
const pieChart = new Chart(pieChartCtx, {
  type: 'pie',
  data: pieChartData,
  options: {
      responsive: true,
      maintainAspectRatio: false, 
      scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
  }
});

function resizePieChartCanvas() {
  const parentWidth = pieChartCanvas.parentElement.offsetWidth;
  pieChartCanvas.width = parentWidth;
  pieChartCanvas.height = parentWidth; 
}

window.addEventListener('resize', resizePieChartCanvas);
window.addEventListener('DOMContentLoaded', resizePieChartCanvas);
