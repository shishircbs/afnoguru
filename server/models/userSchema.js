import mongoose from "mongoose";
const { Schema } = mongoose;

/** user model */

const userModel = new Schema({
    username : { type : String, required: true },
    email : { type : email, required: true, unique: true},
    password : { type : password, minlength: 6, required: true},
    service : { type : Number, default : 0, required: true},
    createdAt : { type : Date, default : Date.now}
})

export default mongoose.model('user', userModel);