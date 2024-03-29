const mongoose=require('mongoose')
//create user Schema
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minLength:4
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    email:String,
    address:String
})
//create model(class) for that userSchema
const User=mongoose.model('user',userSchema)


//export user model
module.exports=User;