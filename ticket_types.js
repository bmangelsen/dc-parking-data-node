module.exports = function countRows(parsedData, done) {
var count = {};
  parsedData.forEach(function(each){
    if(!count[each.VIOLATION_DESCRIPTION]) {
      count[each.VIOLATION_DESCRIPTION] = 1;
    } else {
      count[each.VIOLATION_DESCRIPTION] ++;
    }
  });
  done(null, count);
};
