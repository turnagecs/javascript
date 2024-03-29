// from data.js
var tableData = data;

// YOUR CODE HERE!
var k = '<tbody>'
    for(i = 0;i < tableData.length; i++){
        k+= '<tr>';
        k+= '<td>' + tableData[i].datetime + '</td>';
        k+= '<td>' + tableData[i].city + '</td>';
        k+= '<td>' + tableData[i].state + '</td>';
        k+= '<td>' + tableData[i].country + '</td>';
        k+= '<td>' + tableData[i].shape + '</td>';
        k+= '<td>' + tableData[i].durationMinutes + '</td>';
        k+= '<td>' + tableData[i].comments + '</td>';
        k+= '</tr>';
    }
    k+='</tbody>';
    document.getElementById('ufo-table').innerHTML = k;




      // Loop through all table rows, and hide those who don't match the search query
      function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = d3.select("#datetime");
        filter = input.value.toUpperCase();
        table = d3.select("#ufo-table");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }

      // Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#click-me");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#input-field");

// This function is triggered when the button is clicked
function handleClick() {
  console.log("A button was clicked!");

  // We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);

// You can also define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});

// Event handlers are just normal functions that can do anything you want
button.on("click", function() {
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});
