var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const UserRouter  = require('./routes/admin/UserRouter')
const ArticleRouter = require('./routes/admin/ArticleRouter')
const WebArticleRouter = require('./routes/web/WebArticleRouter')
const TagRouter = require('./routes/admin/TagRouter')
const WebTagRouter = require('./routes/web/WebTagRouter')
const FriendRouter = require('./routes/admin/FriendRouter')
const WebFriendRouter = require('./routes/web/WebFriendRouter')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/', UserRouter);
app.use('/',ArticleRouter)
app.use('/', WebArticleRouter);
app.use('/',TagRouter)
app.use('/',WebTagRouter)
app.use('/',FriendRouter)
app.use('/',WebFriendRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
