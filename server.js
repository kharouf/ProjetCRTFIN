
// import express
const express = require('express')
const cors = require('cors')

// import data base
const connectDB = require('./config/connectDB.js')
// Initialize the app
const app = express()
const mongoose  =require('mongoose');
mongoose.set('strictQuery', true)
// config dotenv
require('dotenv').config()
connectDB()
// create middelware user
app.use(express.json())
app.use(cors())
app.use('/user' , require('./routes/user'))

// create middelware benevole

app.use('/benevole' , require('./routes/benevole'))
// create middelware evenemet


app.use('/evenement', require('./routes/evenement'))
app.use('/familles' , require('./routes/famillesP'))


const PORT = process.env.PORT || 5000

// creaation of the server
app.listen(PORT,(err)=>{err?console.log(err):console.log('Server is running on port'+" "+ PORT)})

