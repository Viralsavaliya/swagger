const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema ({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
    },
    age: {
        type: Number,
    },
    address: {
        type: String,
    },
    image: {
        type: String
    }
},{
    timestamps:true
})

const user = mongoose.model('user',userSchema);

module.exports = user;