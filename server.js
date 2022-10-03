require('dotenv').config()
const express = require('express')
const workoutsRoutes = require('./Routes/workouts')
const mongoose = require('mongoose')

//Server
const port = process.env.PORT;


//Express app
const app = express()

//Middleware
app.use(express.json())

//Routes
app.use('/api/workouts',workoutsRoutes)

//Routing
app.get('/',(req,res)=>{
    console.log(req.path, res.method)
    next()
})

//Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen to requests
        app.listen(process.env.PORT, ()=>{
            console.log('server running connected to db on port:', port)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

