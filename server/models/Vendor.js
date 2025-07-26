const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true },          // Vendor's name
    mobile: { type: String, required: true, unique: true }, // Mobile number (unique)
    otp: { type: String },                           // For storing OTP (if used)
    createdAt: { type: Date, default: Date.now }      // Auto-set date
});

module.exports = mongoose.model('Vendor', vendorSchema);
