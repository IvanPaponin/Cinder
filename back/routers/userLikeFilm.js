const { Router } = require('express');
const router = Router();
const Like = require('../models/like');
const SuperLike = require('../models/superlike');
const Viewed = require('../models/viewed');


router.get('/superlikedFilm', async (req, res)=>{
  console.log('sssssss');
  const result = await SuperLike.find({id:req.session.user.id});
  console.log(result);
   res.json(result);

})

router.post('/superlikedFilm', async (req, res) => {
  let newArr = [];
  const result = req.body;
  console.log(req.session.user.id);
  console.log(req.body);
  newArr.push(result);


await SuperLike.create({
    id: req.session.user.id,
    movie: newArr,

  })





  res.json(result);









})


router.get('/likedFilm', async (req, res)=>{
  const result = await Like.find({id:req.session.user.id});
  
  
   res.json(result);

})

router.post('/likedFilm', async (req, res) => {
  let newArr = [];
  const result = req.body;
  console.log(req.session.user.id);
  console.log(req.body);
  newArr.push(result);
  
  
 
   let newLikesFilms = await Like.create({
      id: req.session.user.id,
      movie: newArr,

    })
  res.json(result);
})
router.post('/view/superlike',async(req,res)=>{
  await SuperLike.findByIdAndDelete({_id:req.body._id});
  await Viewed.create({
    id: req.body.id,
    movie: req.body.movie,
  })

  res.json(req.body);

})
router.post('/view/like',async(req,res)=>{
  await Like.findByIdAndDelete({_id:req.body._id});
  await SuperLike.create({
    id: req.body.id,
    movie: req.body.movie,
  })

  res.json(req.body);

})


router.get('/view', async(req,res)=>{
  let result = await Viewed.find();
  if(result){

    res.json(result);
  }
  else res.json('')
})


module.exports = router;
