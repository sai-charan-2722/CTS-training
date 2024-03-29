const exp = require('express')
const userApp = exp.Router()

const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const cloudinaryStorage = require('cloudinary-multer')
require('dotenv').config()
const expressAsyncHandler = require('express-async-handler')


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})

const storage = cloudinaryStorage({cloudinary:cloudinary})

const upload = multer({storage:storage})

const verifyToken = require('../middlewares/verifyToken');
const verifyDuplicateUser = require('../middlewares/verifyDuplicateUser')
const {getUsers,getUserByUsername,postUserReg,postUserLog,updateUser,delUser} = require('../controllers/userControllers')


//users=[{id:101,name:'sai'},{id:201,name:'charan'},{id:301,name:"yadav"}]
let usersCollection;
userApp.use((req,res,next)=>{
    usersCollection = req.app.get('usersCollection')
    next()
})

userApp.get('/users',expressAsyncHandler(getUsers))

userApp.get('/users/:username',expressAsyncHandler(getUserByUsername))

userApp.post('/user',upload.single('image'),expressAsyncHandler(postUserReg))


userApp.post('/user-login',expressAsyncHandler(postUserLog))

userApp.get('/protected',verifyToken, (req,res)=>{
    //console.log(req.headers)
    res.status(200).send({message:"this res is from protected route"})
})

userApp.put('/user',expressAsyncHandler(updateUser))

userApp.delete('/user/:username',expressAsyncHandler(delUser))

module.exports = userApp;