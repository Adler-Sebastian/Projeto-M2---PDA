const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Line Chart',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };
  
  const lineChartCtx = document.getElementById('lineChart').getContext('2d');
  new Chart(lineChartCtx, {
    type: 'line',
    data: lineChartData,
    options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
  });
  