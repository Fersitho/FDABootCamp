const Product = require("../models/productModels")

const getProducts = async (req, res) => {
    try {
        const data = await Product.find()
        res.status(200).json({ status: "succeeded", data, error: null })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            data: null,
            error: "Error fetching products: " + error
        })
    }
}

const getProductById = async (req, res) => {
    try {
        const { idProduct } = req.params
        const data = await Product.findById(idProduct)
        res.status(200).json({ status: "succeeded", data, error: null })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            data: null,
            error: "Error fetching products: " + error,
        })
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price, description, size, colors, brand } = req.body
        const newUser = new Product({
            name,
            price,
            description,
            size,
            colors,
            brand,
        })

        await newUser.save()
        res.status(200).json({ status: "succeeded", message: "Producto creado", error: null })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            data: null,
            error: "Error adding product: " + error,
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { name, price, description, size, colors, brand } = req.body

        const product = await Product.findById(req.params.idProduct)

        if (!product) {
            return res.status(404).send("El producto no existe")
        }

        if (name) {
            product.name = name
        }

        if (price) {
            product.price = price
        }

        if (description) {
            product.description = description
        }

        if (size) {
            product.size = size
        }

        if (colors) {
            product.colors = colors
        }

        if (brand) {
            product.brand = brand
        }

        await product.save()

        res.status(200).json({ status: "succeeded", message: "Producto editado", error: null })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            data: null,
            error: "Error fetching products: " + error,
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.idProduct)

        if (data != null) {
            res.status(200).json({ status: "succeeded", message: "Producto borrado", error: null })
        } else {
            res.status(404).json({ status: "falied", message: "El Producto no existe", error: null })
        }

    } catch (error) {
        res.status(500).json({
            status: "failed",
            data: null,
            error: "Error deleting products: " + error,
        })
    }
}

// tools products
const getMediaProduct = async (req, res) => {
    try {
        const averagePrice = await Product.aggregate([
            {
                $group: {
                    _id: null,
                    average: { $avg: "$price" },
                },
            },
            {
                $project: {
                    _id: 0,
                    averagePrice: "$average",
                },
            },
        ])
        // const averagePrice = await Product.aggregate([
        //   {
        //     $group: {
        //       _id: "$brand",
        //       average: { $avg: "$price" },
        //     },
        //   },
        //   {
        //     $project: {
        //       _id: 0, // Excluye el campo _id del resultado
        //       marca: "$_id", // Renombra _id a 'marca'
        //       average: 1, // Incluye el campo 'mediaPrecio'
        //     },
        //   },
        // ])

        res.status(200).json({ status: "succeeded", data: averagePrice, error: null })
    } catch (error) {
        res.status(500).json({ status: "failed", data: null, error: error.message })
    }
}
const delProdColor = async (req, res) => {
    try {
        const { idProduct, color } = req.params
        const productLoadToEdt = await Product.findById(idProduct)

        if (productLoadToEdt) {
            productLoadToEdt.colors = productLoadToEdt.colors.filter(
                (coloh) => coloh !== color
            )

            await productLoadToEdt.save()
            res.status(200).json({
                status: "succeeded",
                message: "Color eliminado del product",
                data: productLoadToEdt,
                error: null,
            })
        } else {
            res.status(404).json({
                status: "succeeded",
                data: null,
                error: "No existe el product",
            })
        }
    } catch (error) {
        res.status(500).json({ status: "failed", data: null, error: error.message })
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,

    getMediaProduct,
    delProdColor,
}

// const deleteColorByProductId = async (req, res) => {
//     try {
//       const productId = req.params.id // Obtiene el ID del producto de la solicitud
//       const colorToDelete = req.params.color // Obtiene el color a eliminar de la solicitud

//       const product = await Product.findById(productId) // Encuentra el producto por su ID

//       if (!product) {
//         return res.status(404).json({
//           status: "Error",
//           message: "Producto no encontrado", // Si el producto no existe, devuelve un mensaje de error
//         })
//       }

//       const colors = product.colors // Obtiene la lista de colores del producto

//       const indexOfColor = colors.indexOf(colorToDelete) // Obtiene el índice del color a eliminar en la lista de colores

//       if (indexOfColor === -1) {
//         return res.status(404).json({
//           status: "Error",
//           message: "Color no encontrado en el producto", // Si el color no está en la lista, devuelve un mensaje de error
//         })
//       }

//       colors.slice(indexOfColor, 1) // Elimina el color específico de la lista (error aquí, debería ser colors.splice en lugar de colors.slice)
//       await product.save() // Guarda los cambios en el producto (no se reflejarán correctamente debido al error anterior)

//       res.status(200).json({
//         status: "Success",
//         message: "Color eliminado del producto exitosamente",
//         remainingColors: colors, // Devuelve la lista de colores restantes
//       })
//     } catch (error) {
//       res.status(400).json({
//         status: "Error",
//         message: "No se pudo eliminar el color del producto",
//         error: error.message, // Si ocurre un error durante el proceso, devuelve un mensaje de error
//       })
//     }
//   }
