const { Int32 } = require("bson");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type:String,
        required: true,
        min: 4,
        max: 255
        },
    email: {
        type:String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type:String,
        required: true,
        min: 6,
        max: 255
    },
    weekHours: {
        type: Int32
    },
    projects: {type:Array},
    date: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("user", userSchema);