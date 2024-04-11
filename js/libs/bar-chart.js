const barChartData = {
    labels: ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4', 'Produto 5', 'Produto 6'],
    datasets: [{
      label: 'Quantidade',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };
  
  const barChartCtx = document.getElementById('barChart').getContext('2d');
  new Chart(barChartCtx, {
    type: 'bar',
    data: barChartData,
    options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
  });
  