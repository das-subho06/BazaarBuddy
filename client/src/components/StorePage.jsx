import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, Filter, Star, MapPin, Phone, Mail, ShoppingCart, X } from 'lucide-react';

export default function StorePage({ searchQuery, location, category, onBack }) {
    const [filteredSuppliers, setFilteredSuppliers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(searchQuery || '');
    const [selectedCategory, setSelectedCategory] = useState(category || '');
    const [priceFilter, setPriceFilter] = useState('');

    // Add these cart-related states
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    // Add to cart function
    const addToCart = (item, supplierId, supplierName) => {
        const cartItem = {
            ...item,
            supplierId,
            supplierName,
            cartId: `${supplierId}-${item.id}`,
            quantity: 1
        };

        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.cartId === `${supplierId}-${item.id}`);

            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.cartId === `${supplierId}-${item.id}`
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, cartItem];
            }
        });
    };

    // Remove from cart function
    const removeFromCart = (cartId) => {
        setCart(prevCart => prevCart.filter(item => item.cartId !== cartId));
    };

    // Update quantity function
    const updateQuantity = (cartId, newQuantity) => {
        if (newQuantity === 0) {
            removeFromCart(cartId);
            return;
        }

        setCart(prevCart =>
            prevCart.map(item =>
                item.cartId === cartId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Calculate total
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Mock supplier data
    const suppliers = [
        {
            id: 1,
            name: 'Sharma Spices & Masala',
            category: 'spices',
            location: 'Kolkata',
            rating: 4.8,
            reviews: 156,
            phone: '+91 98765 43210',
            email: 'sharma.spices@gmail.com',
            image: '🌶️',
            description: 'Premium quality spices sourced directly from farms. Best prices in the market.',
            items: [
                { id: 101, name: 'Red Chili Powder', price: 120, unit: '1kg', image: '🌶️' },
                { id: 102, name: 'Turmeric Powder', price: 80, unit: '500g', image: '💛' },
                { id: 103, name: 'Garam Masala', price: 150, unit: '250g', image: '🧂' },
                { id: 104, name: 'Cumin Seeds', price: 200, unit: '1kg', image: '🌰' }
            ]
        },
        {
            id: 2,
            name: 'Fresh Veggie Mart',
            category: 'vegetables',
            location: 'Delhi',
            rating: 4.6,
            reviews: 89,
            phone: '+91 87654 32109',
            email: 'freshveggie@gmail.com',
            image: '🥬',
            description: 'Farm fresh vegetables delivered daily. Organic options available.',
            items: [
                { id: 201, name: 'Fresh Onions', price: 40, unit: '1kg', image: '🧅' },
                { id: 202, name: 'Tomatoes', price: 60, unit: '1kg', image: '🍅' },
                { id: 203, name: 'Potatoes', price: 30, unit: '1kg', image: '🥔' },
                { id: 204, name: 'Green Chilies', price: 80, unit: '250g', image: '🌶️' }
            ]
        },
        {
            id: 3,
            name: 'Mumbai Packaging Solutions',
            category: 'packaging',
            location: 'Mumbai',
            rating: 4.7,
            reviews: 203,
            phone: '+91 76543 21098',
            email: 'packaging.mumbai@gmail.com',
            image: '📦',
            description: 'Eco-friendly packaging materials for street food vendors.',
            items: [
                { id: 301, name: 'Food Containers', price: 150, unit: '50 pieces', image: '🥡' },
                { id: 302, name: 'Paper Bags', price: 80, unit: '100 pieces', image: '🛍️' },
                { id: 303, name: 'Plastic Wraps', price: 120, unit: '1 roll', image: '📦' },
                { id: 304, name: 'Disposable Plates', price: 200, unit: '100 pieces', image: '🍽️' }
            ]
        },
        {
            id: 4,
            name: 'Golden Oil Traders',
            category: 'oils',
            location: 'Chennai',
            rating: 4.5,
            reviews: 124,
            phone: '+91 65432 10987',
            email: 'goldenoil@gmail.com',
            image: '🛢️',
            description: 'Pure and refined cooking oils at wholesale prices.',
            items: [
                { id: 401, name: 'Sunflower Oil', price: 150, unit: '1 liter', image: '🌻' },
                { id: 402, name: 'Mustard Oil', price: 180, unit: '1 liter', image: '🥄' },
                { id: 403, name: 'Coconut Oil', price: 200, unit: '1 liter', image: '🥥' },
                { id: 404, name: 'Groundnut Oil', price: 170, unit: '1 liter', image: '🥜' }
            ]
        },
        {
            id: 5,
            name: 'Bengal Grains & Pulses',
            category: 'grains',
            location: 'Howrah',
            rating: 4.9,
            reviews: 178,
            phone: '+91 54321 09876',
            email: 'bengalgrains@gmail.com',
            image: '🌾',
            description: 'Quality grains and pulses from Bengal. Bulk orders welcome.',
            items: [
                { id: 501, name: 'Basmati Rice', price: 60, unit: '1kg', image: '🍚' },
                { id: 502, name: 'Wheat Flour', price: 40, unit: '1kg', image: '🌾' },
                { id: 503, name: 'Lentils', price: 70, unit: '1kg', image: '🍲' },
                { id: 504, name: 'Chickpeas', price: 80, unit: '1kg', image: '🥘' }
            ]
        },
        {
            id: 6,
            name: 'Burdwan Spice House',
            category: 'spices',
            location: 'Burdwan',
            rating: 4.4,
            reviews: 67,
            phone: '+91 43210 98765',
            email: 'burdwanspices@gmail.com',
            image: '🌶️',
            description: 'Traditional spices with authentic flavors. Family business since 1985.',
            items: [
                { id: 601, name: 'Coriander Powder', price: 90, unit: '500g', image: '🌿' },
                { id: 602, name: 'Black Pepper', price: 110, unit: '250g', image: '⚫' },
                { id: 603, name: 'Cardamom', price: 140, unit: '100g', image: '💚' },
                { id: 604, name: 'Cinnamon', price: 130, unit: '100g', image: '🌀' }
            ]
        }
        // Add other stores in the same format here if needed
    ];


    useEffect(() => {
        filterSuppliers();
    }, [searchTerm, selectedCategory, priceFilter, location]);

    const filterSuppliers = () => {
        let filtered = suppliers;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(supplier =>
                supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                supplier.products.some(product => 
                    product.toLowerCase().includes(searchTerm.toLowerCase())
                ) ||
                supplier.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(supplier => supplier.category === selectedCategory);
        }

        // Filter by location
        if (location) {
            filtered = filtered.filter(supplier => 
                supplier.location.toLowerCase().includes(location.toLowerCase())
            );
        }

        // Filter by price
        if (priceFilter) {
            filtered = filtered.filter(supplier => supplier.price === priceFilter);
        }

        setFilteredSuppliers(filtered);
    };

    const getPriceColor = (price) => {
        switch (price) {
            case 'Low': return 'text-green-600 bg-green-100';
            case 'Medium': return 'text-yellow-600 bg-yellow-100';
            case 'High': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };
    // Cart Component
    const CartComponent = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full overflow-y-auto">
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-xl font-bold">Shopping Cart ({cartItemCount})</h2>
                    <button
                        onClick={() => setShowCart(false)}
                        className="p-2 hover:bg-gray-100 rounded"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 p-4">
                    {cart.length === 0 ? (
                        <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.cartId} className="flex items-center justify-between border-b pb-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">{item.image}</span>
                                        <div>
                                            <h4 className="font-medium">{item.name}</h4>
                                            <p className="text-sm text-gray-500">{item.supplierName}</p>
                                            <p className="text-sm text-gray-500">₹{item.price} per {item.unit}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                                            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => removeFromCart(item.cartId)}
                                            className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="border-t p-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-bold">Total: ₹{cartTotal}</span>
                        </div>
                        <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors">
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between space-x-4">
                        {/* Left side: Back button */}
                        <button
                            onClick={onBack}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Home</span>
                        </button>

                        {/* Center: Title */}
                        <h1 className="text-2xl font-bold text-gray-900 flex-1 text-center">
                            Supplier Store
                        </h1>

                        {/* Right side: Cart button */}
                        <button
                            onClick={() => setShowCart(true)}
                            className="relative flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            <span>Cart</span>
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartItemCount}
          </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search and Filters */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search suppliers or products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                        >
                            <option value="">All Categories</option>
                            <option value="spices">Spices & Masala</option>
                            <option value="vegetables">Fresh Vegetables</option>
                            <option value="packaging">Packaging Materials</option>
                            <option value="oils">Cooking Oils</option>
                            <option value="grains">Grains & Pulses</option>
                        </select>

                        <select
                            value={priceFilter}
                            onChange={(e) => setPriceFilter(e.target.value)}
                            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                        >
                            <option value="">All Prices</option>
                            <option value="Low">Low Price</option>
                            <option value="Medium">Medium Price</option>
                            <option value="High">High Price</option>
                        </select>

                        <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                            <Filter className="w-5 h-5" />
                            <span>Apply Filters</span>
                        </button>
                    </div>
                </div>

                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                        {filteredSuppliers.length} Suppliers Found
                        {searchQuery && <span className="text-orange-500"> for "{searchQuery}"</span>}
                        {location && <span className="text-gray-600"> in {location}</span>}
                    </h2>
                </div>

                {/* Suppliers Grid */}
                    {filteredSuppliers.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                            {filteredSuppliers.map((supplier) => (
                                <div key={supplier.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                                    {/* Supplier Header */}
                                    <div className="p-6 border-b">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="text-4xl">{supplier.image}</div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900">{supplier.name}</h3>
                                                    <div className="flex items-center space-x-4 mt-2">
                                                        <div className="flex items-center space-x-1">
                                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                            <span className="text-sm font-medium">{supplier.rating}</span>
                                                            <span className="text-sm text-gray-500">({supplier.reviews} reviews)</span>
                                                        </div>
                                                        <div className="flex items-center space-x-1 text-gray-500">
                                                            <MapPin className="w-4 h-4" />
                                                            <span className="text-sm">{supplier.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mt-3">{supplier.description}</p>
                                    </div>

                                    {/* Items Grid */}
                                    <div className="p-6">
                                        <h4 className="text-lg font-semibold mb-4">Available Items</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {supplier.items.map((item) => (
                                                <div key={item.id} className="border rounded-xl p-4 hover:shadow-md transition-all">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <div className="flex items-center space-x-3">
                                                            <span className="text-2xl">{item.image}</span>
                                                            <div>
                                                                <h5 className="font-medium text-gray-900">{item.name}</h5>
                                                                <p className="text-sm text-gray-500">{item.unit}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <span className="text-lg font-bold text-orange-600">₹{item.price}</span>
                                                        <button
                                                            onClick={() => addToCart(item, supplier.id, supplier.name)}
                                                            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                                                        >
                                                            Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="px-6 pb-6">
                                        <div className="flex space-x-4 text-sm">
                                            <div className="flex items-center space-x-1 text-gray-600">
                                                <Phone className="w-4 h-4" />
                                                <span>{supplier.phone}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 text-gray-600">
                                                <Mail className="w-4 h-4" />
                                                <span>{supplier.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Suppliers Found</h3>
                            <p className="text-gray-600 mb-6">
                                Try adjusting your search criteria or browse all suppliers.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('');
                                    setPriceFilter('');
                                }}
                                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
            </div>
            {showCart && <CartComponent />}
        </div>
    );
}