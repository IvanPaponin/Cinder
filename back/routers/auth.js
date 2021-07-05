const { Router } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = Router();

router.post('/signup', async (req, res) => {
  const checkExistingUsers = await User.findOne({ email: req.body.email });
  
  const { username, password, email } = req.body;
  if (username && password && email && !checkExistingUsers) {
    try {
      const hashPassword = await bcrypt.hash(password, 11)
      const newUser = await User.create({
        username,
        password: hashPassword,
        email,
      })
      req.session.user = {
        id: newUser._id,
        name: newUser.name,
      }
      return res.json(newUser)
    } catch (error) {
      return res.sendStatus(500)
    }
  }
  return res.sendStatus(400)
});

router.post('/signin', async (req, res) => {
  const { password, email } = req.body
  if (password && email) {
    try {
      const currentUser = await User.findOne({ email })
      if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
        req.session.user = {
          id: currentUser._id,
          name: currentUser.name,
        }
        return res.json(currentUser)
      }
      return res.sendStatus(401)
    } catch (error) {
      return res.sendStatus(500)
    }
  }

  return res.sendStatus(400)
});

router.get('/signout', async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500)

    res.clearCookie(req.app.get('cookieName'));

    return res.sendStatus(200)
  })
});

router.post('/userupdate', async (req, res) => {
  const { id, username, userLastName, date, email, nickname, sex } = req.body;
  await User.findByIdAndUpdate(id, {
    username,
    userLastName,
    birthday: date,
    email,
    nickname,
    sex,
  });

  const updatedUser = {
    _id: id,
    username,
    email,
    userLastName,
    birthday: date,
    nickname,
    sex,
  };

  console.log(updatedUser);

  res.json(updatedUser);
});

router.get('/user', async (req, res) => {
  const id = req.session?.user?.id;
  const currentUser = await User.findById(id);
    res.json(currentUser);
});

module.exports = router;
