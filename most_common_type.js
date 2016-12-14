module.exports = function mostCommonType(countedTicketTypes, done) {
  var highest = null;
  var _ = require('lodash');

  Object.keys(countedTicketTypes).forEach(function (key){
    if (highest === null) {
      highest = countedTicketTypes[key];
    } else if (highest < countedTicketTypes[key]) {
        highest = countedTicketTypes[key];
      }
  });

  newObject = _.invertBy(countedTicketTypes);

  done(null, newObject[highest]);
};
