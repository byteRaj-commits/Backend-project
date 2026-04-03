import dotenv from "dotenv";
dotenv.config({path: './.env'});
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: DB_NAME,
          
        });
        console.log(`Connected to MongoDB`);

    }
    catch(err){
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }
};

export default connectDB;