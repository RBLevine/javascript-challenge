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

    var filteredData=tableData;

    // Select input element of Date/Time and get raw HTML node
    var inputElementDate = d3.select("#datetime");
    console.log(inputElementDate);
    // Get value property of input element
    var inputValueDate = inputElementDate.property("value"); 
    console.log(inputValueDate);

    // Filter the data if this Date/Time field is not empty
    if (inputValueDate != '') {
        filteredData = filteredData.filter(table => table.datetime === inputValueDate);
      };

    // Select input element of City and get raw HTML node
    var inputElementCity = d3.select("#city");
    console.log(inputElementCity);
    // Get value property of input element
    var inputValueCity = inputElementCity.property("value"); 
    console.log(inputValueCity);

    // Filter the data if this City field is not empty
    if (inputValueCity != '') {
        filteredData = filteredData.filter(table => table.city === inputValueCity);
      };
    
    // Select input element of State and get raw HTML node
    var inputElementState = d3.select("#state");
    console.log(inputElementState);
    // Get value property of input element
    var inputValueState = inputElementState.property("value"); 
    console.log(inputValueState);

    // Filter the data if this State field is not empty
    if (inputValueState != '') {
        filteredData = filteredData.filter(table => table.state === inputValueState);
      };

    // Select input element of Country and get raw HTML node
    var inputElementCountry = d3.select("#country");
    console.log(inputElementCountry);
    // Get value property of input element
    var inputValueCountry = inputElementCountry.property("value"); 
    console.log(inputValueCountry);

    // Filter the data if this Country field is not empty
    if (inputValueCountry != '') {
        filteredData = filteredData.filter(table => table.country === inputValueCountry);
      };

    // Select input element of Shape and get raw HTML node
    var inputElementShape = d3.select("#shape");
    console.log(inputElementShape);
    // Get value property of input element
    var inputValueShape = inputElementShape.property("value"); 
    console.log(inputValueShape);

    // Filter the data if this Shape field is not empty
    if (inputValueShape != '') {
        filteredData = filteredData.filter(table => table.shape === inputValueShape);
      };

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
