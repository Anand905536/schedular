
const arr=[1,2,3,4,5,6,7,8,9];
module.exports={
     func:async (req,res,next)=>{
        res.status(200).send({msg:arr})
     }
}
