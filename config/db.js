import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://ingabirediane980:1ZlZpPJ2hCOiHJAI@cluster0.cwzrxcs.mongodb.net/").then(()=>console.log("Db Connected"))
}