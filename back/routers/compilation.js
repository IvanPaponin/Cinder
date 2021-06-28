const { Router } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = Router();

router.post('/compilation',(req,res)=>{
  console.log(req.body);
})



module.exports = router;
