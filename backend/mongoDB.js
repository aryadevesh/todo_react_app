const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://devesh:Kirti12@cluster0.vvu8psh.mongodb.net/todo_app");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todoo = mongoose.model('Todoo', todoSchema);

module.exports = {
    Todoo
}