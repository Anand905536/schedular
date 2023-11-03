const express =require("express")
const app=express()
require('dotenv').config();
const port=process.env.PORT_NUMBER
const routes=require('./routes/route')
const cors=require('cors')

// cors for accessing the data between diffrent hosting of client and server
app.use(cors());

// connecting to the database

// routes redirected
app.use('/api',routes)

// connecting to the database
app.listen(port,()=>{
   console.log(`server is running on the port 🚀 ${port} 🚀`)
})