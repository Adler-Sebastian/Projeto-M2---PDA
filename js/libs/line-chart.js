// Dados do gráfico
var ctx = document.getElementById('canvas').getContext('2d');
var chart = new Chart(ctx, {
  // Tipo de gráfico
  type: 'line',

  // Dados do gráfico
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Total Revenue',
      data: [1000, 1500, 1200, 1800, 2000, 2500, 2200], // Dados para o eixo y
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // Cor de fundo da área do gráfico
      borderColor: 'rgba(255, 99, 132, 1)', // Cor da linha do gráfico
      borderWidth: 1 // Largura da linha do gráfico
    }]
  },

  // Configurações do gráfico
  options: {
    scales: {
      y: {
        beginAtZero: true // Inicia o eixo y do gráfico a partir de zero
      }
    }
  }
});