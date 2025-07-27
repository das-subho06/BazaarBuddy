import React, {useState} from 'react';
import currentPage from '../components/RegisterPage.jsx'
import  setCurrentPage  from '../components/RegisterPage.jsx'
import handleBackToHome from '../components/RegisterPage.jsx'
import handleRegister from '../components/RegisterPage.jsx'
import RegisterPage from '../components/RegisterPage.jsx'
import LandingPage from '../pages/landingpage.jsx'
import { useNavigate } from 'react-router-dom';
import {
    ShoppingCart,
    Users,
    Truck,
    CheckCircle,
    ArrowRight,
    LogIn,
    UserPlus,
    Star,
    Package,
    TrendingUp,
    Shield
} from 'lucide-react';


function GetStarted({handleBackToHome,setCurrentPage,handleRegister}) {
    // const [currentPage, setCurrentPage] = useState('home');
    // const handleRegister =async (userData) => {
    //     // In a real app, you would register with a backend
    //     // setUser(userData);
    //     // setCurrentPage('home');
    //     // console.log('User registered:', userData);
    //     try {
    //         const response = await fetch('http://localhost:5000/api/auth/register', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(userData),
    //         });
    //
    //         const data = await response.json();
    //
    //         if (response.ok) {
    //             alert('Registration successful!');
    //             setUser(data.user); // Adjust based on your backend response
    //             setCurrentPage('home');
    //         } else {
    //             alert(`Registration failed: ${data.message}`);
    //         }
    //     } catch (error) {
    //         console.error('Registration error:', error);
    //         alert('Something went wrong. Please try again.');
    //     }
    // };
    // const handleBackToHome = () => {
    //     setCurrentPage('home');
    //     //navigate('/');
    // };
    //
    //




    const navigate=useNavigate();
    function navreg(){
         setCurrentPage('register')

            if(currentPage === 'register')
            return(
            <RegisterPage
                onBack={handleBackToHome}
                onSwitchToLogin={() => setCurrentPage('login')}
                onRegister={handleRegister}
            />
        )
    }


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <ShoppingCart className="w-8 h-8 text-orange-600" />
                            <span className="text-2xl font-bold text-gray-800">BazaarBuddy</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Home</a>
                            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">About</a>
                            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Features</a>
                            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Vendors</a>
                            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Suppliers</a>
                            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Pricing</a>
                            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</a>
                            <button className="text-gray-600 hover:text-orange-600 transition-all duration-300 hover:scale-105">Login</button>
                            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">Register</button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Get Started</h1>
                        <p className="text-xl text-gray-600 mb-12">
                            Join thousands of vendors and suppliers making street food business easier
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="mb-6">
                                    <UserPlus className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">New To BazaarBuddy?</h2>
                                    <p className="text-gray-600 mb-6">
                                        Start your journey with us and connect with trusted suppliers across India
                                    </p>
                                </div>
                                <button onClick={() => navreg()} className="w-full bg-orange-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                                    <span>Register Now</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="mb-6">
                                    <LogIn className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                                    <h2 className="text-xl font-bold text-gray-800 mb-3">Already existing vendor/supplier?</h2>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Welcome back! Continue managing your business with ease
                                    </p>
                                </div>
                                <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                                    <span>Login</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* How BazaarBuddy is helpful for vendors */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            How BazaarBuddy is helpful for vendors?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Streamline your street food business with our comprehensive vendor solutions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-xl">
                            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Connect with Suppliers</h3>
                            <p className="text-gray-600">
                                Find verified suppliers in your area offering fresh ingredients at competitive prices
                            </p>
                        </div>

                        <div className="text-center p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-xl">
                            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Grow Your Business</h3>
                            <p className="text-gray-600">
                                Access business tools, analytics, and insights to expand your street food venture
                            </p>
                        </div>

                        <div className="text-center p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-xl">
                            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
                            <p className="text-gray-600">
                                Get guaranteed quality products with our vendor verification and rating system
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How BazaarBuddy is helpful for suppliers */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            How BazaarBuddy is helpful for suppliers?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Expand your reach and connect with street food vendors across India
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-xl">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Truck className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Wider Market Reach</h3>
                            <p className="text-gray-600">
                                Connect with thousands of street food vendors looking for quality ingredients
                            </p>
                        </div>

                        <div className="text-center p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-xl">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Package className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Streamlined Orders</h3>
                            <p className="text-gray-600">
                                Manage orders efficiently with our digital platform and automated notifications
                            </p>
                        </div>

                        <div className="text-center p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-xl">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Star className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Build Reputation</h3>
                            <p className="text-gray-600">
                                Earn ratings and reviews to build trust and attract more vendor partnerships
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscription System */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Vendor Premium Plan
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Unlock advanced features to supercharge your street food business
                        </p>
                    </div>

                    <div className="max-w-lg mx-auto">
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-3xl text-white shadow-2xl">
                            <div className="text-center mb-8">
                                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Crown className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold mb-2">Premium Vendor</h3>
                                <div className="text-5xl font-bold mb-2">₹100</div>
                                <p className="text-orange-100">per month</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                                    <span>Priority supplier matching</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                                    <span>Advanced analytics dashboard</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                                    <span>Bulk order discounts</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                                    <span>24/7 customer support</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                                    <span>Featured listing in supplier searches</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                                    <span>Marketing tools and templates</span>
                                </div>
                            </div>

                            <button className="w-full bg-white text-orange-600 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                                <span>Proceed to Pay</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <ShoppingCart className="w-8 h-8 text-orange-600" />
                            <span className="text-2xl font-bold">BazaarBuddy</span>
                        </div>
                        <p className="text-gray-400 mb-8">
                            Making street food business easier for vendors and suppliers across India
                        </p>
                        <div className="flex justify-center space-x-8">
                            <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Support</a>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-700">
                            <p className="text-gray-400">© 2025 BazaarBuddy. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>






    );
}

function Crown({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 16L3 4l4.5 3L12 2l4.5 5L21 4l-2 12H5z" />
        </svg>
    );
}

export default GetStarted;
