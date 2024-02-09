const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const userRoutes = require('./routes/userRoutes') 
const adminRoutes = require('./routes/adminRoutes')
const authRoutes = require('./routes/authRoutes')
const app = express()

//middlewares

app.use(cors({
    origin:'http://localhost:5173',
    methods:'GET,POST,PUT,DELETE,PATCH',
    allowedHeaders:'Content-Type, Authorization,'
}))

app.use(bodyParser.json())

app.use('/user', userRoutes)
app.use('/admin', adminRoutes)
app.use('/auth', authRoutes)

console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.APP_URL || 5000, ()=>{
        console.log("Database connection established!!!")
    })
}).catch((err)=>{
    console.log("Connection Failed!")
})
   

