const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ['vegetables', 'meat', 'grains'], required: true }, // Only these categories
    priceCard: { type: Map, of: Number }, // Example: { "tomato": 40, "onion": 30 }
    rating: { type: Number, min: 0, max: 5, default: 0 },
    location: {
        type: { type: String, enum: ['Point'], default: 'Point' }, // GeoJSON type
        coordinates: { type: [Number], required: true } // [longitude, latitude]
    },
    createdAt: { type: Date, default: Date.now }
});

// To support "find nearby" queries
supplierSchema.index({ location: "2dsphere" });

module.exports = mongoose.model('Supplier', supplierSchema);
