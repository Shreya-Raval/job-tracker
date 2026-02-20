import mongoose from "mongoose";

export default async function connectDb(){
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected successfully, ${conn.connection.host}`)
    } catch(error) {
        console.log(`MongoDB refused to connect!, ${error.message}`);
        process.exit(1);
    }
}