function Processor() {
  this.formattedWords = [];
  this.formatter = new Formatter();
  this.counter = new WordCounter();
}

  Processor.prototype.getWords = function(string) {
    this.formattedWords = this.formatter.format(string);
    this.counter.getWords(this.formattedWords);
  };

  Processor.prototype.getPrimeWords = function(string) {
    this.formattedWords = this.formatter.format(string);
    this.counter.getPrimeWords(this.formattedWords);
  };
