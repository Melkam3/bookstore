import express from "express"

import mongoose from "mongoose"
import { DB_URL, PORT } from "./config.js"
import  booksroute  from "./routes/booksroute.js"


const app= express()

app.use(express.json())

app.get("/",(req,res)=>{
  return  res.status(200).send("Welcome to server side")
})

app.use("/books",booksroute)

mongoose
      .connect(DB_URL)
      .then(()=>{
        console.log("database is connected");
        app.listen(PORT,()=>{
            console.log(`server is listening on ${PORT}`)
        })
      })
