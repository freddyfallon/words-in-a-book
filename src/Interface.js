$(document).ready(function() {
  $('#count').click(function(){
    let file = document.getElementById("fileInput").files[0];
    handler = new FileHandler(file);
    handler.readFile();
  });

  $('#prime').click(function(){
    let file = document.getElementById("fileInput").files[0];
    handler = new FileHandler(file);
    formatter = new Formatter();
    counter = new WordCounter();
    processor = new Processor();
    handler.readFile();
    processor.getWords(handler.fileText);
  });
});
// window.onload = function() {
//
//     fileInput.addEventListener('change', function(e) {
//       var file = fileInput.files[0];
//       var reader = new FileReader();
//       reader.onload = function(e) {
//         fullText += e.target.result;
//     };
//       reader.readAsText(file);
//     });
// };
