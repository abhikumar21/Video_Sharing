import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
    },
    img:{
        type: String,
    },
    subscribers:{
        type:Number,
        default: 0,
    },
    subscribedUsers:{
        type:[String],
    },
    fromGoogle: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: true, // Set this to true for users who should have admin access.
    },

}, {timestamps: true} )


export default mongoose.model("Usermodel", UserSchema)