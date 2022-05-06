const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema ({
    user_id : {
        type : String,
        require : true,
        trim : true
    },
    email : {
        type : String,
        require : true,
        trim : true 
    }
})

const Order =  mongoose.model('Order',orderSchema)

module.exports = Order