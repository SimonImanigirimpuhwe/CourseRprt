import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    regNumber:{
        type:String,
        required:true
    },
    address:{
        school:{type:String, required:true},
        faculty:{type:String, required:true},
        level:{type:String, required:true}
    },
});

const User = mongoose.model('User', userSchema);

export default User;