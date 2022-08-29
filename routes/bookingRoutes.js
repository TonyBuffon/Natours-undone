// IMPORTING NPM MODULES
const express = require('express')

// IMPORTING MY MODULES
const bookingController = require('./../controllers/bookingController')
const authController = require('./../controllers/authController')

const router = express.Router();

router.get('/checkout-session/:tourId', authController.protect,bookingController.getCheckoutSession)


module.exports = router