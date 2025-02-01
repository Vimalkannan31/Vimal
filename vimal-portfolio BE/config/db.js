import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const ConnectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            tls: true,  // Ensures secure TLS connection
            serverSelectionTimeoutMS: 5000 // Avoids long waits on connection failures
        });
        console.log("DataBase Connected...");
         
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default ConnectDB;
