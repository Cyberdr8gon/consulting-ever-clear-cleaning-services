var express = require('express');
var app = express();



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.post("/api/load", function(request, response) {
  console.log("Client Load");
  console.log(request);
  response.json({ message: '/api/load Successful' });
});

app.post("/api/bounce", function(request, response) {
  console.log("Client Didn't Bounce");
  console.log(request);
  response.json({ message: '/api/bounce Successful' });
});

app.post("/api/convert", function(request, response) {
  console.log("Client Likely Converted");
  console.log(request);
  response.json({ message: '/api/convert Successful' });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


