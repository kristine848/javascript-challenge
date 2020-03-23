// from data.js
var tableData = data;

// Create a variable linking the html code to js code so you can manipulate that section
var table = d3.select("tbody")

// Create  a function to loops through records and creates rows for each record found then appends them into a table
function PopTable(x){
    table.text("")
    x.forEach(function(sighting){
       newrecord = table.append("tr")
       Object.entries(sighting).forEach(function([key, value]){
           newrow = newrecord.append("td").text(value)
       }) 
    })};

// run your function on the data held in the js data file
PopTable(tableData)



function FilterClick(){
    d3.event.preventDefault()
    let inputDate = d3.select("#datetime").property("value");
    let filtererdtable = tableData;

    if(inputDate){
        filtererdtable = filtererdtable.filter((row)=> row.datetime === inputDate)
    }

    PopTable(filtererdtable)
}

d3.selectAll("#filter-btn").on("click", FilterClick);
PopTable(tableData)


