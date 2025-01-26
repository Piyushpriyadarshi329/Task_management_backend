const Task = require("./../models/task")



const getTaskHandler= async(req,res)=>{
    try {
        let task=await   Task.find();
        res.status(200).json({task,success:true})
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false,user})  
    }
       
}

const getTaskByIdHandler= async(req,res)=>{
    try {
        let task=await   Task.find({userId: req?.params?.userId});
        res.status(200).json({task,success:true})
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false})  
    }
}

const postTaskHandler= async(req,res)=>{
    try {
        let task=await   Task.create(req.body);
        res.status(200).json({task,success:true})
    } catch (error) {
        res.status(400).json({success:false})  

    }

 
}

const deleteTaskHandler= async(req,res)=>{
    let user=await   Task.findByIdAndDelete(req.params.id);
    res.status(200).json(user)
}


const patchTaskHandler= async(req,res)=>{
    try {
        let task=await   Task.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({task,success:true})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false})

    }
   
}


module.exports={getTaskHandler,getTaskByIdHandler,postTaskHandler,deleteTaskHandler,patchTaskHandler}





