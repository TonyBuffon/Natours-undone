const express = require('express');

const viewController = require('../controllers/viewController')

const authController = require('../controllers/authController')

const bookingController =require('../controllers/bookingController')

const router = express.Router();


router.route('/').get(bookingController.createBookingCheckout, authController.isLoggedIn, viewController.getOverview)
router.get('/tour/:slug', authController.isLoggedIn, viewController.getTour);
router.route('/login').get(authController.isLoggedIn, viewController.getLoginForm)
router.route('/signup').get(viewController.getSignupForm)
router.route('/me').get(authController.protect, viewController.getMe)

router.post('/submit-user-data', authController.protect, viewController.updateUserData)

module.exports = router