const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const pagesRouter = require('./routes/pages')

const app = express();
const port = process.env.PORT || 3000;

const mongo = process.env.MONGODB || 'mongodb://127.0.0.1:27017/minhas-series';
mongoose.Promise = global.Promise;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', pagesRouter);

mongoose
  .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
  })
  .catch( error => {
    console.log(error);
  });
