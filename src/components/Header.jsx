import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

// Props: mobileMenuOpen (boolean), setMobileMenuOpen (function)
export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
    return (
        <header className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <ShoppingCart className="w-8 h-8 text-orange-500" />
                        <span className="text-2xl font-bold text-gray-900">BaazarBuddy</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
                        <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors">Features</a>
                        <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-700 hover:text-orange-500 transition-colors px-4 py-2">
                            Login
                        </button>
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                            Register
                        </button>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-4 py-4 space-y-4">
                        <a href="#home" className="block text-gray-700 hover:text-orange-500">Home</a>
                        <a href="#about" className="block text-gray-700 hover:text-orange-500">About</a>
                        <a href="#features" className="block text-gray-700 hover:text-orange-500">Features</a>
                        <a href="#contact" className="block text-gray-700 hover:text-orange-500">Contact</a>
                        <div className="pt-4 border-t border-gray-100 space-y-2">
                            <button className="block w-full text-left text-gray-700 hover:text-orange-500">Login</button>
                            <button className="block w-full bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
