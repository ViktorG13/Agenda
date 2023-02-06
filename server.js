require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: false, useUnifiedTopology: true })
  .then(() => app.emit('done'))
  .catch(err => console.log(err));
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { globalMiddleware, preventCsrfError, setCsrfToken } = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: '1346682466xlsisplkxocpklcça~dpfpaMP´LÇKS56568A]\U\+\00\b\49875d68',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
//! Nossos Middlewares.
app.use(preventCsrfError);
app.use(setCsrfToken);
app.use(globalMiddleware);
app.use(routes);

app.on('done', () => {
  app.listen(5500, () => {
    console.log('Acessar http://localhost:5500');
  });
});
