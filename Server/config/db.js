import mongoose from "mongoose";

export const  connectDB = async () =>{

    const connection = process.env.MONGODB_URL
    await mongoose.connect(connection).then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.