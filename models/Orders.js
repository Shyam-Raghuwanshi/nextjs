const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    email: { type: String, required: true },
    OrderId: { type: String, required: true },
    paymentInfo: { type: String, default: '' },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Initiated', required: true },
}, { timestamps: true })


// export default mongoose.model.Order || mongoose.model('Order', OrderSchema)
mongoose.models = {}
export default mongoose.model('Order', OrderSchema)