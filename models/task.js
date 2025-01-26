const mongoose= require("mongoose")



//schema
const taskSchema= new mongoose.Schema({
    title:{
    type:String,
    required:true
    },
    description:{
    type:String,
    },
    userId:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        enum : ['Pending','Completed','Done',"Delete"],
        default: 'Pending'
     
    }
 },{timestamps:true})





 //model

 const Task = mongoose.model("task",taskSchema); 

module.exports=Task;



