const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const todoListSchema = new Schema({
    description: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    time: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
})


const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;