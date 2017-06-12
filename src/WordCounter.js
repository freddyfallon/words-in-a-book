(function(exports){
  function WordCounter(words) {
    this.countedArray = [];
    this.sortedArray = [];
    this.primeNumberArray = [];
    this.finalOutput = "";
  }

  WordCounter.prototype.getWords = function(array) {
    this.addCounters(array);
    this.sortWords(this.countedArray);
    this.returnWords(this.sortedArray);
  };

  WordCounter.prototype.getPrimeWords = function(array) {
    this.addCounters(array);
    this.sortWords(this.countedArray);
    this.isPrime(this.sortedArray);
    this.returnWords(this.primeNumberArray);
  };

  WordCounter.prototype.addCounters = function(array) {
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

  WordCounter.prototype.getValue = function(obj) {
    for (let key in obj) return obj[key];
  };

  WordCounter.prototype.sortWords = function(array) {
    this.sortedArray = array.sort((a, b)  => this.getValue(b) - this.getValue(a));
  };

  WordCounter.prototype.primeCheck = function(value) {
    var d = value - 1;
    while (d > 1) {
      if ((value % d) === 0) return false;
      d--;
    }
    return true;
  };

  WordCounter.prototype.isPrime = function(array) {
    for (var i = 0; i < array.length ; i++) {
      if (this.primeCheck(this.getValue(array[i])) === true) {
        this.primeNumberArray.push(array[i]);
      }
    }
    return this.primeNumberArray;
  };

  WordCounter.prototype.returnWords = function(array) {
    for (var i = 0; i < array.length; i++) {
      for (var k in array[i]){
         this.finalOutput += k + " appears " + this.getValue(array[i]) + " times.";
      }
    }
  };

  exports.WordCounter = WordCounter;

})(this);
