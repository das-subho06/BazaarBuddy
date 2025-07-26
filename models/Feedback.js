const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
