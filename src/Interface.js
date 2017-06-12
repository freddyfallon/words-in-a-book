$(document).ready(function() {
  $('#count').click(function(){
    let file = document.getElementById("fileInput").files[0];
    handler = new FileHandler(file);
    handler.readFile();
    getWords(handler.fileText);
  });

  $('#prime').click(function(){
    var file = document.getElementById("fileInput").files[0];
    handler = new FileHandler(file);
    handler.readFile();
  });

  function getWords(text) {
    var processor = new Processor();
    processor.getWords(text);
  }
});
