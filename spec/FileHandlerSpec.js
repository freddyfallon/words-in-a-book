describe("FileHandler", function() {
  var handler
  var file

  beforeEach(function() {
    handler = new FileHandler();
  });

  describe("open", function() {
    it("Should return the file", function() {
      expect(handler.open(file)).toEqual(file);
    })
  })
})
