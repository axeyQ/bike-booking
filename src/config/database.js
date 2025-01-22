import mongoose from "mongoose";

let connected = false;

const connectDB = async ()=>{
    mongoose.set('strictQuery',true);

    if(connected){
        console.log('Already connected to database');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 5000,
            connectTimeoutMS: 5000,
        });
        connected=true;
    }    catch (error) {
        console.error('Failed to connect to database:', error.message);
    }
}

export default connectDB;