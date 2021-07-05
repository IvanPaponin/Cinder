const { Router } = require('express');
// const fs = require('fs');
const upload = require('../controlers/uploaders');
const User = require('../models/user');
const Images = require('../models/images');
const router = Router();
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
      console.log('------------>'),
      file.fieldname + "-" + date + path.extname(file.originalname)
    );
  },
});

const uploadOne = multer({
  storage: storage,
  limits: { fileSize: 100000000000 },
}).single("file");


// app.post("/fotos", (req, res) => {
//   try {
//     // console.log(req.user.id);
//     let imagePath = "abc";
//     uploadOne(req, res, (err) => {
//       if (err) {
//         res.status(300).send(err);
//         console.log(err);
//       } else {
//         if (req.file == undefined) {
//           res.status(301).send("image upload failed.");
//         } else {
//           const user = await User.findById(req.session.user.id);
//           const image = await Images.create({ filename });




//         }
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });




























// // const {promisify}= require('util');
// // const pipeline = promisify(require('stream').pipeline)

// const date = moment().format('DDMMYYYY-HHmmss_SSS')


// async function addToDb(file, userId) {
//   const user = await User.findById(userId);

//     const filename = file.name;

//     const image = await Images.create({ filename });
//     console.log('----->');
//     user.profileFotos?.unshift(image);
//     await user.save();
//   }

// router.post('/fotos', upload.single('file'), async (req, res)=>{



// addToDb(req.files.file,'60d74958b07f65f73efdce08')

// if(file.detectedFileExtension != '.jpg') next(new Error('invalid file type'));
// const fileName = req.files.file.name+ date + file.detectedFileExtension;
// await pipeline(file.stream, fs.createWriteStream(`${__dirname}/./uploads/${fileName}`))


// const filename = req.files.file.file;
// console.log(req.files.path);
// console.log(filename);














module.exports = router;



// const { Router } = require('express');
// const fs = require('fs');
// const deleteFileCallback = require('../controllers/deleteFile');
// const Images = require('../db/images');
// const User = require('../db/user');
// const { upload } = require('../controllers/uploaders');
// const protection = require('../controllers/protection');
// async function addToDb(files, userId) {
//   const user = await User.findById(userId);
//   for (let i = 0; i < files.length; i++) {
//     const filename = files[i].filename;
//     const image = await Images.create({ filename });
//     user.gallery?.unshift(image);
//     await user.save();
//   }
// }
// const router = Router();
// router
//   .route('/')
//   .get(protection, async (req, res) => {
//     const user = await User.findById(req.session?.user?._id).populate(
//       'gallery'
//     );
//     // console.log(user);
//     const userImages = user.gallery.map((el) => el.filename);
//     res.render('profile', { userImages });
//   })
//   .post(protection, (req, res) => {
//     upload(req, res, (err) => {
//       // console.log(req.files);
//       if (err) {
//         return res.render('profile', { msg: err });
//       } else {
//         if (!req.files) {
//           return res.render('profile', {
//             msg: 'Error: No File Selected!',
//           });
//         }
//         addToDb(req.files, req.session?.user?._id);
//         res.json(req.files);
//       }
//     });
//   })
//   .delete(protection, async (req, res) => {
//     try {
//       let user = await User.findById(req.session?.user?._id).populate(
//         'gallery'
//       );
//       const img = req.body.filename;
//       // console.log(req.body);
//       user.gallery = user.gallery.filter((el) => el.filename !== img);
//       // console.log(user.gallery);
//       await user.save();
//       await Images.deleteOne(req.body);
//       fs.unlink(`./public/uploads/${img}`, deleteFileCallback);
//     } catch (error) {
//       console.dir(error);
//       return res.statusCode(500);
//     }
//     res.end();
//   });

