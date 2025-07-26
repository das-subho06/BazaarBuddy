const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true }, // Who placed the order
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true }, // From which supplier
    items: [{
        product: String,
        quantity: Number,
        price: Number
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
