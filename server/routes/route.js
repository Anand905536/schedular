const express=require("express");
const router=express.Router()
const testArray=require('../controllers/userControllers')


router.get('/test-array',testArray.func)
module.exports = router;