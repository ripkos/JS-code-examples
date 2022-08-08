const express = require('express');
const router = express.Router();

const buyApiController = require('../../api/BuyAPI');

router.get('/', buyApiController.getBuys);
router.get('/:buy_id',buyApiController.getBuyById);
router.post('/', buyApiController.createBuy);
router.put('/:buy_id',buyApiController.updateBuy);
router.delete("/:buy_id",buyApiController.deleteBuy);

module.exports = router;