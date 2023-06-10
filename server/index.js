// const express = require('express')
// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// when "type": "module" is not set 


import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoutes from './routes/authroute.js'
import userRoutes from './routes/usersroute.js' 
import videoRoutes from './routes/videosroute.js'
import commentRoutes from './routes/commentsroute.js'
import cookieParser from "cookie-parser";




const app = express();
dotenv.config();

const PORT = process.env.PORT;
const MONGO = process.env.MONGO;


    mongoose.connect(MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('connected to DB')
    }).catch((err)=>console.log("no connection"))

    

app.use(cookieParser())    
app.use(express.json())
app.use("/api/auth", authRoutes)    
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})
app.listen(PORT, ()=> {
    console.log(`server started at port ${PORT}`);
})






