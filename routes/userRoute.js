import express from 'express'
import { login, registorUser } from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.post('/register', registorUser)
userRoute.post('/login', login)






export default userRoute