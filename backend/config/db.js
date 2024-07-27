import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ashish2ganesh:GbLO5HrUSDLG4U82@cluster0.2alns1f.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}