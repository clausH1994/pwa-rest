const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let taskSchema = new Schema({
    task: {type:String},
    description: {type:String},
    duration: {type: Number},
    assigned: {type: String},
    priority: {type: Number},
    date: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("task", taskSchema);

