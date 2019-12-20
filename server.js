var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path')

require('./server/config/config')
app.use(bodyParser.json())
require('./server/routes/route')(app)
app.use(express.static(__dirname + '/public/dist/public'))

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen(8000, function(){
    console.log('Listening on port 8000')
})
