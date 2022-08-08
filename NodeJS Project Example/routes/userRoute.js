const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.get('/', userController.showUserList);
router.get('/add', userController.showUserAdd);
router.get('/details/:userID', userController.showUserDetail);
router.get('/modify/:userID', userController.showUserModify);
module.exports = router;