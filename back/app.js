const express = require('express');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const path = require('path');
const User = require('./models/user');
const { connect } = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const multer = require('multer');
const storage = require('./controlers/uploaders')
require('./passport-setup');

const PORT = process.env.PORT ?? 8080;
const DB_CONNECT = process.env.DB_CONNECT;


const testRouter = require('./routers/test');
const authRouter = require('./routers/auth');
const fotosRouter = require('./routers/foto');
const compilationRouter = require('./routers/compilation');
const userLikesFilmRouter = require('./routers/userLikeFilm');
const commentsRouter = require('./routers/comments');


const app = express();

app.use(
  session({
    secret: 'kukuruza_v_banke',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 60000 * 60,
    },
    store: MongoStore.create({ mongoUrl: DB_CONNECT }),
  })
)
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('dev'));
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload())
app.use('/uploads', express.static('uploads'))

app.use('/api/v1/auth', authRouter);
app.use('/api/v1', testRouter);
app.use('/api/v1', fotosRouter);
app.use('/api/v1', compilationRouter);
app.use('/api/v1', commentsRouter);
app.use('/api/v1/user', userLikesFilmRouter);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { successRedirect: 'http://localhost:3000/login/success', failureRedirect: 'http://localhost:3000/login' }),
  function (req, res) {
    res.send(req.user);
  });


isUserAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).send("Войдите или зарегистрируйтесь");
  }
};

app.get('/auth/user', isUserAuthenticated, (req, res) => {
  res.json(req.user)
})
  
 
app.listen(PORT, () => {
  connect(
    DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('BASE is OK!!!')
  );
});
