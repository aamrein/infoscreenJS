var express = require('express');
var open = require('open');

var app = express();
app.use(express.static('./node_modules/jquery/dist/'));
app.use(express.static('dist/app'));
app.use(express.static('dist/resources'));

app.listen(8080);

open("localhost:8080/index.html", "firefox");