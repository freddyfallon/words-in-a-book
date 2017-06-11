var fileInput = document.getElementById('fileInput');
var fullText = "";
var processor = new Processor();
var formatter = new Formatter();
var counter = new WordCounter();

window.onload = function() {

    fileInput.addEventListener('change', function(e) {
      var file = fileInput.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        fullText += e.target.result;
    };
      reader.readAsText(file);
    });
};
