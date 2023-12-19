const { delProdColor, deleteProduct, updateProduct, createProduct, getProductById, getProducts, upAllPriceByPercent } = require('../controllers/productControlers')

const router = require('express').Router()
router.get('/', getProducts)
router.get('/:idProduct', getProductById)

router.post('/', createProduct)

router.delete('/:idProduct', deleteProduct)

/**
 * @swagger
 * /products/aumentarPrecioPorcentaje:
 *   patch:
 *     summary: Aumentar 20% a todos los productos
 *     description: Puede enviar un porcentaje custom mediante el body anotacion del 1 al 100 para el 20% sería 20.
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               porcent:
 *                 type: float
 *             example:
 *               porcent: 20
 *     responses:
 *       201:
 *         description: Success - Precios aumentados.
 *       400:
 *         description: Error request, verify sended data.
 */
router.patch('/aumentarPrecioPorcentaje', upAllPriceByPercent)
router.patch('/:idProduct', updateProduct)
router.patch('/:idProduct/:color', delProdColor)




module.exports = router