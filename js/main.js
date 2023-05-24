$('document').ready(() => {



    var options = {
        series: [{
        name: 'Services',
        type: 'column',
        data: [10, 25, 66, 87],
        
        
      }, {
        name: 'Score',
        type: 'line',
        data: [4.6, 3.2, 4.7, 2.1]
      }],
        chart: {
        height: 350,
        type: 'line',
        foreColor: '#fff',
        toolbar: { show: false}
        
      },
      stroke: {
        width: [0, 4]
      },
      grid: {
        show: false
      },
     
      plotOptions: {
        bar: {
          borderRadius: 6,
          horizontal: false,
        },
        
      },
      
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      fill: {
        colors: ['#EA03F9'],
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.5,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100]
        },
    },
    
      
      labels: ['Private lessons', 'Transportation', 'Programing', 'Delivery'],
      colors: ['#EA03F9', '#03FC92'],
      xaxis: {

      },
      
      yaxis: [{
        title: {
          text: '#Completed services',
          style: {
            color: '#fff',
            fontSize: '10px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 8
          }
        },
      
      }, {
        opposite: true,
        title: {
          text: 'Score', 
          style: {
            color: '#fff',
            fontSize: '10px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 8
          }
        }, 
        
      }]
      };

      var chart = new ApexCharts(document.querySelector("#chart-orders_scores"), options);
      chart.render();



});