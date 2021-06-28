const express = require('express');
const session = require('express-session');
const passport = require ('passport');
const MongoStore = require('connect-mongo');
const path = require('path');
const User = require('./models/user');
const { connect } = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
require ('./passport-setup');
const multer = require('multer');
const storage = require('./controlers/uploaders')

const PORT = process.env.PORT ?? 8080;
const DB_CONNECT = process.env.DB_CONNECT;


const testRouter = require('./routers/test');
const authRouter = require('./routers/auth');
const fotosRouter = require('./routers/foto');
const compilationRouter = require('./routers/compilation');


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
  
 
app.listen(PORT, () => {
  console.log('server started!');
  connect(
    DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('BASE is OK!!!')
  );
});
