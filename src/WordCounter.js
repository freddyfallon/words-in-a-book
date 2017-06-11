(function(exports){
  function WordCounter(words) {
    this.countedArray = [];
    this.sortedArray = [];
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
      this.countedArray.push(obj);
    }

    return this.countedArray;
  };

  WordCounter.prototype.compare = function(a, b) {
    if (Object.values(a) < Object.values(b)) {
      return -1;
    }
    if (Object.values(a) > Object.values(b)) {
      return 1;
    }
    return 0;
  };

  WordCounter.prototype.sortWords = function(array) {
    this.sortedArray = array.sort(this.compare);
  };

  WordCounter.prototype.returnWords = function(array) {
    for (var key in array) {
      return array[key];
    }
  };
  exports.WordCounter = WordCounter;

})(this);
