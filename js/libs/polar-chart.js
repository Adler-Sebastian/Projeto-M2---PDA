const ctx2 = document.getElementsByClassName("polar-chart")[0].getContext('2d');

const dataPolar = {
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
    datasets: [
        {
            label: "Meu gráfico teste",
            data: [69, 32, 45, 100, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 255, 255, 0.2)'
            ]
        }
    ]
};

const configPolar = {
    type: 'polarArea',
    data: dataPolar,
    options: {}
};


const myChar = new Chart(ctx2, configPolar);
