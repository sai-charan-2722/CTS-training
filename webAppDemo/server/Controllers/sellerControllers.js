
const Seller=require('../Models/Seller')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')



//Create new Seller
const createSeller = async (req, res) => {

    //check for existing seller with same username
       let existingSeller = await Seller.findOne({ username: req.body.username })
   
       //if seller already existed
       if (existingSeller !== null) {
           return res.status(201).send({ message: "seller already existed" })
       }
       //if seller not existed
       else {
           //hash the password
           const hashedPassword = await bcryptjs.hash(req.body.password, 6)
           //replace plain password with hashed password
           req.body.password = hashedPassword;
           const newSeller = await Seller.create(req.body)
           res.status(201).send({ message: "Seller created", payload: newSeller })
       }
   }

   //Seller login
const loginSeller = async (req, res) => {
    //get seller credentials object from req
    const sellerCredentials = req.body;
    //check  sellername
    let seller = await Seller.findOne({ username: sellerCredentials.username })
    //if invalid username
    if (seller === null) {
        return res.status(200).send({ message: "Invalid username" })
    }
    //if sellername is found
    else {
        //compare passwords
        const result = await bcryptjs.compare(sellerCredentials.password, seller.password)
        //if passwords are not matched
        if (result === false) {
            return res.status(200).send({ message: "Invalid Password" })
        }
        //if passwords are matched
        else {
            //create a jwt  token and sign
            const signedToken = jwt.sign({ username: seller.username }, process.env.SECRET_KEY, { expiresIn:'1d' })
            //send token to client
            res.status(200).send({ message: "login successs", token: signedToken, seller: seller})
        }
    }
}



   module.exports={createSeller,loginSeller}