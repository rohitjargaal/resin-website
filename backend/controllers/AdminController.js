import AdminModel from "../models/Admin.js"


export const register = async (req, res) => {
    let { email, password } = req.body;
    const existinguser = await AdminModel.findOne({ email });
    try {
        if (!existinguser) {
            const useradded = new AdminModel({
                username: username,
                email: email,
                password: password
            })
            await useradded.save();
            res.status(200).send({ success: "true", message: "user register successfully" })
        } else {
            res.status(408).send("email already exists")
        }
    } catch (error) {
        console.log("error", error)
    }
}