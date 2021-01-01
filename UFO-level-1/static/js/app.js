// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Set up initial display
function init(){
    tableData.forEach((sighting) =>{
        var row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

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

    var filteredData = tableData.filter(table => table.datetime === inputValue);
    console.log(filteredData);

    // Get a reference to the table body
    var tbody = d3.select("tbody");
    tbody.html("");

    filteredData.forEach((sighting) =>{
        var row = tbody.append("tr");
        Object.values(sighting).forEach(value =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });

};

init();
