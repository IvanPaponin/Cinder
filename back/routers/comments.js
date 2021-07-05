const { Router } = require('express');
const User = require('../models/user');
const Film = require('../models/film');
const router = Router();

router.post('/comments', async (req, res) => {
  console.log(req.body);
  const {user, comment, date, film} = req.body;
  const currUser = await User.findById(req.session.user.id)
  const currFilm = await Film.findOne({idKP: film})

  const filmComment = {
    user: currUser.username,
    date: new Date().toLocaleString(),
    comment: comment,
  }
  const userComment = {
    date: new Date().toLocaleString(),
    comment: comment,
    film: currFilm.title,
  }
  currUser.comments.push(userComment);
  currUser.save();
  currFilm.comments.push(filmComment);
  currFilm.save();
  res.json(filmComment);
});

router.get('/comments/:id', async (req, res)=> {
  const film = await Film.findOne({idKP: req.params.id})
  res.json(film.comments)
})

// router.get('/usercomments', async (req, res)=> {
//   const user = await User.findById(req.session.user.id)
//   res.json(user.comments)
// })

module.exports = router;
