const { delProdColor, deleteProduct, updateProduct, createProduct, getProductById, getProducts } = require('../controllers/productControlers')

const router = require('express').Router()

router.get('/', getProducts)
router.get('/:idProduct', getProductById)
router.post('/', createProduct)
router.patch('/:idProduct', updateProduct)
router.delete('/:idProduct', deleteProduct)

router.patch('/:idProduct/:color', delProdColor)

module.exports = router