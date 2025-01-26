const mongoose= require("mongoose")



//schema
const feedSchema= new mongoose.Schema({
    title:{
    type:String,
    required:true
    },
    description:{
    type:String,
    },
    url:{
        type:String,
        },
    userId:{
        type:String,
        required:true
        },

 },{timestamps:true})





 //model

 const Feed = mongoose.model("feed",feedSchema); 

module.exports=Feed;



