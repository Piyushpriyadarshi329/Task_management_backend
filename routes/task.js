const express= require("express")
const {getTaskByIdHandler,getTaskHandler,deleteTaskHandler, patchTaskHandler, postTaskHandler, } = require("./../controllers/task")

const router= express.Router()

router.get("/",getTaskHandler)
router.get("/:userId",getTaskByIdHandler)
router.patch("/:id",patchTaskHandler)
router.delete("/:id",deleteTaskHandler)
router.post("/",postTaskHandler)




module.exports=router
