function Processor() {
  this.formattedWords = [];
  this.listedWords = [];
  var formatter = new Formatter();
  var counter = new WordCounter();
}

  Processor.prototype.getWords = function(string) {
    this.formattedWords = formatter.format(string);
};
