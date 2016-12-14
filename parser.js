var fs = require('fs');
var parse = require('csv-parse');

module.exports = function parseData(file, done) {

  fs.readFile(file, function processFile(err, theData) {

    parse(theData, {
      columns: true
    }, function(err, theData) {
      if (err) { console.log('error'); done(err); }

      done(null, theData);
    });
  });

};
