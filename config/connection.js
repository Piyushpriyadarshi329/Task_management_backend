const mongoose= require("mongoose")


async function mongodbConnection(url){
    
    return mongoose.connect(url)
} 

module.exports = {mongodbConnection}

