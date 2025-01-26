const mongoose= require("mongoose")



//schema
const userSchema= new mongoose.Schema({
    
    name:{
    type:String,
    },
   
    email:{
        type:String,
        unique:true,
        required:true
    },
  
   
    password:{
        type:String  
    }
 },{timestamps:true})





 //model

 const User = mongoose.model("user",userSchema); 

module.exports=User;



