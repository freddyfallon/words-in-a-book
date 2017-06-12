var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '.')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
