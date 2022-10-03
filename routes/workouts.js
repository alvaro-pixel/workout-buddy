const express =require('express')
const {
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout,
    createWorkout
} = require('../controller/workoutControllers');
const { update } = require('../models/workoutModel');
const Workout = require('../models/workoutModel')
const router = express.Router();


//Get all workouts
router.get('/',getWorkouts)

//Get single workout
router.get('/:id',getWorkout)

//Post new workout
router.post('/',createWorkout)

//Delete single post
router.delete('/:id',deleteWorkout)

//Update workout
router.patch('/:id', updateWorkout)

module.exports = router