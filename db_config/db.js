import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
// get connection string 
//const DB_URL = process.env.NODE_ENV === 'dev' ? process.env.LOCAL_HOST_DB_URL : process.env.DB_URL;
const DB_URL = process.env.LOCAL_HOST_DB_URL;

export async function connectMongoDB() {
    try {
        await mongoose.connect(DB_URL, {});
        console.log("Connection successfull")
    } catch (error) {
        console.log("Connection failed" + error)
    }


}