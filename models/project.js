const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let projectSchema = new Schema({
    name: {type:String},
    description: {type:String},
    timeBegin: {type: String},
    timeEnd: {type: String},
    duration: {type: Number},
    stakeholder: {type: String},
    cloud: {type: String},
    github: {type: String},
    leader: {type: String},
    members: {type: Array},
    tasks: {type:Array},
    tech: {type:Array},
    status: {type: String},
    date: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("project", projectSchema);
