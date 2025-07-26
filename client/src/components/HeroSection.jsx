import React from 'react';
import { ArrowRight, MapPin, Users, TrendingUp, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


export default function HeroSection() {
    const navigate = useNavigate();
    function nav() {
        navigate('/GetStarted');
    }

    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Street Food Business
                                <span className="text-orange-500"> Made Easy!</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Connect with trusted suppliers, find the best raw materials, and grow your street food business.
                                BaazarBuddy helps Indian street food vendors source ingredients at the best prices.
                            </p>
                        </div>

                        <button onClick={()=>{nav()}} className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                            <span>Get Started</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="relative">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-gray-900">Find Raw Materials</h3>
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-orange-500" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded-xl">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold">🌶️</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Spices & Masala</p>
                                                <p className="text-sm text-gray-600">Best Quality, Best Price</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-xl">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold">🥬</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Fresh Vegetables</p>
                                                <p className="text-sm text-gray-600">Farm Fresh Daily</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold">🛒</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Packaging Materials</p>
                                                <p className="text-sm text-gray-600">Eco-friendly Options</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                            <Star className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center animate-pulse">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
