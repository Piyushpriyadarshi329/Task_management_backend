const express= require("express")
const {mongodbConnection }= require("./config/connection")
const cors= require("cors")
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const userRouter= require("./routes/user")
const taskRouter= require("./routes/task")
const feedRouter= require("./routes/feed")
const s3Router = require("./routes/s3Router")






// mongodbConnection("mongodb://127.0.0.1:27017/taskmanagementDB")

mongodbConnection(`mongodb+srv://160030018:${process.env.MONGODB_PASSWORD}@cluster0.5thia.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`)


const app= express();
app.use(bodyParser.json());
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use("/api/user",userRouter)
app.use("/api/task",taskRouter)
app.use("/api/feed",feedRouter)
app.use("/api/upload",s3Router)






app.listen(process.env.PORT||4001,()=>{
    console.log(`Server is listen  at ${process.env.PORT} `)
})