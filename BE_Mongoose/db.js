const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/testdb')
.then(()=>console.log("DB connection success"))
.catch((err)=>console.log("error occured",err))

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    email:String,
    age:Number
})

const User = mongoose.model('user',userSchema)

module.exports = User