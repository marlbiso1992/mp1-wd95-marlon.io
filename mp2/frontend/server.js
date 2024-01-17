const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//endpoint starts here
//req -> request
//res -> response
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/about-us', (req, res)=>{
    res.sendFile(__dirname + '/public/about-us.html');
})

app.get('/contact-us', (req, res)=>{
    res.sendFile(__dirname + '/public/contact-us.html');
})

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/public/login.html');
})

app.get('/logout', (req, res)=>{
    res.sendFile(__dirname + '/public/logout.html');
})





app.listen(port);
console.log('front end server is now running in port '+port);