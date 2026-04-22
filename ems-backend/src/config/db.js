const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const URI = process.env.MONGO_URI
const connectDB = async ()=>{
    try{
        await mongoose.connect(URI)
        console.log('Connected to MongoDB successfully !!')
    }catch(exception){
        console.error("!! Error Connecting MongoDB !!")
        console.log(exception)
    }
}
module.exports = connectDB