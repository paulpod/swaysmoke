// Code goes here market,quantity,trade,open,close,pnl
var tick = 10;

d3.csv("/public/data/trade-data.csv", function (error, circleData) {
  circleData.forEach(function (d) {
    d['datestamp'] = +d['datestamp'];
    d['market'] = +d['market'];
    d['quantity'] = +d['quantity'];
    d['trade'] = +d['trade'];
    d['open'] = +d['open'];
    d['close'] = +d['close'];
    d['pnl'] = +d['pnl'];
  });
  //console.log(circleData);

  
  var svg = d3.select("body").append("svg")
    .attr("width", 1200)
    .attr("height", 480);

  var circles = svg.selectAll("circle")
    .data(circleData)
    .enter()
    .append("circle");


  var circleAttributes = circles
    .attr("cx", tick)
    .attr("cy", 240)
    .attr("r", function (d) { return d.pnl / 50; })
    .style("fill", "green");

  var text = svg.selectAll("text")
    .data(circleData)
    .enter()
    .append("text");

  var textLabels = text
    .attr("x", 50)
    .attr("y", 50)
    .text(function (d) { return d.datestamp + ", " + d.pnl + " )"; })
    .attr("font-family", "sans-serif")
    .attr("font-size", "20px")
    .attr("fill", "red");
});