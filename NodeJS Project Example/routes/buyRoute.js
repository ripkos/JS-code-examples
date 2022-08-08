const express = require('express');
const router = express.Router();
const buyController = require('../controllers/buyController');
router.get('/', buyController.showBuyList);
router.get('/add', buyController.showBuyAdd);
router.get('/details/:buyID', buyController.showBuyDetail);
router.get('/modify/:buyID', buyController.showBuyModify);
module.exports = router;