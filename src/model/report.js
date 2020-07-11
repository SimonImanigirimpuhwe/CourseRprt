import mongoose, { Mongoose } from 'mongoose';

const reportSchema = new mongoose.Schema({
  
    school:{
        type:String, 
        required: true
    },
    faculty:{
        type:String, 
        required: true
    },
    level:{
        type:String, 
        required: true},
    days:{type:String, required:true
    },
    date:{
        type:String, 
        required:true
    },
    body:{
        hours:{
            type:String, 
            required:true
        },
        module:{
            type:String, 
            required:true
        },
        component:{
            type:String, required:true
        },
        activity:{
            type:String, required:true
        },
        lecturer:{
            type:String, 
            required:true
        },
        observation:{
            type:String, 
            required:true
        },
    },
    submittedAt:{
        type:Date,
        default: Date.now
    }
});

const Report = mongoose.model('Report', reportSchema);

export default Report;