// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Set up initial display
tableData.forEach((sighting) =>{
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete event handler function
function runEnter(){

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select input element and get raw HTML node
    var inputElement = d3.select("#datetime");
    console.log(inputElement)

    // Get value property of input element
    var inputValue = inputElement.property("value"); 
    console.log(inputValue)

    var filteredData = tableData.filter(item => item.datetime === inputElement);

    filteredData.forEach((sighting) =>{
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });

};
