const columnChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Column Chart',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };
  
  const columnChartCtx = document.getElementById('columnChart').getContext('2d');
  new Chart(columnChartCtx, {
    type: 'bar',
    data: columnChartData,
    options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
  });
  