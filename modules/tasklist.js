const mongoose  = require('mongoose');

// create a schema
const todoSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    }
});

// create moudles
const TodoList = mongoose.model('TodoList',todoSchema);

// export the schema module
module.exports = TodoList;


