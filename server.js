var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

// create the express app
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
// static content
app.use(express.static(path.join(__dirname, "./static")));
app.get('/', function(req, res) {
res.render("index");
// app.set('view engine', 'html');
})

app.listen(8000, function() {
console.log("listening on port 8000");
})
