$('document').ready(() => {

  $('#statistics').on('change', function() {
    let chart = parseInt(this.value);

    $("#chart-orders_scores").html('');

    if (chart == 0) {
      completed_orders();
    } else if (chart == 1) { 
      order_status();
    }

    
  });


  completed_orders();
  

});

order_status = () => {
  

  var options = {
    series: [{
      name: 'Complete',
      data: [44, 55, 41, 67]
    }, {
      name: 'Canclled by customer',
      data: [13, 23, 20, 8]
    }, {
      name: 'Cancelled by provider',
      data: [11, 17, 15, 15]
    }],
    xaxis: {
      categories: ['Food delivery', 'Transportation', 'Teaching', 'Programing'
      ],
    },
    chart: {
    height: 350,
    type: 'bar',
    foreColor: '#fff',
    toolbar: { show: false},
    stacked: true,
    stackType: '100%'
    
  },
  stroke: {
    // width: [0, 4]
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
    // enabledOnSeries: [1],
  },
//   fill: {
//     colors: ['#06CAE1', '#F1F108', '#460552'],
//     type: 'gradient',
//     gradient: {
//       shade: 'dark',
//       type: 'vertical',
//       shadeIntensity: 0.1,
//       inverseColors: false,
//       opacityFrom: 1,
//       opacityTo: 0.8,
//       stops: [0, 100]
//     },
// },

colors: ['#05CFF7', '#C008F1', '#F10860'],

yaxis: [{
  title: {
    text: '%Orders status',
    style: {
      color: '#fff',
      fontSize: '10px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 8
    }
  },

},]
  

  };

  var chart = new ApexCharts(document.querySelector("#chart-orders_scores"), options);
  chart.render();
}


completed_orders = () => {
  

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
    colors: ['#EA03F9', '#03FC92'],
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
}



