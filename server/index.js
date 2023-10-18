const express =require("express")
const app=express()
require('dotenv').config();
const port=process.env.PORT_NUMBER



app.listen(port,()=>{
   console.log(`server is running on the port 🚀 ${port} 🚀`)
})