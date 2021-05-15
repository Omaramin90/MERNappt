const mongoose = require('mongoose')
const port = 3000

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

const config = require('./config');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

MongoClient.connect(`mongodb://${config.dbHost}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(client => {
      const db = client.db(config.dbName);
      const collection = db.collection(config.dbCollection);
      app.locals[config.dbCollection] = collection;
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use((req, res, next) => {
 const collection = req.app.locals[config.dbCollection];
 req.collection = collection;
 next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect('mongodb+srv://omara:testpass@cluster0.efenk.mongodb.net/appointments-app?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        app.listen(port, () => {
            console.log("development server start on port-"+ port)
        })
    }).catch( () =>{
        console.log("Unable to connect to db server")
})

module.exports = app;
