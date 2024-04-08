// const colors = {
//     purple: {
//         default: "rgba(149, 76, 233, 1)",
//         half: "rgba(149, 76, 233, 0.5)",
//         quarter: "rgba(149, 76, 233, 0.25)",
//         zero: "rgba(149, 76, 233, 0)"
//     },
//     indigo: {
//         default: "rgba(80, 102, 120, 1)",
//         quarter: "rgba(80, 102, 120, 0.25)"
//     }
// };

// const weight1 = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2, 58.3, 59.4];
// const weight2 = [58.5, 59.0, 58.2, 59.6, 60.1, 59.5, 60.0, 59.2, 59.7, 60.3, 61.2, 62.9];

// const labels = [
//     "Jan",
//     "Fev",
//     "Mar",
//     "Abr",
//     "Mai",
//     "Jun",
//     "Jul",
//     "Ago",
//     "Set",
//     "Out",
//     "Nov",
//     "Dez"
// ];

// window.onload = function () {
//     const ctx = document.getElementById("canvas").getContext("2d");

//     const options = {
//         type: "line",
//         data: {
//             labels: labels,
//             datasets: [
//                 {
//                     label: "Produto 1",
//                     fill: true,
//                     backgroundColor: colors.purple.half,
//                     pointBackgroundColor: colors.purple.default,
//                     borderColor: colors.purple.default,
//                     data: weight1,
//                     lineTension: 0.2,
//                     borderWidth: 2,
//                     pointRadius: 3
//                 },
//                 {
//                     label: "Produto 2",
//                     fill: true,
//                     backgroundColor: colors.indigo.half,
//                     pointBackgroundColor: colors.indigo.default,
//                     borderColor: colors.indigo.default,
//                     data: weight2,
//                     lineTension: 0.2,
//                     borderWidth: 2,
//                     pointRadius: 3
//                 }
//             ]
//         },
//         options: {
//             layout: {
//                 padding: 10
//             },
//             responsive: true,
//             legend: {
//                 display: true
//             },
//             scales: {
//                 xAxes: [
//                     {
//                         gridLines: {
//                             display: false
//                         },
//                         ticks: {
//                             padding: 10,
//                             autoSkip: false,
//                             maxRotation: 15,
//                             minRotation: 15
//                         }
//                     }
//                 ],
//                 yAxes: [
//                     {
//                         scaleLabel: {
//                             display: true,
//                             labelString: "Weight in KG",
//                             padding: 10
//                         },
//                         gridLines: {
//                             display: true,
//                             color: colors.indigo.quarter
//                         },
//                         ticks: {
//                             beginAtZero: false,
//                             max: 63,
//                             min: 57,
//                             padding: 10
//                         }
//                     }
//                 ]
//             }
//         }
//     };

//     window.myLine = new Chart(ctx, options);
//     Chart.defaults.global.defaultFontColor = colors.indigo.default;
//     Chart.defaults.global.defaultFontFamily = "Fira Sans";
// };
