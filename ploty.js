<head>
               <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>



<script>
var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers',
  type: 'scatter'
};

var data = trace1;

Plotly.newPlot('myDiv', data);
</script>