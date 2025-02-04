import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const ConnectDB = async() =>{
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("DataBase Connected...");
         
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default ConnectDB;