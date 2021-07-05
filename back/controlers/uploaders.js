const multer = require('multer');
const moment = require('moment');
const path = require('path');




const storage = multer.diskStorage({
  //Путь сохранения файла
  destination: "../uploads/",
  filename: function (req, file, cb) {
    const date = moment().format('DDMMYYYY-HHmmss_SSS')
    cb(
      null,
      file.fieldname + "-" + date + path.extname(file.originalname)
    );3
  },
});

const uploadOne = multer({
  storage: storage,
  limits: { fileSize: 100000000000 },
}).single("image"); 
