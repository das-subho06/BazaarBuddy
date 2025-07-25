import React from 'react';
import { ShoppingCart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <ShoppingCart className="w-8 h-8 text-orange-500" />
                            <span className="text-2xl font-bold">BaazarBuddy</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Empowering Indian street food vendors by connecting them with trusted suppliers
                            and building a strong community for business growth.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                            <Twitter className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                            <Instagram className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                            <Linkedin className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
                            <li><a href="#features" className="text-gray-400 hover:text-orange-500 transition-colors">Features</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Categories</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Spices & Masala</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Fresh Vegetables</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Packaging Materials</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cooking Oils</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Grains & Pulses</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-orange-500" />
                                <span className="text-gray-400">support@baazarbuddy.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-orange-500" />
                                <span className="text-gray-400">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-orange-500" />
                                <span className="text-gray-400">Mumbai, Maharashtra, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 BaazarBuddy. All rights reserved. Made with ❤️ for Indian street food vendors.
                    </p>
                </div>
            </div>
        </footer>
    );
}
