module.exports = {
  datasets: {
    borderColor: 'rgba(241, 196, 15, 1)',
    borderCapStyle: 'round',
    borderJoinStyle: 'round',
    lineTension: 0.4,
    xAxisId: 'x-0',
    yAxisID: 'y-0',
    pointRadius: 0,
    pointHoverRadius: 0,
    fill: true,
    showLine: true
  },
  options: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    },
    scales: {
      yAxes: [
        {
          id: 'y-0',
          display: false,
          type: 'linear',
          gridLines: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          id: 'x-0',
          display: false,
          gridLines: {
            display: false
          }
        }
      ]
    },
    responsive: true
  }

};
