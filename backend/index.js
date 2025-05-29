import dotenv from "dotenv"
dotenv.config();
import express from "express"
const app = express()
import userRoutes from "./routes/User.js";
import mongoose from "mongoose";
import cors from "cors"

app.use(express.json())
app.use(cors())
app.use("/user",userRoutes)


app.listen(process.env.PORT, () => {
    console.log(`server running at ${process.env.PORT}`);
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("successfull connected db");
    }).catch((err) => {
        console.log(err)
    });
})