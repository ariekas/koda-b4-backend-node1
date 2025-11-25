const express = require('express')
const  productController = require('../controllers/product.controller')
const router = express.Router()

router.get("/", productController.listProducts)
router.post("/", productController.CreateProduct)
router.patch("/:id", productController.EditProduct)
router.get("/:id", productController.detailProduct)

module.exports = router