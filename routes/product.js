const express = require('express');
const router = express.Router();

const prodctsController = require('../controllers/productsController')

router.get('/', prodctsController.getAllproduct)
router.get('/:id',prodctsController.getProductByID)
router.post('/',prodctsController.createProduct)
router.put('/:id',prodctsController.updateProduct)
router.delete('/:id',prodctsController.deleteProduct)
router.get('/', prodctsController.getAllproduct)
router.get('/:id',prodctsController.getProductByID)
router.post('/',prodctsController.createProduct)
router.put('/:id',prodctsController.updateProduct)
router.delete('/:id',prodctsController.deleteProduct)


module.exports = router