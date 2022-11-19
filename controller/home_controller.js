const { query } = require('express');
const TodoList = require('../modules/tasklist')

// create moudles 

module.exports.home = function (req, res) {

    TodoList.find({}, function (err, todo) {

        if (err) {
            console.log('Error in featching data');
        }
        return res.render('home', {
            title: "Home",
            todolist: todo
        });

    });
}


// create task on todoList************************************
module.exports.createTodo = function (req, res) {

   console.log(req.body);
    // crating new todo and storing into DB
    TodoList.create({

        desc: req.body.desc,
        category: req.body.category,
        dueDate: req.body.dueDate
    }, function (err, newArr) {
        if (err) {
            console.log('Oops!!!! Featching problem to create a new task', err);
            return;
        }
        console.log(req.body);
        return res.redirect('back')
    });

}
// ****************************************************************

// detele task from  todoList
module.exports.deleteTodo = function(req,res){
    console.log(req.query);
    let id = req.query;
    //check the nunmber of task 
    let count = Object.keys(id).length;

    for (let i = 0; i < count; i++) {
       
        TodoList.findByIdAndDelete(Object.keys(id)[i],function(err){
                if(err){
                    console.log(`Error to delete task ${err}`)
                };
               
        });
       
    }
    console.log('Successfully deteled the task')
    return res.redirect('back');
    
}