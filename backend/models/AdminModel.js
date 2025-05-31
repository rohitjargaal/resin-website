import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const AdminSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

AdminSchema.pre('save', async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 12) 
    }
    next()
})

const AdminModel = mongoose.model("AdminModel", AdminSchema)
export default AdminModel

