describe("WordCounter", function(){
  var counter;

  beforeEach(function() {
    counter = new WordCounter(["a", "hello", "hello", "b", "went", "a"]);
  });

  describe("count", function() {

    it("should return an array of hashes with the count as the value",
    function() {
      expect(counter.count(counter.wordArray))
      .toEqual( [ Object({ a: 2 }), Object({ hello: 2 }),
        Object({ b: 1 }), Object({ went: 1 }) ] );
    });

  });

  describe("listWords", function() {

    it("should list all of the words with their count", function() {
      expect(counter.listWords([ Object({ a: 2 }),
        Object({ hello: 2 }), Object({ b: 1 }),
        Object({ went: 1 }) ])).toEqual("a: 2\nhello: 2\nb: 1\nwent: 1");
    });

  });
});
