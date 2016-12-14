module.exports = function countRows(parsedData, done) {
  theData = parsedData.length;
  done(null, theData);
};
