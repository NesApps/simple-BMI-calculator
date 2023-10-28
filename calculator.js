const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send(`The result of the calculation is ${result}`)
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(req, res){
    let h = parseFloat(req.body.height);
    let w = parseFloat(req.body.weight);

    let bmi = w/(h*h);
    res.send(`The result of your BMI is: ${bmi}`);
});

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`Server is running on Port: ${PORT}`)
});