const User = require('../db')

const getUsers = async (req,res)=>{
    let userList = await User.find()
    res.status(200).send({message:"all users",payload:userList})
}

const getUserByUsername = async (req,res)=>{
    let username = req.params.username;
    let user = await User.find({username:username})
    if(user.length!==0){
        res.status(200).send({message:'user found',payload:user})
    }else{
        res.send({message:'user not found'})
    }
}

const createUser = async (req,res)=>{
    //let user = await User.create(req.body)
    let userDocument = new User(req.body)
    let user = await userDocument.save()

    res.status(200).send({message:'user created',payload:user})
}

const updateUser = async (req,res)=>{
    let updatedUser = await User.findOneAndUpdate({username:req.body.username},req.body)
    res.status(200).send({message:'user updated',payload:updatedUser})
}

const deleteUser = async (req,res)=>{
    let username = req.params.username
    let deletedUser = await User.findOneAndDelete({username:username})
    res.send({message:'user deleted',payload:deletedUser})
}


module.exports = {getUsers,getUserByUsername,createUser,updateUser,deleteUser}