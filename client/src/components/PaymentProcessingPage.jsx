import React, { useState, useEffect } from 'react';
import { CheckCircle, Loader, CreditCard, Package, Truck } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PaymentProcessingPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [processingStep, setProcessingStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);

    const { cart, cartTotal, addressData, paymentData } = location.state || {};

    useEffect(() => {
        // Simulate payment processing steps
        const timer1 = setTimeout(() => setProcessingStep(2), 2000);
        const timer2 = setTimeout(() => setProcessingStep(3), 4000);
        const timer3 = setTimeout(() => {
            setProcessingStep(4);
            setIsComplete(true);
        }, 6000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    const processingSteps = [
        { id: 1, title: 'Processing Payment', icon: CreditCard, description: 'Verifying payment details...' },
        { id: 2, title: 'Confirming Order', icon: Package, description: 'Creating your order...' },
        { id: 3, title: 'Notifying Suppliers', icon: Truck, description: 'Sending order to suppliers...' },
        { id: 4, title: 'Order Confirmed', icon: CheckCircle, description: 'Your order has been placed successfully!' }
    ];

    const handleContinueShopping = () => {
        navigate('/storepage');
    };

    const handleViewOrders = () => {
        // Navigate to orders page (you can implement this later)
        navigate('/storepage');
    };

    if (!cart || !cartTotal) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">No Order Data Found</h2>
                    <button
                        onClick={() => navigate('/storepage')}
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Go to Store
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        {isComplete ? 'Order Placed Successfully!' : 'Processing Your Order'}
                    </h1>
                    <p className="text-xl text-gray-600">
                        {isComplete 
                            ? 'Thank you for your order. We\'ll notify you once it\'s ready for delivery.'
                            : 'Please wait while we process your payment and confirm your order.'
                        }
                    </p>
                </div>

                {/* Processing Steps */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="space-y-6">
                        {processingSteps.map((step) => {
                            const Icon = step.icon;
                            const isActive = processingStep >= step.id;
                            const isCurrent = processingStep === step.id && !isComplete;

                            return (
                                <div key={step.id} className="flex items-center space-x-4">
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
                                        isActive 
                                            ? 'bg-green-500 text-white' 
                                            : 'bg-gray-200 text-gray-400'
                                    }`}>
                                        {isCurrent && !isComplete ? (
                                            <Loader className="w-6 h-6 animate-spin" />
                                        ) : (
                                            <Icon className="w-6 h-6" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-semibold ${
                                            isActive ? 'text-gray-800' : 'text-gray-400'
                                        }`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-sm ${
                                            isActive ? 'text-gray-600' : 'text-gray-400'
                                        }`}>
                                            {step.description}
                                        </p>
                                    </div>
                                    {isActive && step.id < 4 && (
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Items Ordered</h3>
                            <div className="space-y-3">
                                {cart.map((item) => (
                                    <div key={item.cartId} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">{item.image}</span>
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-gray-500">{item.supplierName}</p>
                                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <p className="font-semibold text-orange-600">₹{item.price * item.quantity}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t">
                                <div className="flex justify-between items-center text-xl font-bold">
                                    <span>Total Amount:</span>
                                    <span className="text-orange-600">₹{cartTotal}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Delivery Details</h3>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="font-medium text-gray-800">{addressData?.fullName}</p>
                                <p className="text-gray-600 mt-1">{addressData?.address}</p>
                                <p className="text-gray-600">{addressData?.city}, {addressData?.state} - {addressData?.pincode}</p>
                                <p className="text-gray-600 mt-2">Phone: {addressData?.phone}</p>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">Payment Method</h3>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-gray-600 capitalize">
                                    {paymentData?.method === 'card' && 'Credit/Debit Card'}
                                    {paymentData?.method === 'upi' && 'UPI Payment'}
                                    {paymentData?.method === 'cod' && 'Cash on Delivery'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                {isComplete && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleViewOrders}
                            className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                        >
                            View My Orders
                        </button>
                        <button
                            onClick={handleContinueShopping}
                            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}

                {/* Loading Animation */}
                {!isComplete && (
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 text-orange-600">
                            <Loader className="w-6 h-6 animate-spin" />
                            <span className="text-lg font-medium">Processing your order...</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}