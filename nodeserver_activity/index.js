//MVC - model, view, controller design pattern
const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(
    cors(
        { origin : "http://localhost" }
    )
)
//addtion
app.get('/add/:num1/:num2', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    //database query
    const sum = parseInt(num1) + parseInt(num2);
    res.json('The Sum is ' + sum);
}
);
//subtraction
app.get('/subtract/:num1/:num2', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    //database query
    const difference = parseInt(num1) - parseInt(num2);
    res.json('The Difference is '+ difference);
}
);
//multiplication
app.get('/multiplication/:num1/:num2', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    //database query
    const product = parseInt(num1) * parseInt(num2);
    res.json('The Product is '+ product);
}
);
//Division
app.get('/division/:num1/:num2', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    //database query
    const quotient = parseInt(num1) / parseInt(num2);
    res.json('The Quotient is ' + quotient);
}
);
//Division
app.get('/home/', (req, res) => {
    res.json("My first arithmetic web services api" );
}
);
app.listen(5000)
console.log('Server is running in port 5000')