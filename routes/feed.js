const express= require("express")
const User= require("./../models/user")
const {getFeedHandler,getFeedByIdHandler,postFeedHandler,deleteFeedHandler,patchFeedHandler } = require("./../controllers/feed")

const router= express.Router()



router.get("/",getFeedHandler)
router.get("/:userId",getFeedByIdHandler)
router.patch("/:id",patchFeedHandler)
router.delete("/:id",deleteFeedHandler)
router.post("/",postFeedHandler)



module.exports=router
