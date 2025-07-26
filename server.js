const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bazaarbuddy', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Import our models (Step 6)
const Vendor = require('./models/Vendor');
const Supplier = require('./models/Supplier');
const Order = require('./models/Order');
const Feedback = require('./models/Feedback');

// Simple test route
app.get('/', (req, res) => {
    res.send('BazaarBuddy API is running!');
});

// Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
