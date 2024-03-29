const mongoose=require('mongoose')
//create user Schema
const sellerSchema=new mongoose.Schema({
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
    companyName:String
})
//create model(class) for that sellerSchema
const Seller=mongoose.model('seller',sellerSchema)


//export user model
module.exports=Seller;