const multer = require('multer');
const moment = require('moment');
const path = require('path');


const storage = multer.diskStorage({
  destination(req,file, cb){
    cb(null,'./uploads/')
  },
  filename(req,file,cb){
    const date = moment().format('DDMMYYYY-HHmmss_SSS')
    cb(null,`${date}-${file.originalname}`)
  }
})

const fileFilter =()=>{
  const fileTypes = /jpeg|jpg|png|gif/;
  
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }

}
const limits ={
  fileSize:1024*1024*100
}

let upload = multer({ storage,fileFilter, limits})
module.exports = upload;
