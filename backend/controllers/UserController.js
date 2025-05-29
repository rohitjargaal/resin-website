import UserModel from "../models/User";

export const register = async(req,res)=>{
    const {username,email,password} = req.body;
    const existinguser = await UserModel.findOne(email);
    if(!existinguser){
        const useradded = new UserModel({
            username: username,
            email: email,
            password: password
        })
        await useradded.save();
        res.status(200).send("user register successfully")
    }else{
        res.status(500).send("user not register due to server error");
    }
}