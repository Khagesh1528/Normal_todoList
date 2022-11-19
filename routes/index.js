// import the library****************
const express = require('express');

//fire the router
const router = express.Router();


//create a variable to store homecontrolller
const  homecontrolller = require('../controller/home_controller');

router.get('/',homecontrolller.home);
router.post('/create_Todo',homecontrolller.createTodo)  // create a new task on todoList
router.get('/deleteTodo', homecontrolller.deleteTodo) // delete task from lodoList



console.log('Router is loaded');
module.exports = router;