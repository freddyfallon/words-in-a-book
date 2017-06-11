function WordCounter(words) {
  this.wordArray = words;
  this.finalArray = [];
}

WordCounter.prototype.count = function(array) {
  var rObj = {};
  var finalArray = [];
  array.map(function(currentValue, index) {
    if (rObj.hasOwnProperty(currentValue)) {
      rObj[currentValue] = rObj[currentValue] + 1;
    } else {
      rObj[currentValue] = 1;
    }

  });

  for (var keys in rObj) {
    var obj = {};
    obj[keys] = rObj[keys];
    this.finalArray.push(obj);
  }

  return this.finalArray;
};
