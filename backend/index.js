import dotenv from "dotenv"
dotenv.config();
import express from "express"
const app = express()




app.listen(process.env.PORT,()=>{
    console.log("this server is listening you at port 2020")
})