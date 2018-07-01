
var dat = []
var labelWidth = 30
var gridWidth = (890 * 1.4) + labelWidth
var square = true
var legendHeight = 40
var gridHeight = (510 * 1.4) + legendHeight
var height = gridHeight + legendHeight

var offset = 	[0,   40,   80,  120,  360,  400,  600, 1000, 2000, 4000]		     
var colors = ["#e7f0fa", "#c9e2f6", "#95cbee", "#0099dc", "#4ab04a", "#ffd73e","#eec73a", "#e29421", "#f05336", "#ce472e"]

var colorScale = d3.scaleLinear()
.domain(offset)
.range(colors);

//Function for converting CSV values from strings to Dates and numbers


d3.csv("measlesTotal.csv").then(function(data) {

data.forEach(function(d) {
	d.state = d.state,
	d.year = parseInt(d.year),
	d.incidence = parseInt(d.incidence)
});

//Copy data into global dataset
dat = data;

var nested_data = d3.nest()
      .key(function(data) { return data.state; })
      .entries(dat);

var gridItemWidth = (gridWidth - labelWidth) / 89;
var gridItemHeight = (square) ? gridItemWidth : gridHeight / 51;
var startX = (gridItemWidth / 2) + labelWidth;
var startY = gridItemHeight / 2;
var stepX = gridItemWidth;
var stepY = gridItemHeight;
var xpos = startX;
var ypos = startY;
var newValue = 1;
var count = 0;

var tableGrid = new Array();
for (var stateIndex = 0; stateIndex < nested_data.length; stateIndex++)
{

  tableGrid.push(new Array());
  for (var yearIndex = 0; yearIndex < nested_data[1].values.length; yearIndex++)
  {

      tableGrid[stateIndex].push({ 
      										label: nested_data[stateIndex].values[yearIndex].state,
      										year: nested_data[stateIndex].values[yearIndex].year,
                          value: nested_data[stateIndex].values[yearIndex].incidence,
                          width: gridItemWidth,
                          height: gridItemHeight,
                          x: xpos,
                          y: ypos,
                          count: count
                      });
      xpos += stepX;
      count += 1;
  }
  xpos = startX;
  ypos += stepY;
}

var minYear = nested_data[1].values[0].year
var maxYear = nested_data[1].values[88].year + 1

var xScale = d3.scaleBand()
			.domain(d3.range(minYear,maxYear))
			.rangeRound([labelWidth, gridWidth]);

//Define X axis
var xAxis = d3.axisBottom(xScale)
			  		.tickSize(0)
			  		.tickValues([1930,1940,1950,1960,1970,1980,1990,2000,2010]);




/*	
var xScale = d3.scaleLinear()
					   .domain([minYear,maxYear])
					   .range([labelWidth, gridWidth - labelWidth]);*/

				  
var yScale = d3.scaleLinear()
			.domain([0, d3.max(nested_data.length)])
			.range([0, gridHeight]);


var id = "div#graphic"
var svg = d3.select(id).append("svg")
            .attr("width", gridWidth + 10)
            .attr("height", height + 10)
            .attr("class", "graphic");

var row = svg.selectAll(".row")
          .data(tableGrid)
          .enter()
          .append("svg:g")
          .attr("class", "row");

var stateLabels = []

for (var stateIndex = 0; stateIndex < nested_data.length; stateIndex++) {


/*		  	stateLabels.push(nested_data[stateIndex].key);
*/		  	stateLabels.push({ 
								label: nested_data[stateIndex].key,
            x: 0,
/*                            y: (((stateIndex + 1) + stateIndex) /1.327 * 10) + 10,
*/                            y: (((stateIndex + 1) + stateIndex) /1.425 * 10) + 10,
            count: count
        		});
}

var stateLabelsGroup = svg.append("g")
		.attr("class", "label");

	 stateLabelsGroup.selectAll("text")
		.data(stateLabels)
		.enter()
		.append("text")
.attr("x", function(d) { return d.x; })
.attr("y", function(d) { return d.y; })
		.text(function(d) {
			/* if (d.label) {*/
				 return d.label;
			/* };*/
		});

svg.append("g")
.attr("class", "axis")
.attr("transform", "translate("+ 5 + "," + (gridHeight - 30) + ")")
.call(xAxis);

var col = row.selectAll(".cell")
   .data(function (d) { return d; })
   .enter()
   .append("svg:rect")
   .attr("class", "cell")
   .attr("x", function(d) { return d.x; })
   .attr("y", function(d) { return d.y; })
   .attr("width", function(d) { return d.width; })
   .attr("height", function(d) { return d.height; })
   .style("fill", function(d) {
    //Get data value
      var value = d.value;
      
      if (value) {
        //If value exists…
      return colorScale(value);
      } else {
        //If value is undefined…
        return "#f7f7f7";
      }
    })
   .on("mouseover", function(d) {

				//Get this bar's x/y values, then augment for the tooltip
				var xPosition = parseFloat(d3.select(this).attr("x")) + (xScale.bandwidth() / 2) + 70;
				var yPosition = parseFloat(d3.select(this).attr("y")) + gridHeight/5.5;

				//Update the tooltip position and value
				d3.select("#tooltip")
					.style("left", xPosition + "px")
					.style("top", yPosition + "px")						
					.select("#stateLabel")
					.text(d.label);

				d3.select("#tooltip")
					.style("left", xPosition + "px")
					.style("top", yPosition + "px")						
					.select("#value")
					.text(d.value);	

				d3.select("#tooltip")
					.style("left", xPosition + "px")
					.style("top", yPosition + "px")						
					.select("#yearValue")
					.text(d.year);	

				//Show the tooltip
				d3.select("#tooltip").classed("hidden", false);

		   })
		   .on("mouseout", function() {
		   
				//Hide the tooltip
				d3.select("#tooltip").classed("hidden", true);
				
		   })
   .style("stroke", '#f3f3f3');

var defs = svg.append("defs");

var linearGradient = defs.append("linearGradient")
    .attr("id", "linear-gradient");

linearGradient.selectAll("stop")
    .data([
        {offset: offset[0] / 4000, color: colors[0]},
        {offset: offset[1] / 4000, color: colors[1]},
        {offset: offset[2] / 4000, color: colors[2]},
        {offset: offset[3] / 4000, color: colors[3]},
        {offset: offset[4] / 4000, color: colors[4]},
        {offset: offset[5] / 4000, color: colors[5]},
        {offset: offset[6] / 4000, color: colors[6]},
        {offset: offset[7] / 4000, color: colors[7]},
        {offset: offset[8] / 4000, color: colors[8]},
        {offset: offset[9] / 4000, color: colors[9]},
      ])
    .enter().append("stop")
    .attr("offset", function(d) { return d.offset; })
    .attr("stop-color", function(d) { return d.color; });

var legendWidth = gridWidth * 0.5;
var	legendHeight = 10;

var legendsvg = svg.append("g")
	.attr("class", "legendWrapper")
	.attr("transform", "translate(" + (legendWidth) + "," + (gridHeight + legendHeight) + ")");

//Draw the Rectangle
legendsvg.append("rect")
	.attr("class", "legendRect")
	.attr("x", -200)
	.attr("y", 0)
	.attr("width", gridWidth/4)
	.attr("height", legendHeight)
	.style("fill", "url(#linear-gradient)");
	
//Append title
/*				legendsvg.append("text")
	.attr("class", "legendTitle")
	.attr("x", 0)
	.attr("y", -2)
	.text("Incidence");
*/
	 //.domain([d3.min(pt.legendSOM.colorData)/100, d3.max(pt.legendSOM.colorData)/100]);

var legendScale = d3.scaleBand()
			.domain([0,1000,2000,3000,4000])
			.rangeRound([0, 400]);
 //.domain([d3.min(pt.legendSOM.colorData)/100, d3.max(pt.legendSOM.colorData)/100]);


//Define x-axis
var xAxisLegend = d3.axisBottom(legendScale)
	  .tickSize(0);

//Set up X axis
legendsvg.append("g")
	.attr("class", "axis")  //Assign "axis" class
	.attr("transform", "translate(" + -243 + "," + (10 + legendHeight) + ")")
	.call(xAxisLegend);


});