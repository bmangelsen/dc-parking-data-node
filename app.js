var countRows = require('./row_count');
var countTicketTypes = require('./ticket_types');
var mostCommonType = require('./most_common_type');

require('./parser')('./simple_data/parking_feb_2016.csv', function(err, theData) {
  var parsedData = theData;
  countRows(parsedData, function(err, countedRowData) {
    console.log(countedRowData);
  });

  countTicketTypes(parsedData, function(err, countedTicketTypes) {
    console.log(countedTicketTypes);

    mostCommonType(countedTicketTypes, function(err, mostCommonType) {
      console.log(mostCommonType);
    });
  });

});
