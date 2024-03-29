async function verifyDuplicateUser(req,res,next){
    let user = req.body;
    console.log(req.body)
    const usersCollection = req.app.get('usersCollection')

    let userFromDb = await usersCollection.findOne({username:user.username})
    if(userFromDb!==null){
        res.status(200).send({message:"user already exists"})
    }else{
        next()
    }
}

module.exports = verifyDuplicateUser;