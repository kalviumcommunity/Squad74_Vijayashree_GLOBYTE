const mongoose=require('mongoose');

const clientSchema=new mongoose.Schema({
    company:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    project:{type:String,default:0},
    budget:{type:Number,default:0},
},{timestamps:true});

module.exports=mongoose.model('Client',clientSchema);