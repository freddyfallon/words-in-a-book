function FileHandler(file) {
  this.file = file;
}

FileHandler.prototype.readFile = function(file) {
  var reader = new FileReader();
  let handler = this;
  reader.onload = function(loadedFile) {
    handler.storeText(loadedFile.target.result);
  };
    reader.readAsText(this.file);
};

FileHandler.prototype.storeText = function(text) {
  this.fileText = text;
};
