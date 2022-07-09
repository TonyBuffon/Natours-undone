const express = require('express');

const userController = require('../controllers/userController');
const router = express.Router();
const authController = require('../controllers/authController');


router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotpassword', authController.forgetPassword)
router.patch('/resetpassword/:token', authController.resetPassword)

// Protect all of routes after this middleware

router.use(authController.protect)
router.patch('/updateme', userController.uploadUserPhoto, userController.resizeUserPhoto, userController.updateMe)
router.delete('/deleteMe', userController.deleteMe)
router.get('/me', userController.getMe, userController.getUser)
router.get('/logout', authController.logout)

router.use(authController.restrictTo('admin'))

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);



router
  .route('/:id')
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.editUser);

module.exports = router;
