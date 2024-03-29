const jwt = require('jsonwebtoken')
require('dotenv').config()

function verifyToken(req,res,next){
    let bearerToken = req.headers.authorization;
    if(bearerToken){
        let token = bearerToken.split(' ')[1];
        let decodedToken = jwt.verify(token,process.env.SECRET_KEY)
        next()
    }else{
        res.send({message:"Unauthorized access"})
    }
}

module.exports = verifyToken;