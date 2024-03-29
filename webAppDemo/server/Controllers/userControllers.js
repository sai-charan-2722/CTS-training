//import user model
const User=require('../Models/User')
const Seller=require('../Models/Seller')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')


const getUsers = async (req, res) => {
    const usersList = await User.find()
    res.status(200).send({ message: "users", payload: usersList })
}



const getUserByUsername = async (req, res) => {
    const user = await User.find({ username: username })
    res.status(200).send({ message: "user found", payload: user })

}


//Create new User
const createUser = async (req, res) => {

 //check for existing user with same username
    let existingUser = await User.findOne({ username: req.body.username })

    //if user already existed
    if (existingUser !== null) {
        return res.status(201).send({ message: "user already existed" })
    }
    //if user not existed
    else {
        //hash the password
        const hashedPassword = await bcryptjs.hash(req.body.password, 6)
        //replace plain password with hashed password
        req.body.password = hashedPassword;
        const newUser = await User.create(req.body)
        res.status(201).send({ message: "User created", payload: newUser })
    }
}


   
//User login
const loginUser = async (req, res) => {
    //get user credentials object from req
    const userCredentials = req.body;
    //check  username
    let user = await User.findOne({ username: userCredentials.username })
    //if invalid username
    if (user === null) {
        return res.status(200).send({ message: "Invalid username" })
    }
    //if username is found
    else {
        //compare passwords
        const result = await bcryptjs.compare(userCredentials.password, user.password)
        //if passwords are not matched
        if (result === false) {
            return res.status(200).send({ message: "Invalid Password" })
        }
        //if passwords are matched
        else {
            //create a jwt  token and sign
            const signedToken = jwt.sign({ username: user.username }, process.env.SECRET_KEY, { expiresIn:'1d' })
            //send token to client
            res.status(200).send({ message: "login successs", token: signedToken, user: user})
        }
    }
}




const updateUser = async (req, res) => {
    let user = await User.findOneAndUpdate({ username: req.body.username }, { ...req.body })
    res.status(200).send({ message: "user updated", payload: user })

}

const removeUser = (req, res) => {
    res.send({ message: "user removed" })
}

module.exports = { getUsers, getUserByUsername, createUser,loginUser, updateUser, removeUser }