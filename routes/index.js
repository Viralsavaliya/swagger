const express = require('express');
const router = express.Router();
const user = require("./user")
const Products = require("./product")


router.use('/user',user);

router.use('/products',Products)

module.exports = router
