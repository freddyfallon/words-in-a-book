describe("WordCounter", function(){
  var counter;

  beforeEach(function() {
    counter = new WordCounter(["a", "hello", "hello", "b", "went", "a"]);
  });

  describe("count", function() {

    it("should return an array of hashes with the count as the value",
    function() {
      expect(counter.addCounters([ "a", "a", "hello", "hello", "b", "went"]))
      .toEqual( [ Object({ a: 2 }), Object({ hello: 2 }),
        Object({ b: 1 }), Object({ went: 1 }) ] );
    });

  });

  describe("getValue", function() {
    it("should produce a value from a hash", function() {
      expect(counter.getValue({ a: 2 })).toEqual(2);
    });
  });

  describe("sortWords", function() {
    it("should add a key-sorted array of hashes to sortedArray", function() {
      counter.sortWords([ Object({ a: 1 }), Object({ b: 2 })]
    );
    expect(counter.sortedArray).toEqual([ Object({ b: 2 }), Object({ a: 1 }) ]);
    });
  });

  describe("primeCheck", function() {
    it("should return true for a prime number", function() {
      expect(counter.primeCheck(2)).toEqual(true);
    });

    it("should return false for a non-prime number", function() {
      expect(counter.primeCheck(6)).toEqual(false);
    });
  });

  describe("isPrime", function() {
    it("should push values that are prime to primeNumberArray",
    function(){
      counter.isPrime( [Object({ a: 1 }), Object({ b: 2 }), Object({ c: 3 }),
        Object({ d: 4 }), Object({ e: 5 }), Object({ f: 6 }) ]);
      expect(counter.primeNumberArray).toEqual([Object({ a: 1 }),
        Object({ b: 2 }),Object({ c: 3 }), Object({ e: 5 })]);
    });
  });

});
