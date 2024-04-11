// Esse gráfico usa a Biblioteca Chart.js 
// o código base é bem padronizado
// fiz um gráfico simples usando as recomendações encontradas
// na própria documentação do Chart.js

let revenue_total = 0;
let revenue_porcent = 0;

// cores do gráficos
const colors = {
  purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)"
  },
  indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
  },
  blue: {
       default: "#6495ed",
       half: "#3b74dd40",
       quarter: "#527fd3",
  }
};

function generateMonthLabels() {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const currentYear = new Date().getFullYear();
  return months.map(month => `${month}-${currentYear}`);
}

let initial_total = 0; // Armazena o valor total inicial

function updateChartData(chart) {
  chart.data.datasets.forEach(dataset => {
    dataset.data = dataset.data.map(value => value + Math.floor(Math.random() * 200 - 100)); // Incrementa um valor aleatório entre -100 e 100
  });
  chart.update();
  const total = updateLastLabel(chart.data.datasets); // Calcula o total e armazena na variável total
  if (initial_total === 0) {
    initial_total = total; // Define o valor inicial na primeira vez que o total é calculado
  }
  calcPercentage(total); // Chama a função para calcular a porcentagem
}

function updateLastLabel(data) {
  let total = 0;
  data.forEach(dataset => {
    const lastValue = dataset.data[dataset.data.length - 1];
    total += lastValue;
  });

  const revenue_profit = document.querySelector('#revenue-profit');
  revenue_profit.innerHTML = '';

  const label = document.createElement('div');
  label.textContent = `Total: R$${total}`;
  revenue_profit.appendChild(label);

  return total; // Retorna o total calculado
}

function calcPercentage(total) {
  const revenue_porcent = document.querySelector('#revenue-porcent');
  const percentageChange = ((total - initial_total) / initial_total) * 100;
  const status = percentageChange >= 0 ? 'aumento' : 'queda';
  const absPercentage = Math.abs(percentageChange); 
  const formattedPercentage = absPercentage.toFixed(2); // Limitando a duas casas decimais

  revenue_porcent.innerHTML = '';

  const porcent_text = document.createElement('span');
  porcent_text.textContent = `${formattedPercentage}% ${status}`; 
  revenue_porcent.appendChild(porcent_text);
  
  revenue_porcent.classList.remove('aumento', 'queda'); 
  revenue_porcent.classList.add(status); 
}


const ctx = document.getElementById('canvas').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: generateMonthLabels(),
      datasets: [{
          label: 'Produto 1',
          fill: true,
          data: [1000, 1500, 1200, 1800, 2000, 2500, 2200, 1234, 2032, 2344, 3000, 2795], // Dados para o eixo y
          backgroundColor: colors.blue.half, 
          borderColor: colors.blue.quarter, 
          borderWidth: 1,
          lineTension: 0.2,
          borderWidth: 2,
          pointRadius: 3 
      },
      {
          label: 'Produto 2',
          fill: true,
          data: [1045, 1234, 1580, 1800, 2750, 2860, 2450, 2144, 1532, 1944, 2300, 2130], // Dados para o eixo y
          backgroundColor: colors.purple.quarter, 
          borderColor: colors.purple.half, 
          borderWidth: 1,
          lineTension: 0.2,
          borderWidth: 2,
          pointRadius: 3
      }]},

  options: {
      scales: {
      y: {
      beginAtZero: true 
      }
    }
  }
});

// Atualiza os dados do gráfico a cada segundo
setInterval(() => {
  updateChartData(chart);
}, 3000);
