const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let projectSchema = new Schema({
    type: {type:String},
    name: {type:String},
    description: {type:String},
    timeStart: {type: Date},
    timeeEnd: {type: Date},
    duration: {type: Number},
    stakeholder: {type: String},
    Leader: {type: String},
    members: {type: Array},
    tasks: {type: Array},
    date: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("project", projectSchema);

