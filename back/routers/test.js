const { Router } = require('express');
const Test = require('../models/test');
const router = Router();
const User = require('../models/user');


router.get('/test', async (req, res)=>{
  console.log('sasasasasasasa');
  const test = await Test.findOne();
  console.log(test);
   res.json(test);

  
})

router.post('/userupdate', async (req,res)=>{
  console.log(req.body);
let {id, username, userLastName, date, email,  nickname, sex} = req.body;
let userName = await User.findByIdAndUpdate(id, {username:username}, );
let userLast = await User.findByIdAndUpdate(id, {userLastName:userLastName}, );
let userDate = await User.findByIdAndUpdate(id, {birthday:date}, );
let emailUser = await User.findByIdAndUpdate(id, {email:email}, );
let userLniast = await User.findByIdAndUpdate(id, {nickname:nickname}, );
let fdd = await User.findByIdAndUpdate(id, {sex:sex}, );



 })


module.exports = router;
