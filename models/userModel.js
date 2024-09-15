import mongoose from './db.js'

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }

}, {
    minimize: false,
    versionKey: false
})

const userModels = mongoose.model.user || mongoose.model('user', userSchema)

export default userModels