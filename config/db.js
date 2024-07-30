import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://ingabirediane980:43CX6k0EKDShQrwB@cluster0.duenvwz.mongodb.net/").then(()=>console.log("Db Connected"))
}