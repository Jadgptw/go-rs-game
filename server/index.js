const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const scoreRouter = require('./score-router');

mongoose.connect(process.env.MONGODB_URL);

const app = express();

app.use(express.static('dist/'));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/scoredb', scoreRouter);

app.listen(process.env.GORSGAMEPORT);
