//create express app
const exp=require('express')
const app=exp()

//add body parsing m-w
app.use(exp.json())

const path=require('path')
//connect angular app to server
app.use(exp.static(path.join(__dirname,'../client/dist/my-project/browser')))

require('dotenv').config()



//import mongoose
const mongoose=require('mongoose')
const DB_URL=process.env.ATLAS_DB_URL;

//connect to database
mongoose.connect(DB_URL)
.then(()=>{console.log("Db connection success")})
.catch(err=>{console.log("err in DB connection",err)})

const User=require('./Models/User')
const Seller=require('./Models/Seller')

//import api
const userApp=require('./APIs/user-api')
const sellerApp=require('./APIs/seller-api')

//forward req to userApp if path start with /user-api
app.use('/user-api',userApp)
app.use('/seller-api',sellerApp)

//error handler m-w
app.use((err,req,res,next)=>{
    res.send({message:"error occured",payload:err.message})
})
//add port number
const PORT=process.env.PORT||4000
app.listen(PORT,()=>{console.log(`web server is listening on ${PORT}`)})