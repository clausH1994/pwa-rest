const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let taskSchema = new Schema({
    name: {type:String},
    description: {type:String},
    duration: {type: Number},
    assigned: {type: String},
    priority: {type: String},
    status: {type: String},
    date: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("task", taskSchema);

