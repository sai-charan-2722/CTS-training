// //import mongoose
// const mongoose=require('mongoose')
// require('dotenv').config()

// const DB_URL=process.env.ATLAS_DB_URL;

// //connect to database
// mongoose.connect(DB_URL)
// .then(()=>{console.log("Db connection success")})
// .catch(err=>{console.log("err in DB connection",err)})

// //create user Schema
// const userSchema=new mongoose.Schema({
//     username:{
//         type:String,
//         required:true,
//         minLength:4
//     },
//     email:String,
//     age:Number,
//     DateOfBirth:Date
// })
// //create model(class) for that userSchema
// const User=mongoose.model('test',userSchema)


// //export user model
// module.exports=User;