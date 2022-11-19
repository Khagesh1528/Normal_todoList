// import express package 
const express = require('express');
// const bodyParser = require("body-parser");
const port = 1428;


//connect to the database before server hiting

const db = require('./config/mongoose');

const app = express(); // fire the server ya hit the server

// run before routes
app.use(express.urlencoded());
// middileware to use static files like css and js file
app.use(require('./routes'));

// connect to router ya refers the request to router

app.use(express.static('assets'));


// set the view engine and path
app.set('view engine','ejs');
app.set('views','views') // set the path
//************************************ */


// ab app ko kaht hain suno zara

app.listen(port,function(err){
    // 1st check error aata hai ya nahi 
    if (err) {
        console.log('Error in your server please check', err)  // error aata hain to is msg ke sath err ko print karate hain
    }
    // agar sab sahi hai to server yaha se run hota hai
    console.log('Server is runninng on port:',port);
})