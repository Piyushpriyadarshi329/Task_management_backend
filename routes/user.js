const express= require("express")
const User= require("./../models/user")
const {getUserHandler,postUserHandler,deleteUserHandler, patchUserHandler, getUserByIdHandler, loginHandler,changePasswordHandler} = require("./../controllers/user")

const router= express.Router()



router.get("/",getUserHandler)
router.get("/:id",getUserByIdHandler)
router.patch("/:id",patchUserHandler)
router.delete("/:id",deleteUserHandler)
router.post("/",postUserHandler)
router.post("/login",loginHandler)
router.post("/changepassword",changePasswordHandler)




module.exports=router
