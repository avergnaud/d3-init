
const data = [25, 20, 10, 12, 15];

const svg = d3.select("#chart-area").append("svg")
    .attr("width", 600)
    .attr("height", 600);

/*
svg.selectAll("circle") tells the browser to find the svg element and look inside it for any circles. 
If it finds circles, it returns them in a selection that is an array of elements. 
If it doesn’t find any, it returns an empty selection, which is what will happen in this case.

.data(data) binds data to a selection. It does this in order.
If the browser had found three circles :
Then it would link 
    the first circle to number 25, 
    the second to number 20, 
    the third one to 10,
Then it would have put the leftover data into what’s called an enter selection

Here selectAll returns an empty selection, because there’s no circles whatsoever within the svg that 
we targeted. That means D3 will decide that all five data points are leftover or missing elements, 
so it adds all five numbers to the enter selection.
*/
const circles = svg.selectAll("circle")
    .data(data);

/* This adds a circle for each item in the enter selection. In our case, that is five.  */
circles.enter().append("circle")
    .attr("cx", (dataPoint, index) => (index + 1)*60)
    .attr("cy", (dataPoint, index) => 100)
    .attr("r", (dataPoint, index) => dataPoint)
    .attr("fill", "green")

/*
If there are more data points than there are circles, D3 will create circles. 
If there are more circles than there are data points, D3 will place the extra circles
 in the exit selection so that they can be removed.
*/