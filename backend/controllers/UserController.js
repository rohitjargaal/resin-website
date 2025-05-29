import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const jwtkey = "helloworld"


export const register = async (req, res) => {
    let { username, email, password } = req.body;
    const existinguser = await UserModel.findOne({ email });
    try {
        if (!existinguser) {
            const useradded = new UserModel({
                username: username,
                email: email,
                password: password
            })
            await useradded.save();
            res.status(200).send("user register successfully")
        } else {
            res.status(408).send("email already exists")
        }
    } catch (error) {
        console.log("error", error)
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email })
        if (!user) {
            res.status(404).send("Invalid credentials: User not found")
        } else {
            const ismatch = await bcrypt.compare(password, user.password)
            if (!ismatch) {
                res.status(200).send("Invalid credentials: Wrong password")
            } else {
                const token = jwt.sign({ userId: user._id }, jwtkey, { expiresIn: "2h" })
                res.cookie("token",token);
                res.json({ success: true, message: "User login successful", userId: user._id });
            }
        }
    } catch (error) {
        console.log("error", error)
    }
}