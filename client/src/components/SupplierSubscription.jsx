import React from 'react';
import { ArrowLeft, ShoppingCart, CreditCard, CheckCircle, Users, TrendingUp } from 'lucide-react';
import {useNavigate} from "react-router-dom";




function SupplierSubscription() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 blur-lg"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-15 blur-2xl"></div>
                <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20 blur-xl"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 p-6">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <button onClick={()=>{navigate('/');}} className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </button>
                    <div className="flex items-center">
                        <ShoppingCart className="w-8 h-8 text-orange-500 mr-2" />
                        <span className="text-2xl font-bold text-gray-800">BaazarBuddy</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-2xl">
                    {/* Main Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        {/* Header Section */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                                <CreditCard className="w-8 h-8 text-orange-500" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                                Supplier Membership
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Important information about your BaazarBuddy supplier account
                            </p>
                        </div>

                        {/* Fee Information Card */}
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                                        <CreditCard className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="ml-4 flex-1">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        Monthly Supplier Fee
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        To maintain your supplier status on BaazarBuddy and access our premium features,
                                        a monthly subscription fee is required. This fee helps us provide:
                                    </p>

                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">Priority listing in search results</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">Access to verified buyer network</span>
                                        </div>
                                        <div className="flex items-center">
                                            <TrendingUp className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">Advanced analytics and insights</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                                Payment Process
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                                Our team will contact you with payment details and setup instructions.
                                No sensitive banking information needs to be provided through this platform.
                                All transactions are processed securely through our verified payment partners.
                            </p>
                        </div>

                        {/* Important Notice */}
                        <div className="bg-gray-50 border-l-4 border-orange-500 p-6 mb-8">
                            <h4 className="font-semibold text-gray-800 mb-2">Important Notice</h4>
                            <p className="text-gray-700">
                                Your supplier account will remain active during the setup period.
                                Once payment arrangements are confirmed, you'll have full access to all premium supplier features.
                            </p>
                        </div>

                        {/* Action Button */}
                        <div className="text-center">
                            <button onClick={()=>{navigate('/login');}} className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Proceed to Login
                            </button>
                            <p className="text-sm text-gray-500 mt-4">
                                Continue to access your supplier dashboard
                            </p>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="text-center mt-8">
                        <p className="text-gray-500 text-sm">
                            Questions? Contact our support team at{' '}
                            <span className="text-orange-500 font-medium">support@baazarbuddy.com</span>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SupplierSubscription;