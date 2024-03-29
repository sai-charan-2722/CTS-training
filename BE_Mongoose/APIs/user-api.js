const exp = require('express')
const userApp = exp.Router()

const expressAsyncHandler = require('express-async-handler')

const {getUsers,getUserByUsername,createUser,updateUser,deleteUser} = require('../controllers/user-controller')

userApp.get('/users',expressAsyncHandler(getUsers))
userApp.get('/users/:username',expressAsyncHandler(getUserByUsername))
userApp.post('/user',expressAsyncHandler(createUser))
userApp.put('/user',expressAsyncHandler(updateUser))
userApp.delete('/users/:username',expressAsyncHandler(deleteUser))



module.exports = userApp