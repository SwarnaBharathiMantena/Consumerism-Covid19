function plotGroupedBar(plot_params,plotID,type='bar'){
    
    var ctx = document.getElementById(plotID);
    
    var data = {
        labels: plot_params['labels'],
        datasets: plot_params['datasets']
    };

    var options = {
        barValueSpacing: 20,
        scales: {
            xAxes: [{
                ticks: {
                    min: 0,
                    max: 1,
                },
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 100,
                }
            }]
        }
    }
    xAxes: [{
        
    }]
    
    var myBarChart = new Chart(ctx, {
        type: type,
        data: data,
        options: options
    });
}
