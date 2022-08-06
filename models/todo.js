const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: [true, 'This field is required'],
    },
    content: {
        type: String,
        required: [true, 'This field is required'],
    },
   
});

const Todo = mongoose.model('todo',TodoSchema);

module.exports = Todo;
