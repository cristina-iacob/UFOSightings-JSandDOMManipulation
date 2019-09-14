// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");


function displayTable(data){

    tbody.html("");

    data.forEach((dataRow) => {

        var row = tbody.append("tr");
               
        Object.values(dataRow).forEach((val) => {
           var cell = row.append("td");
           cell.text(val);
       });
    });
};


function onClick(){
    d3.event.preventDefault();

    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    };
    displayTable(filterData);
};

d3.selectAll("#filter-btn").on('click', onClick);

displayTable(tableData);

