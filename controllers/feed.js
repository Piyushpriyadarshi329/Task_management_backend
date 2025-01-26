const Task = require("./../models/feed")



const getFeedHandler= async(req,res)=>{
      try {
        let feed=await   Task.find();
        res.status(200).json({feed,success:true})
      } catch (error) {
        res.status(500).json({success:false})
      }

}

const getFeedByIdHandler= async(req,res)=>{
    try {
        let feed=await   Task.find({userId:req.params.userId});
        res.status(200).json({feed,success:true}) 
    } catch (error) {
        res.status(500).json({success:false}) 
    }
}

const postFeedHandler= async(req,res)=>{
    try {
        let feed=await   Task.create(req.body);
        res.status(200).json({feed,success:true}) 
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false})  
    }
}

const deleteFeedHandler= async(req,res)=>{
    let user=await   Task.findByIdAndDelete(req.params.id);
    res.status(200).json(user)
}


const patchFeedHandler= async(req,res)=>{
    let user=await   Task.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json(user)
}


module.exports={getFeedHandler,getFeedByIdHandler,postFeedHandler,deleteFeedHandler,patchFeedHandler}





