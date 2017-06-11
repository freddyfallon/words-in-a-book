describe("Formatter", function(){
  var formatter;

  beforeEach(function() {
    formatter = new Formatter();
  });

  describe("format", function(){
    it("should make all words downcase", function() {
      formatter.format("Hello There Guys");
      expect(formatter.lowerCaseWords).toEqual("hello there guys");
    });
  });
});
