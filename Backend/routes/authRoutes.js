const express=require('express');
const router=express.Router();

const freelancres=[
    {id:1,name:"Amulya",skills:["UI/UX","Figma","Web Development"]},
    {id:2,name:"Vijayashree Ayyappan",skills:["Web Developement","UI/UX"]}
];

const clients=[
    { id: 1, company: "TechNova", requirement: "Full-stack Dev" },
  { id: 2, company: "Designify", requirement: "UX Designer" }
];

router.get('/',(req,res)=>{
    res.send('welcome to globyte. use /freelancer to access freelancer portal and use /clients to access client portal')
});

router.get('/freelancer',(req,res)=>{
    res.status(200).json({
        success:true,
        message:'Freelancers fetched succesfully',
        data:freelancres
    });
});

router.get('/clients',(req,res)=>{
    res.status(200).json({
        success: true,
    message: 'Clients fetched successfully',
    data: clients
    });
});

module.exports=router;