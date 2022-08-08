const express = require('express');
const router = express.Router();

const userApiController = require('../../api/UserAPI');

router.get('/', userApiController.getUsers);
router.get('/:user_id',userApiController.getUserById);
router.post('/', userApiController.createUser);
router.put('/:user_id',userApiController.updateUser);
router.delete("/:user_id",userApiController.deleteUser);

module.exports = router;