//We need mongoose for our schemas
const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Schema is a json file 
const workoutSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
}, { timestamps: true })

//Export this module
module.exports = mongoose.model('Workout',workoutSchema)

