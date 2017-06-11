function Formatter() {
  var lowerCaseWords;
}

Formatter.prototype.format = function(words) {
  this.lowerCaseWords = words.toLowerCase();
};
