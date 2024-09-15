import userModels from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//Login user

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModels.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User Doesn't Exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Password" })
        }

        const token = createToken(user._id)
        res.json({ success: true, token })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}
//create token

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//Registor user

const registorUser = async (req, res) => {
    const { name, password, email } = req.body
    try {
        const exists = await userModels.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User Already Exists" })
        }

        //validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "pleace enter the valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "pleace enter a storng password" })
        }
        //hasing password
        const SALT = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, SALT)
        const newUser = new userModels({
            name: name,
            email: email,
            password: hashPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}



export {
    login,
    registorUser
}