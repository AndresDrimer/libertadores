import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("connected")
    }
    catch(err){
        console.log("error")
    }
}

export default connectMongoDB;