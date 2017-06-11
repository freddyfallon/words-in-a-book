function FileHandler() {
  this.book = undefined;
}

FileHandler.prototype.open = function(file, callback) {
   rawFile = new XMLHttpRequest();
   rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200  || rawFile.status == 0) {
        callback(xhr.responseText);
      } else {
        callback(null);
        }
      };
    rawFile.open("GET", file, false);
    rawFile.send();
   };
 };

FileHandler.prototype.getFile = function(file) {
  this.book = this.open(file)
}
