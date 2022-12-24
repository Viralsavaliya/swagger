const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

router.get('/',userController.getAllUser)
router.post('/',userController.addNewUser)
router.put('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)

module.exports = router