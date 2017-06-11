describe("Formatter", function(){
  var formatter;

  beforeEach(function() {
    formatter = new Formatter();
  });

  describe("format", function(){
    it("should make all words downcase", function() {
      formatter.format("Hello There Guys");
      expect(formatter.formattedWords).toEqual("hello there guys");
    });

    it("should remove all punctuation marks", function() {
      formatter.format("what. is, \\ / your * & name?!");
      expect(formatter.formattedWords).toEqual("what is your name");
    });

    it("should remove all whitespace", function() {
      formatter.format("hello   there");
      expect(formatter.formattedWords).toEqual("hello there")
    });
  });

  describe("makeLowerCase", function(){
    it("should make words lower case", function() {
      formatter.makeLowerCase("Hello There Guys");
      expect(formatter.formattedWords).toEqual("hello there guys");
    });
  });

  describe("removePunctuation", function(){
    it("should remove question marks", function() {
      formatter.removePunctuation("what is your name?");
      expect(formatter.formattedWords).toEqual("what is your name");
    });

    it("should remove all full stops", function() {
      formatter.removePunctuation("hello...");
      expect(formatter.formattedWords).toEqual("hello");
    });

    it("should remove forward and back slashes", function() {
      formatter.removePunctuation("T/il\\l");
      expect(formatter.formattedWords).toEqual("Till");
    });

    it("should remove commas", function() {
      formatter.removePunctuation("t,h,i,s");
      expect(formatter.formattedWords).toEqual("this");
    });
  });

  describe("stripWhitespace", function() {
    it("should replace any spaces greater than one with one space", function(){
      formatter.stripWhitespace("hello     there");
      expect(formatter.formattedWords).toEqual("hello there");
    });
  });
});
