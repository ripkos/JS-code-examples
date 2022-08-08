var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit().catch(err => {
  console.log(err);
});

var indexRouter = require('./routes/index');
var buyRouter = require('./routes/buyRoute');
var itemRouter = require('./routes/itemRoute');
var userRouter = require('./routes/userRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/items', itemRouter);
app.use('/buys', buyRouter);
app.use('/users', userRouter);

const userApiRouter = require('./routes/api/UserApiRoute');
app.use('/api/users', userApiRouter);
const itemApiRouter = require('./routes/api/ItemApiRoute');
app.use('/api/items', itemApiRouter);
const buyApiRouter = require('./routes/api/BuyApiRoute');
app.use('/api/buys', buyApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err.message)
  // render the error page
  res.status(err.status || 500);
  res.render('error',{ navLocation: 'main' });
});

module.exports = app;
