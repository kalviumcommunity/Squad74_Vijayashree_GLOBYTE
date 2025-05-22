const mongoose=require('mongoose');

const freelancerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,require:true,unique:true},
    skills:{type:[String],require:true},
    experience:{type:Number,default:0},
    clients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client' }]
},{timestamps:true});

module.exports=mongoose.model('Freelancer',freelancerSchema);