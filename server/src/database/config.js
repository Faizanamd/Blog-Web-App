import mongoose from "mongoose";


export const connectToMongoose = async () => {
    try {
        mongoose.connect(process.env.DB_URL);
        console.log("mongodb connection successfull");
    } catch (error) {
        console.log("Error in mongodb: ", err.message);
    }
}
