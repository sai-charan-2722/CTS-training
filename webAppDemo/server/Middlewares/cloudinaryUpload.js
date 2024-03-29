const cloudinary = require('cloudinary').v2
const multer = require('multer')
require('dotenv').config()
const fs = require('fs')

if(!fs.existsSync('./uploads')){
    fs.mkdirSync('./uploads');
}

cloudinary.config({

})

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})

module.exports={upload,cloudinary}