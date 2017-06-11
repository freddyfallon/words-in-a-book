function Formatter() {
  var formattedWords;
}

Formatter.prototype.format = function(words) {
  this.removePunctuation(words);
  this.makeLowerCase(this.formattedWords);
  this.stripWhitespace(this.formattedWords);
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
