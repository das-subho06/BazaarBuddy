import React, { useState } from 'react';
import { MapPin, Calendar, Search } from 'lucide-react';

export default function SearchSection() {
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');

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
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center">
                                <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                                Location
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your city"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                            />
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
                            <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
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
