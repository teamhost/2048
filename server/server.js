var express = require('express');
var path =  require('path');
var app = express();

app.use(express.static(path.normalize(__dirname+"/..")));

app.get('/test', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
