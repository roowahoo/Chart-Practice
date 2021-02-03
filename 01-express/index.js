// Including a dependency
const express = require('express');
// create a new express app
let app = express();

// add routes here
// maps url to a javascript function
// such that when URL is accessed
// on the server, the function will execute

app.get('/', function(request,response){
    // we use the response object to send data back 
    // to client
    response.send("<h1>Hello World</h1>");
})

app.get('/about-us', function(req,res){
    // we use the response object to send data back 
    // to client
    res.send("<h1>About us</h1>");
})

app.get('/greetings/:fullname', function(req,res){
    let fullname=req.params.fullname;
    res.send("Hi,"+fullname);
})

// Q1.Write a route that maps to the URL/squared/:
// and send back using the response the number squared
app.get('/squared/:x', function(req,res){
    let number=parseInt(req.params.x);
    let squared=number**2;
    res.send('The number squared is '+ squared);
})

// Q2. Write a route that can have two number parameters
// with URL being '/sum'. Send back using the response the
// sum of the two number parameters
app.get('/sum/:x/:y', function(req,res){
    // anything extracted out from params is a string
    let x=parseInt(req.params.x);
    let y=parseInt(req.params.y);
    let sum=x+y;
    res.send(sum.toString());
})

// starts at the server at port 3000
app.listen(3000, ()=>{
    console.log("Server started")
})
