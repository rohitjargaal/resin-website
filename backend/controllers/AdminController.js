import AdminModel from "../models/AdminModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const jwtkey = "helloworld"
// export const registeradmin = async (req, res) => {
//     let { email, password } = req.body;
//     const existinguser = await AdminModel.findOne({ email });
//     try {
//         if (!existinguser) {
//             const useradded = new AdminModel({
//                 email: email,
//                 password: password
//             })
//             await useradded.save();
//             res.status(200).send({ success: "true", message: "user register successfully" })
//         } else {
//             res.status(408).send("email already exists")
//         }
//     } catch (error) {
//         console.log("error", error)
//     }
// }

export const loginadmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await AdminModel.findOne({ email: email })
        if (!user) {
            res.status(400).send({ message: "Invalid credentials: User not found" })
        } else {
            const ismatch = await bcrypt.compare(password, user.password)
            if (!ismatch) {
                res.status(400).send({ message: "Invalid credentials: Wrong password" })
            } else {
                const token = jwt.sign({ userId: user._id }, jwtkey, { expiresIn: "2h" })
                res.cookie("token", token);
                res.json({ success: true, message: "User login successful", userId: user._id });
            }
        }
    } catch (error) {
        console.log("error", error)
    }
}