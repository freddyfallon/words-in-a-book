function Formatter() {
  var formattedWords;
  var allWords = [];
}

Formatter.prototype.format = function(words) {
  this.removePunctuation(words);
  this.makeLowerCase(this.formattedWords);
  this.stripWhitespace(this.formattedWords);
  this.splitString(this.formattedWords);
  return this.allWords;
};

Formatter.prototype.makeLowerCase = function(words) {
  this.formattedWords = words.toLowerCase();
};

Formatter.prototype.removePunctuation = function(words) {
  this.formattedWords = words.replace(/[^\w\s]|_/g, "");
};

Formatter.prototype.stripWhitespace = function(words) {
  this.formattedWords = words.replace(/\s+/g, " ");
};

Formatter.prototype.splitString = function(words) {
  this.allWords = words.split(" ");
};
