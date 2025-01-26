const User = require("./../models/user")



const getUserHandler= async(req,res)=>{
        let user=await   User.find();
        res.status(200).json(user)
}

const getUserByIdHandler= async(req,res)=>{
    let user=await   User.find({_id:req.params.id});
    res.status(200).json(user)
}

const postUserHandler= async(req,res)=>{
    try {
        let user=await   User.create(req.body);
    res.status(200).json({user,success:true}) 
    } catch (error) {
        res.status(400).json({success:false}) 
 
    }
   
}

const deleteUserHandler= async(req,res)=>{
    let user=await   User.findByIdAndDelete(req.params.id);
    res.status(200).json(user)
}


const patchUserHandler= async(req,res)=>{
    let user=await   User.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json(user)
}

const loginHandler= async(req,res)=>{
    try {
        let user=await   User.find({email:req.body.email,password:req.body.password});
        console.log("user",user)
        if(user.length){
            res.status(200).json({user,success:true})

        }else{
            res.status(200).json({success:false,message:"User not found"})

        }
    } catch (error) {
        res.status(400).json({success:false})

    }
}



const changePasswordHandler=async(req,res)=>{
   try {
    console.log("req,body",req.body)
    let user=await   User.updateOne({email:req.body.email},{$set:{password:req.body.password}});
    res.status(200).json({user,success:true})
    
   } catch (error) {
    res.status(500).json({success:false})


    
   }


}



module.exports={getUserHandler,postUserHandler,deleteUserHandler,patchUserHandler,getUserByIdHandler,loginHandler,changePasswordHandler}





