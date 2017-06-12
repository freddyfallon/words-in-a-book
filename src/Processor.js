function Processor() {
  this.formattedWords = [];
  var formatter = new Formatter();
  var counter = new WordCounter();
}

  Processor.prototype.getWords = function(string) {
    this.formattedWords = formatter.format(string);
    counter.getWords(this.formattedWords);
  };

  Processor.prototype.getPrimeWords = function(string) {
    this.formattedWords = formatter.format(string);
    counter.getPrimeWords(this.formattedWords);
  };
