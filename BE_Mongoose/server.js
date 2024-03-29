const exp = require('express')
const app = exp()

require('dotenv').config()


app.use(exp.json())
const userApi = require('./APIs/user-api')
app.use('/user-api',userApi)


app.use((err,req,res,next)=>{
    res.send({message:"error occured",payload:err.message})
})

const port = process.env.PORT || 4000;
app.listen(port,()=>{console.log(`web server started at port ${port}`)})