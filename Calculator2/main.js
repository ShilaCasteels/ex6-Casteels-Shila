var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
var result = 0;
var variable = 0;
app.get("/calculate", function(request, response){
    var result = request.body;
});

var calculate = [];
calculate.post("/calculate/add", function(request, response){
    var variable = request.body;
    result += Number(variable);
    response.result(204).send();
});


