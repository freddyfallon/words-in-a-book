$(document).ready(function() {
  $('#fileInput').on("change", function() {
    var file = document.getElementById("fileInput").files[0];
    handler = new FileHandler(file);
    handler.readFile();
  })

  $('#count').click(function(){
    getWords(handler.allText);
  });

  $('#prime').click(function(){
    getPrimeWords(handler.allText);
  });

  function getWords(text) {
    var processor = new Processor();
    processor.getWords(text);
    $('#announce').text("Here are all of the words and their occurrences:")
    $('#output').html(processor.counter.finalOutput);
  }

  function getPrimeWords(text) {
    var processor = new Processor();
    processor.getPrimeWords(text);
    $('#announce').text("Here are all of the words that appear a number of times that is prime:")
    $('#output').html(processor.counter.finalOutput);
  }
});
