const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String
    },
    price: {
        type: String
    }
},{
    timestamps:true
})


const products = mongoose.model('product',productSchema);

module.exports = products;