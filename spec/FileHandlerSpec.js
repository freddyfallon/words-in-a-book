describe("FileHandler", function() {
  var handler

  beforeEach(function() {
    handler = new FileHandler();
  });

  describe("storeText", function() {
    it("Should store a file in allText", function() {
      text = "hello";
      handler.storeText(text);
      expect(handler.allText).toEqual("hello");
    });
  });
});
