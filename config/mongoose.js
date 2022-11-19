// import magoose libraray
const mongoose = require('mongoose');

// connect to the database ******
mongoose.connect('mongodb://0.0.0.0/my_todo_db');

// connection check 
const db = mongoose.connection;

// agar eror aaya connection me ****
db.on('error',console.log.bind(console,'Error featch to connect to database'));

// successfully connect to the database************
db.once('open',function(){
    console.log('Successfully Connected to the database');
});