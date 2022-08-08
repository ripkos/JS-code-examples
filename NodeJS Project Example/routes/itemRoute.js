const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
router.get('/', itemController.showItemList);
router.get('/add', itemController.showItemAdd);
router.get('/details/:itemID', itemController.showItemDetail);
router.get('/modify/:itemID', itemController.showItemModify);
module.exports = router;