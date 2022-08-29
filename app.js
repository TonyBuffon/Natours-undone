// NPM MODULES
const express = require('express');
const morgan = require('morgan');
const rateLimiter = require('express-rate-limit')
const helmet = require('helmet')
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const path = require('path')
const pug = require('pug')
const cookieParser = require('cookie-parser')
const cors = require("cors")
// DEV MODUELS
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController')
const reviewRouter = require('./routes/reviewRoutes')
const viewRouter = require('./routes/viewRoutes')
const bookingRouter = require('./routes/bookingRoutes')

// Intialize the app with Express
const app = express();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// GLOBAL MiddleWares:

//  => Serving static files

// app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors())

// => Set security HTTP HEADERS
app.use(helmet())

// => Development logging

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// => Limit requests from same API

const limiter = rateLimiter({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, Please try again in an hour'
})

app.use('/api', limiter)

// => Body Parser , reading data from body into req.body

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser())

// Data sanitization against NoSQL query injection

app.use(mongoSanitize())

// Data sanitization against XSS

app.use(xss())

// Pervent parameter polution

app.use(hpp({
  whitelist: [
    'duration', 'ratingsAverage', 'ratingsQuantity', 'maxGroupSize', 'difficulty', 'price'
  ]
}))

//  Test MiddleWare

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies)
  next();
});


// The Routes
app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/booking', bookingRouter);



app.all('*', (req, res, next) => {

  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.status = 'fail';
  // err.statusCode = 404;

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler)

module.exports = app;
