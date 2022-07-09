// IMPORTING NPM MODULES
const express = require('express')
const router = express.Router({ mergeParams: true });

// IMPORTING MY MODULES
const reviewController = require('./../controllers/reviewController')
const authController = require('./../controllers/authController')

// Protect all of routes after this middleware

router.use(authController.protect)

router.route('/')
    .get(reviewController.getAllReviews)
    .post(reviewController.setTourAndUserIds, authController.restrictTo('user'), reviewController.createReview)

router.route('/:id').delete(authController.restrictTo('user', 'admin'), reviewController.deleteReview).patch(authController.restrictTo('user', 'admin'), reviewController.editReview).get(reviewController.getReview)
module.exports = router