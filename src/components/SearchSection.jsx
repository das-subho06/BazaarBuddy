import React, { useState } from 'react';
import { MapPin, Calendar, Search } from 'lucide-react';

export default function SearchSection({ onSearch }) {
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const indianCities = [
        'Kolkata', 'Howrah', 'Burdwan', 'Delhi', 'Mumbai', 'Chennai', 'Bangalore',
        'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur',
        'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna',
        'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad',
        'Meerut', 'Rajkot', 'Kalyan-Dombivali', 'Vasai-Virar', 'Varanasi',
        'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai',
        'Allahabad', 'Ranchi', 'Haora', 'Coimbatore', 'Jabalpur', 'Gwalior',
        'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur', 'Kota', 'Guwahati',
        'Chandigarh', 'Solapur', 'Hubli-Dharwad', 'Bareilly', 'Moradabad',
        'Mysore', 'Gurgaon', 'Aligarh', 'Jalandhar', 'Tiruchirappalli',
        'Bhubaneswar', 'Salem', 'Mira-Bhayandar', 'Warangal', 'Thiruvananthapuram'
    ];

    const filteredCities = indianCities.filter(city =>
        city.toLowerCase().includes(location.toLowerCase())
    ).slice(0, 8);

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        setShowSuggestions(true);
    };

    const handleCitySelect = (city) => {
        setLocation(city);
        setShowSuggestions(false);
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchQuery, location, category);
        }
    };

    const floatingElements = [
        { emoji: '🌶️', position: 'top-10 left-10', delay: '0s' },
        { emoji: '🥬', position: 'top-20 right-20', delay: '1s' },
        { emoji: '🧄', position: 'bottom-20 left-20', delay: '2s' },
        { emoji: '🥔', position: 'bottom-10 right-10', delay: '0.5s' },
        { emoji: '🌽', position: 'top-1/2 left-5', delay: '1.5s' },
        { emoji: '🥕', position: 'top-1/3 right-5', delay: '2.5s' }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden">
            {/* Floating Elements */}
            {floatingElements.map((element, index) => (
                <div
                    key={index}
                    className={`absolute ${element.position} text-4xl animate-bounce hidden lg:block`}
                    style={{ animationDelay: element.delay, animationDuration: '3s' }}
                >
                    {element.emoji}
                </div>
            ))}

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Find Raw Materials, Suppliers & More
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Search for spices, vegetables, packaging materials and connect with trusted suppliers
                        in your area. Start building your street food empire today!
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8">
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center">
                                <Search className="w-4 h-4 mr-2 text-orange-500" />
                                Search
                            </label>
                            <input
                                type="text"
                                placeholder="Spices, vegetables, etc."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <div className="space-y-2 relative">
                            <label className="text-sm font-semibold text-gray-700 flex items-center">
                                <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                                Location
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your city"
                                value={location}
                                onChange={handleLocationChange}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                            />
                            
                            {/* City Suggestions Dropdown */}
                            {showSuggestions && location && filteredCities.length > 0 && (
                                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-10 mt-1 max-h-64 overflow-y-auto">
                                    {filteredCities.map((city, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => handleCitySelect(city)}
                                            className="w-full text-left px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-gray-100 last:border-b-0 flex items-center space-x-2"
                                        >
                                            <MapPin className="w-4 h-4 text-gray-400" />
                                            <span>{city}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                                Category
                            </label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                            >
                                <option value="">Select category</option>
                                <option value="spices">Spices & Masala</option>
                                <option value="vegetables">Fresh Vegetables</option>
                                <option value="packaging">Packaging Materials</option>
                                <option value="oils">Cooking Oils</option>
                                <option value="grains">Grains & Pulses</option>
                            </select>
                        </div>

                        <div className="flex items-end">
                            <button 
                                onClick={handleSearch}
                                className="w-full bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <Search className="w-5 h-5" />
                                <span className="font-semibold">Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
