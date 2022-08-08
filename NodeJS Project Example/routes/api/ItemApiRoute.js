const express = require('express');
const router = express.Router();

const itemApiController = require('../../api/ItemAPI');

router.get('/', itemApiController.getItems);
router.get('/:item_id',itemApiController.getItemById);
router.post('/', itemApiController.createItem);
router.put('/:item_id',itemApiController.updateItem);
router.delete("/:item_id",itemApiController.deleteItem);

module.exports = router;