const ctx1 = document.getElementsByClassName("line-chart")[0].getContext('2d');

// Dados do gráfico
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const dataLine = {
    labels: labels,
    datasets: [
        {
            label: 'Meu grafico',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
        {
            label: 'Meu grafico 2',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: 'rgb(234, 222, 0)',
            tension: 0.1
        },
        {
            label: 'meu grafico 3',
            data: [18, 48, 77, 9, 100, 27, 40],
            fill: false,
            borderColor: 'rgb(153, 102, 255)',
            tension: 0.1
        }
    ]
};

// Configurações do gráfico
const configLine = {
    type: 'line',
    data: dataLine
};

// Criando o gráfico
const myChart = new Chart(ctx1, configLine);