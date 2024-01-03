import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=> {
    try {
        const DBconnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Successfully connected to MongoDB !! DB HOST:${DBconnection.connection.host}`);
        
    } catch (error) {
        console.error("MongoDB connection failed ", error);
        process.exit(1);
        
    }

}

export default connectDB;