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

const userDB = [
    {
        id: 1,
        username: "admin",
        password: "password123",
        status: 1
    },
    {
        id: 2,
        username: "staff",
        password: "123",
        status: 1
    }

]


app.get('/home', (req, res)=>{

})

app.get('/contact', (req, res)=>{

})

app.get('login-page', (req, res)=>{


})

app.post('/login-validation', (req, res)=>{
    let username_login = req.body.usernameX;
    let password_login = req.body.passwordX;
   console.log()
   const user = userDB.find(
        (ob)=>{
          return ob.username === username_login && ob.password === password_login 
        }
    );
    
    if (user) {

        res.json(
           { code: "success", msg:"Username and Password matched a record" }   
        )

    } else {
       res.status(401).json({ code: "failed", msg:"Incorrect Username and Password"}) 
    }


})

//HTTP METHODS
//GET, POST, PUT, HEAD, DELETE, PATCH
app.get('/test/:num1/:num2', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    //database query

    const twoNumbers = [
        {
           id : num1,
           name: "Odeth",
           signal: true, 
        },
        {
            id : num2,
            name: "Odeth",
            signal: true,   
        }
    ]

    let sample = [num1, num2]

    let z = parseInt(num1);

    let m = "Hello WD95P";

    res.json(twoNumbers);
    
}
);
app.post('/save-data', (req, res) => {
    let fname = req.body.firstname;
    let lname = req.body.lastname;

    res.json([fname, lname])

})

app.put('/put-data/:id', (req, res) => {
     let fname = req.body.firstname;
    //let lname = req.body.lastname;

    let id = req.params.id;
   //update change firstname where id = id

    res.json([num1, fname])
})

app.delete('delete/record/:id', (req, res)=>{

}   
)
app.listen(5000)
console.log('Server is running in port 5000')