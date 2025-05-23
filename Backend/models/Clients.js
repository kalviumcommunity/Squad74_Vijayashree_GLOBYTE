const mongoose=require('mongoose');

const clientSchema=new mongoose.Schema({
    company:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    project:{type:String,default:0},
    budget:{type:Number,default:0},
    freelancers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Freelancer' }]
},{timestamps:true});

module.exports=mongoose.model('Client',clientSchema);