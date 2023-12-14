const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        // min: 0,
        min: [0, "El valor no puede ser menor de 0"] // mensaje personalizado en caso de error.
    },
    description: {
        type: String,
        required: true,
    },
    size: {
        type: [String],
        enum: ['S', 'M', 'L', 'XL'],
        default: ['S', 'M', 'L', 'XL']
    },
    colors: {
        type: [String],
        validate: [arrayMinLength, "Debe de tener un color como minimo"]
    },
    brand: {
        type: String
    }
})

function arrayMinLength(arr){
    return arr.length > 0
}

const Product = mongoose.model("Product", productSchema, "products")

module.exports = Product