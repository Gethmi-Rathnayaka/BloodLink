import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectDB = async (): Promise<void> => {
    if(isConnected){
        console.log("MongoDB is connected");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGO_URL || '',{
            dbName: 'bloodLink'
        });
        isConnected = true;
        console.log("MongoDB is connected");
    } catch(error) {
        console.log(error);
    }
};
