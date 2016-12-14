var countRows = require('./row_count');
var countTicketTypes = require('./ticket_types');

console.log("How many parking tickets were issued?");


require('./parser')('./simple_data/parking_feb_2016.csv', function(err, theData) {
  var parsedData = theData;
  countRows(parsedData, function(err, countedRowData) {
    console.log(countedRowData);
  });

  countTicketTypes(parsedData, function(err, countedTicketTypes) {
    console.log(countedTicketTypes);
  });

});



// console.log("How many different types of parking tickets were issued?");
// countTicketTypes('./simple_data/parking_feb_2016.csv', function (err, theData) {
//   console.log(theData);
// });
