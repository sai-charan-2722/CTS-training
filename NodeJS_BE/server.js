// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.method === "GET") {
//         res.end("this is GET res")
//         if (req.url === "/users") {
//             res.end("this is users data")
//         }
//     }
//     if (req.method === 'POST') {
//         res.end("this is POST res")
//     }
//     if (req.method === 'PUT') {
//         res.end("this is PUT res")
//     }
//     if (req.method === 'DELETE') {
//         res.end("this is DELETE res")
//     }


// })

// server.listen(4000, () => { console.log("server has started at 4000 port") })



// express



const exp = require('express')
const app = exp()

app.use(exp.json())

const mc = require('mongodb').MongoClient
mc.connect('mongodb://127.0.0.1:27017')
.then((client)=>{
    const dbObj = client.db('mydb')
    const usersCollection = dbObj.collection('users')
    app.set('usersCollection',usersCollection)
    console.log("DB connection success")
})
.catch((err)=>{
    console.log("err in db connection",err)
})


const userApi = require('./APIs/userApi')
app.use('/user-api',userApi)


function errorHandler(err,req,res,next){
    res.send({Message:"error occured",payload:err.message})
}
app.use(errorHandler)
const port = process.env.PORT;
app.listen(port,()=>{console.log(`server started at ${port} port`)})