import React from 'react';
import { MessageCircle, Users, Heart, Zap } from 'lucide-react';

export default function CommunitySection() {
    const communityFeatures = [
        { icon: '👨‍🍳', name: 'Rajesh Kumar', message: 'Great suppliers!' },
        { icon: '👩‍🍳', name: 'Priya Sharma', message: 'Best prices here' },
        { icon: '👨‍🍳', name: 'Amit Singh', message: 'Quality materials' },
        { icon: '👩‍🍳', name: 'Sunita Devi', message: 'Highly recommend!' },
        { icon: '👨‍🍳', name: 'Vikram Yadav', message: 'Fast delivery' }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                                <Zap className="w-6 h-6 text-orange-500" />
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                Join Our Vendor Community
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Connect with thousands of street food vendors across India. Share experiences,
                                get recommendations, and grow your business together. Our community is here to support you!
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <Users className="w-8 h-8 text-blue-500 mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">5000+ Vendors</h3>
                                <p className="text-gray-600 text-sm">Active community members</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <MessageCircle className="w-8 h-8 text-green-500 mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">24/7 Chat</h3>
                                <p className="text-gray-600 text-sm">Always someone to help</p>
                            </div>
                        </div>

                        <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                            <Users className="w-5 h-5" />
                            <span>Join Community</span>
                        </button>
                    </div>

                    <div className="relative">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                            <div className="relative space-y-6">
                                {communityFeatures.map((member, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-500 ${
                                            index % 2 === 0 ? 'bg-blue-50 translate-x-0' : 'bg-purple-50 translate-x-4'
                                        } hover:scale-105 hover:shadow-lg`}
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                    >
                                        <div className="text-3xl">{member.icon}</div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-gray-900">{member.name}</p>
                                            <p className="text-gray-600 text-sm">{member.message}</p>
                                        </div>
                                        <Heart className="w-5 h-5 text-red-400" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="absolute -top-4 -right-4 space-y-3">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white animate-bounce">
                                <span className="text-lg">📱</span>
                            </div>
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white animate-pulse">
                                <span className="text-sm">💬</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
