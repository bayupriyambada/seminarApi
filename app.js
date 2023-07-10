const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// router
const categoriesRouter = require("./app/api/v1/categories/router")
const imagesRouter = require("./app/api/v1/images/router")

const v1 = '/api/v1/cms';
const notFoundMiddleware = require('./app/Validators/Middlewares/NotFound')
const handleErrorMiddleware = require('./app/Validators/Middlewares/handlerError')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use(v1, categoriesRouter)
app.use(v1, imagesRouter)
app.use(notFoundMiddleware)
app.use(handleErrorMiddleware)

module.exports = app;
