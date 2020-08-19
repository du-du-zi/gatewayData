google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

google.charts.setOnLoadCallback(drawTempChart);
google.charts.setOnLoadCallback(drawHumidChart);

function drawBackgroundColor(row) {
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Time');
      data.addColumn('number', 'CO2');

      data.addRows(row);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'CO2'
        },
        backgroundColor: '#f1f8e9'
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

function drawTempChart(row) {
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Time');
	data.addColumn('number', 'Temperature');
	
	data.addRows(row);
	
	var options = {
			hAxis: {
				title: 'Time'
			},
			vAxis: {
				title: 'Temperature'
			},
			backgroundColor: '#f1f8e9'
	};
	
	var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
	chart.draw(data, options);
}

function drawHumidChart(row) {
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Time');
	data.addColumn('number', 'Humid');
	
	data.addRows(row);
	
	var options = {
			hAxis: {
				title: 'Time'
			},
			vAxis: {
				title: 'Humid'
			},
			backgroundColor: '#f1f8e9'
	};
	
	var chart = new google.visualization.LineChart(document.getElementById('chart_div3'));
	chart.draw(data, options);
}