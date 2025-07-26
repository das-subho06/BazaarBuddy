import React from 'react';
import { Search, MapPin, CreditCard, Users, Shield, Clock } from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            icon: Search,
            title: 'Smart Search',
            description: 'Find suppliers for spices, vegetables, packaging materials and more with our intelligent search system.',
            color: 'from-blue-400 to-blue-600'
        },
        {
            icon: MapPin,
            title: 'Location Based',
            description: 'Discover suppliers near your location to reduce transportation costs and get fresh materials.',
            color: 'from-green-400 to-green-600'
        },
        {
            icon: CreditCard,
            title: 'Best Prices',
            description: 'Compare prices from multiple suppliers and get the best deals for your raw materials.',
            color: 'from-purple-400 to-purple-600'
        },
        {
            icon: Users,
            title: 'Vendor Community',
            description: 'Connect with fellow street food vendors, share experiences and grow together.',
            color: 'from-orange-400 to-orange-600'
        },
        {
            icon: Shield,
            title: 'Verified Suppliers',
            description: 'All suppliers are verified for quality and reliability. Trade with confidence.',
            color: 'from-red-400 to-red-600'
        },
        {
            icon: Clock,
            title: '24/7 Support',
            description: 'Get help whenever you need it. Our support team is always ready to assist you.',
            color: 'from-indigo-400 to-indigo-600'
        }
    ];

    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Everything You Need To Grow Your Business
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From finding the right suppliers to managing your inventory, BaazarBuddy provides all the tools
                        you need to run a successful street food business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
