import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.error("Database connection error:", error);
});

export default mongoose;
