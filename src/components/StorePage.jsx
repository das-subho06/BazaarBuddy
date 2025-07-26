import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, Filter, Star, MapPin, Phone, Mail } from 'lucide-react';

export default function StorePage({ searchQuery, location, category, onBack }) {
    const [filteredSuppliers, setFilteredSuppliers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(searchQuery || '');
    const [selectedCategory, setSelectedCategory] = useState(category || '');
    const [priceFilter, setPriceFilter] = useState('');

    // Mock supplier data
    const suppliers = [
        {
            id: 1,
            name: 'Sharma Spices & Masala',
            category: 'spices',
            location: 'Kolkata',
            rating: 4.8,
            reviews: 156,
            price: 'Low',
            phone: '+91 98765 43210',
            email: 'sharma.spices@gmail.com',
            products: ['Red Chili Powder', 'Turmeric', 'Garam Masala', 'Cumin Seeds'],
            image: '🌶️',
            description: 'Premium quality spices sourced directly from farms. Best prices in the market.'
        },
        {
            id: 2,
            name: 'Fresh Veggie Mart',
            category: 'vegetables',
            location: 'Delhi',
            rating: 4.6,
            reviews: 89,
            price: 'Medium',
            phone: '+91 87654 32109',
            email: 'freshveggie@gmail.com',
            products: ['Onions', 'Tomatoes', 'Potatoes', 'Green Chilies'],
            image: '🥬',
            description: 'Farm fresh vegetables delivered daily. Organic options available.'
        },
        {
            id: 3,
            name: 'Mumbai Packaging Solutions',
            category: 'packaging',
            location: 'Mumbai',
            rating: 4.7,
            reviews: 203,
            price: 'High',
            phone: '+91 76543 21098',
            email: 'packaging.mumbai@gmail.com',
            products: ['Food Containers', 'Paper Bags', 'Plastic Wraps', 'Disposable Plates'],
            image: '📦',
            description: 'Eco-friendly packaging materials for street food vendors.'
        },
        {
            id: 4,
            name: 'Golden Oil Traders',
            category: 'oils',
            location: 'Chennai',
            rating: 4.5,
            reviews: 124,
            price: 'Medium',
            phone: '+91 65432 10987',
            email: 'goldenoil@gmail.com',
            products: ['Sunflower Oil', 'Mustard Oil', 'Coconut Oil', 'Groundnut Oil'],
            image: '🛢️',
            description: 'Pure and refined cooking oils at wholesale prices.'
        },
        {
            id: 5,
            name: 'Bengal Grains & Pulses',
            category: 'grains',
            location: 'Howrah',
            rating: 4.9,
            reviews: 178,
            price: 'Low',
            phone: '+91 54321 09876',
            email: 'bengalgrains@gmail.com',
            products: ['Basmati Rice', 'Wheat Flour', 'Lentils', 'Chickpeas'],
            image: '🌾',
            description: 'Quality grains and pulses from Bengal. Bulk orders welcome.'
        },
        {
            id: 6,
            name: 'Burdwan Spice House',
            category: 'spices',
            location: 'Burdwan',
            rating: 4.4,
            reviews: 67,
            price: 'Low',
            phone: '+91 43210 98765',
            email: 'burdwanspices@gmail.com',
            products: ['Coriander Powder', 'Black Pepper', 'Cardamom', 'Cinnamon'],
            image: '🌶️',
            description: 'Traditional spices with authentic flavors. Family business since 1985.'
        }
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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={onBack}
                            className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Home</span>
                        </button>
                        <h1 className="text-2xl font-bold text-gray-900">Supplier Store</h1>
                        <div className="w-20"></div>
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSuppliers.map((supplier) => (
                        <div key={supplier.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="text-4xl">{supplier.image}</div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{supplier.name}</h3>
                                            <div className="flex items-center space-x-1 text-sm text-gray-600">
                                                <MapPin className="w-4 h-4" />
                                                <span>{supplier.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriceColor(supplier.price)}`}>
                                        {supplier.price}
                                    </span>
                                </div>

                                <p className="text-gray-600 text-sm mb-4">{supplier.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Products:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {supplier.products.slice(0, 3).map((product, index) => (
                                            <span key={index} className="bg-orange-100 text-orange-700 px-2 py-1 rounded-lg text-xs">
                                                {product}
                                            </span>
                                        ))}
                                        {supplier.products.length > 3 && (
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
                                                +{supplier.products.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="font-semibold text-gray-900">{supplier.rating}</span>
                                        <span className="text-gray-600 text-sm">({supplier.reviews} reviews)</span>
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <button className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-1">
                                        <Phone className="w-4 h-4" />
                                        <span>Call</span>
                                    </button>
                                    <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-1">
                                        <Mail className="w-4 h-4" />
                                        <span>Email</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredSuppliers.length === 0 && (
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
        </div>
    );
}