//  IMPORT MODULES
const AppError = require('./../utils/appError')
// CREATING DB ERROR HANDLERS
const handleCastErrorDB = err => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
};

const handleDuplicateFieldsDB = err => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]
    const message = `Duplicate field value: ${value}. Please use another value`
    return new AppError(message, 400)
}

const handleValidationErrorDB = err => {
    const errors = Object.values(err.errors).map(el => el.message)

    const message = `Invalid input data. ${errors.join('. ')}`
    return new AppError(message, 400)
}

const handleJWTError = err => new AppError('Invalid token. Please log in again', 401)
const handleJWTExpiredError = err => new AppError('Your token has expired! Please log in again.', 401)
// CREATING ERROR RES
const sendErrorDev = (err, req, res) => {
    // API
    if (req.originalUrl.startsWith('/api')) {
        return res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        })
    }
    //  Rendered Website
    console.error('ERROR', err)
    res.status(err.statusCode).render('error', {
        title: 'Something went wrong!',
        msg: err.message
    })

}
const sendErrorProd = (err, req, res) => {
    // A) API
    if (req.originalUrl.startsWith('/api')) {
        // Operational, trusted error: send message to client
        if (err.isOperational) {
            return res.status(err.statusCode).json({
                status: err.status,
                msg: err.message
            });

            // Programming or other unknown error: don't leak error details
        }
        // 1) Log error
        console.error('ERROR 💥', err);

        // 2) Send generic message
        return res.status(500).json({
            status: 'error',
            msg: 'Something went wrong'
        });

    }
    // B) Rendered Website
    if (err.isOperational) {
        console.log(err);
        return res.status(err.statusCode).render('error', {
            title: 'Something went wrong!',
            msg: err.message
        })

        // Programming or other unknown error: don't leak error details
    }
    // 1) Log error
    console.error('ERROR 💥', err);

    // 2) Send generic message
    return res.status(err.statusCode).render('error', {
        title: 'Something went wrong!',
        msg: 'Please try again later.'
    })


};

// EXPORTS THE ERROR HANDLED MESSAGES
module.exports = (err, req, res, next) => {
    // console.log(err.stack);

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, req, res);
    } else if (process.env.NODE_ENV === 'production') {
        let error = { ...err };

        error.message = err.message

        if (err.name === 'CastError') {
            error = handleCastErrorDB(error)
        }
        if (err.code === 11000) { error = handleDuplicateFieldsDB(err) }
        if (err.name === 'ValidationError') { error = handleValidationErrorDB(error) }
        if (err.name === 'JsonWebTokenError') { error = handleJWTError(error) }
        if (err.name === 'TokenExpiredError') { error = handleJWTExpiredError(error) }
        sendErrorProd(error, req, res);
    }
};
