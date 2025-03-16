import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://itsapurb:123EI0599@cluster0.7zmzk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
// }

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://itsapurb:123EI0599@cluster0.7zmzk.mongodb.net/food-del');
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};
