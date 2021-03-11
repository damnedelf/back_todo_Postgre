"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    name: String,
    id: String,
    isCompleted: Boolean,
}, { typeKey: "$type" });
const todo = mongoose.model("todos", TodoSchema);
module.exports = todo;
