const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getUsers = async (req,res)=>{
    //res.send({message:"all users data",payload:users})
    
    let usersCollection = req.app.get('usersCollection')
    let users = await usersCollection.find().toArray();
    res.status(200).send({message:"All users",payload:users})
}


const getUserByUsername = async (req,res)=>{
    // let id = Number(req.params.id)
    // let user = users.find(userObj=>userObj.id===id)
    // if(user===undefined){
    //     res.send({message:"user not found"})
    // }else{
    //     res.send({message:"user found",payload:user})
    // }

    let usersCollection = req.app.get('usersCollection')
    let username =  req.params.username;
    let user = await usersCollection.findOne({username:username})
    if(user===null){
        res.status(200).send({message:"user not found"})
    }else{
        res.status(200).send({message:"user found",payload:user})
    }
}


const postUserReg = async (req,res)=>{
    // let newUser = req.body;
    // users.push(newUser)
    // res.send({message:"new user created",payload:users})


    // let newUser = req.body;
    // let dbRes = await usersCollection.insertOne(newUser)
    // if(dbRes.acknowledged){
    //     res.status(201).send({message:"new user created"})
    // }else{
    //     res.status(500).send({message:"something went wrong"})
    // }

    let usersCollection = req.app.get('usersCollection')
    let newUser = req.body
    console.log(req.file)
    newUser.imageUrl = req.file.url

    if(!newUser.username || !newUser.password || !newUser.email){
        return res.send({message:"plz provide valid data"})
    }

    let userFromDb = await usersCollection.findOne({username:newUser.username})

    if(userFromDb!==null){
        res.send({message:'user already existed'})
    }else{
        let hashedPassword = await bcryptjs.hash(newUser.password,5)
        newUser.password = hashedPassword
        let dbRes = await usersCollection.insertOne(newUser)

        if(dbRes.acknowledged){
            res.status(201).send({message:"user created",payload:newUser._id})
        }else{
            res.send({message:"something went wrong"})
        }
    }
}

const postUserLog = async (req,res)=>{
    let usersCollection = req.app.get('usersCollection')
    let userCred = req.body
    let userFromDb = await usersCollection.findOne({username:userCred.username})
    if(userFromDb===null){
        res.status(404).send({message:"Invalid username"})
    }else{
        let result = await bcryptjs.compare(userCred.password,userFromDb.password)
        if(result===false){
            res.status(404).send({message:"Invalid password"})
        }else{
            let signedToken = jwt.sign(userCred,process.env.SECRET_KEY,{expiresIn:300})
            res.status(200).send({message:"user logged in",token:signedToken,user:userFromDb})
        }
    }
}


const updateUser = async (req,res)=>{
    //let modifiedUser = req.body;
    // let index = users.findIndex(userObj=>userObj.id===modifiedUser.id)
    // users.splice(index,1,modifiedUser)
    // res.send({message:"user modified",payload:users})

    let usersCollection = req.app.get('usersCollection')
    let modifiedUser = req.body;
    let dbRes = await usersCollection.updateOne({username:modifiedUser.username},{$set:{...modifiedUser}})
    res.status(200).send({message:"User updated"})
}


const delUser = async (req,res)=>{
    // let id = Number(req.params.id)
    // let index = users.findIndex(userObj=>userObj.id===id)
    // if(index!==-1){
    //     users.splice(index,1)
    // } 
    // res.send({message:"user deleted",payload:users})

    let usersCollection = req.app.get('usersCollection')
    let username = req.params.username
    let dbRes = await usersCollection.deleteOne({username:username})
    res.status(200).send({message:"user deleted"})
}
module.exports = {getUsers,getUserByUsername,postUserReg,postUserLog,updateUser,delUser}