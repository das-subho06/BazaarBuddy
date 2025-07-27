import React, { useState } from 'react';
import {
    ArrowLeft,
    ShoppingCart,
    MapPin,
    CreditCard,
    User,
    Phone,
    Mail,
    Home,
    CheckCircle,
    Truck,
    Shield
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CheckoutPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { cart = [], cartTotal = 0, onBack } = location.state || {};
    
    const [currentStep, setCurrentStep] = useState(1);
    const [addressData, setAddressData] = useState({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        landmark: ''
    });
    const [paymentData, setPaymentData] = useState({
        method: 'card',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: '',
        upiId: ''
    });
    const [errors, setErrors] = useState({});

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddressData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateAddress = () => {
        const newErrors = {};
        if (!addressData.fullName) newErrors.fullName = 'Full name is required';
        if (!addressData.phone) newErrors.phone = 'Phone number is required';
        if (!addressData.email) newErrors.email = 'Email is required';
        if (!addressData.address) newErrors.address = 'Address is required';
        if (!addressData.city) newErrors.city = 'City is required';
        if (!addressData.state) newErrors.state = 'State is required';
        if (!addressData.pincode) newErrors.pincode = 'Pincode is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validatePayment = () => {
        const newErrors = {};
        if (paymentData.method === 'card') {
            if (!paymentData.cardNumber) newErrors.cardNumber = 'Card number is required';
            if (!paymentData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
            if (!paymentData.cvv) newErrors.cvv = 'CVV is required';
            if (!paymentData.cardName) newErrors.cardName = 'Cardholder name is required';
        } else if (paymentData.method === 'upi') {
            if (!paymentData.upiId) newErrors.upiId = 'UPI ID is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNextStep = () => {
        if (currentStep === 1 && validateAddress()) {
            setCurrentStep(2);
        } else if (currentStep === 2 && validatePayment()) {
            setCurrentStep(3);
        }
    };

    const handleProceedToPay = () => {
        // Navigate to payment processing placeholder
        navigate('/payment-processing', {
            state: {
                cart,
                cartTotal,
                addressData,
                paymentData
            }
        });
    };
    
    const handleBack = () => {
        if (onBack) {
            onBack();
        }
        navigate('/storepage');
    };

    const StepIndicator = () => (
        <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                    <MapPin className="w-5 h-5" />
                </div>
                <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                    <CreditCard className="w-5 h-5" />
                </div>
                <div className={`w-16 h-1 ${currentStep >= 3 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                    <CheckCircle className="w-5 h-5" />
                </div>
            </div>
        </div>
    );

    const AddressForm = () => (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-orange-500" />
                Delivery Address
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            name="fullName"
                            value={addressData.fullName}
                            onChange={handleAddressChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                                errors.fullName ? 'border-red-300' : 'border-gray-200'
                            }`}
                            placeholder="Enter your full name"
                        />
                    </div>
                    {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="tel"
                            name="phone"
                            value={addressData.phone}
                            onChange={handleAddressChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                                errors.phone ? 'border-red-300' : 'border-gray-200'
                            }`}
                            placeholder="Enter your phone number"
                        />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            value={addressData.email}
                            onChange={handleAddressChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                                errors.email ? 'border-red-300' : 'border-gray-200'
                            }`}
                            placeholder="Enter your email address"
                        />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address *</label>
                    <div className="relative">
                        <Home className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                            name="address"
                            value={addressData.address}
                            onChange={handleAddressChange}
                            rows={3}
                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                                errors.address ? 'border-red-300' : 'border-gray-200'
                            }`}
                            placeholder="House/Flat No., Building Name, Street, Area"
                        />
                    </div>
                    {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input
                        type="text"
                        name="city"
                        value={addressData.city}
                        onChange={handleAddressChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                            errors.city ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder="Enter your city"
                    />
                    {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <select
                        name="state"
                        value={addressData.state}
                        onChange={handleAddressChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                            errors.state ? 'border-red-300' : 'border-gray-200'
                        }`}
                    >
                        <option value="">Select State</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                    </select>
                    {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                    <input
                        type="text"
                        name="pincode"
                        value={addressData.pincode}
                        onChange={handleAddressChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                            errors.pincode ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder="Enter pincode"
                    />
                    {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Landmark (Optional)</label>
                    <input
                        type="text"
                        name="landmark"
                        value={addressData.landmark}
                        onChange={handleAddressChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                        placeholder="Nearby landmark"
                    />
                </div>
            </div>
        </div>
    );

    const PaymentForm = () => (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-2 text-orange-500" />
                Payment Method
            </h2>

            {/* Payment Method Selection */}
            <div className="mb-6">
                <div className="flex space-x-4">
                    <button
                        onClick={() => setPaymentData(prev => ({ ...prev, method: 'card' }))}
                        className={`flex-1 p-4 border-2 rounded-xl transition-all ${
                            paymentData.method === 'card'
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        <CreditCard className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                        <p className="font-medium">Credit/Debit Card</p>
                    </button>
                    <button
                        onClick={() => setPaymentData(prev => ({ ...prev, method: 'upi' }))}
                        className={`flex-1 p-4 border-2 rounded-xl transition-all ${
                            paymentData.method === 'upi'
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        <Shield className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                        <p className="font-medium">UPI</p>
                    </button>
                    <button
                        onClick={() => setPaymentData(prev => ({ ...prev, method: 'cod' }))}
                        className={`flex-1 p-4 border-2 rounded-xl transition-all ${
                            paymentData.method === 'cod'
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        <Truck className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                        <p className="font-medium">Cash on Delivery</p>
                    </button>
                </div>
            </div>

            {/* Card Payment Form */}
            {paymentData.method === 'card' && (
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number *</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={paymentData.cardNumber}
                            onChange={handlePaymentChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                                errors.cardNumber ? 'border-red-300' : 'border-gray-200'
                            }`}
                            placeholder="1234 5678 9012 3456"
                        />
                        {errors.cardNumber && <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date *</label>
                        <input
                            type="text"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={handlePaymentChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                                errors.expiryDate ? 'border-red-300' : 'border-gray-200'
                            }`}
                            placeholder="MM/YY"
                        />
                        {errors.expiryDate && <p className="mt-1 text-sm text-red-600">{errors.expiryDate}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
                        <input
                            type="text"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={handlePaymentChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                                errors.cvv ? 'border-red-300' : 'border-gray-200'
                            }`}
                            placeholder="123"
                        />
                        {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>}
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name *</label>
                        <input
                            type="text"
                            name="cardName"
                            value={paymentData.cardName}
                            onChange={handlePaymentChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                                errors.cardName ? 'border-red-300' : 'border-gray-200'
                            }`}
                            placeholder="Name as on card"
                        />
                        {errors.cardName && <p className="mt-1 text-sm text-red-600">{errors.cardName}</p>}
                    </div>
                </div>
            )}

            {/* UPI Payment Form */}
            {paymentData.method === 'upi' && (
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID *</label>
                    <input
                        type="text"
                        name="upiId"
                        value={paymentData.upiId}
                        onChange={handlePaymentChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                            errors.upiId ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder="yourname@upi"
                    />
                    {errors.upiId && <p className="mt-1 text-sm text-red-600">{errors.upiId}</p>}
                </div>
            )}

            {/* COD Message */}
            {paymentData.method === 'cod' && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-blue-800 font-medium">Cash on Delivery</p>
                    <p className="text-blue-600 text-sm mt-1">
                        Pay when your order is delivered. Additional charges may apply.
                    </p>
                </div>
            )}
        </div>
    );

    const OrderSummary = () => (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4">
                {cart.map((item) => (
                    <div key={item.cartId} className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-lg">{item.image}</span>
                            <div>
                                <p className="font-medium text-sm">{item.name}</p>
                                <p className="text-xs text-gray-500">{item.supplierName}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-medium">₹{item.price * item.quantity}</p>
                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-orange-600">₹{cartTotal}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Cart</span>
                        </button>
                        <div className="flex items-center space-x-2">
                            <ShoppingCart className="w-8 h-8 text-orange-500" />
                            <span className="text-2xl font-bold text-gray-900">BazaarBuddy</span>
                        </div>
                        <div className="w-20"></div>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <StepIndicator />

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {currentStep === 1 && <AddressForm />}
                        {currentStep === 2 && <PaymentForm />}
                        {currentStep === 3 && (
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                                    Review Your Order
                                </h2>
                                
                                <div className="space-y-6">
                                    <div className="border-b pb-4">
                                        <h3 className="font-semibold text-gray-800 mb-2">Delivery Address</h3>
                                        <p className="text-gray-600">
                                            {addressData.fullName}<br />
                                            {addressData.address}<br />
                                            {addressData.city}, {addressData.state} - {addressData.pincode}<br />
                                            Phone: {addressData.phone}
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Payment Method</h3>
                                        <p className="text-gray-600 capitalize">
                                            {paymentData.method === 'card' && 'Credit/Debit Card'}
                                            {paymentData.method === 'upi' && 'UPI Payment'}
                                            {paymentData.method === 'cod' && 'Cash on Delivery'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        <OrderSummary />
                        
                        <div className="flex space-x-4">
                            {currentStep > 1 && (
                                <button
                                    onClick={() => setCurrentStep(currentStep - 1)}
                                    className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                                >
                                    Previous
                                </button>
                            )}
                            
                            {currentStep < 3 ? (
                                <button
                                    onClick={handleNextStep}
                                    className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                                >
                                    Continue
                                </button>
                            ) : (
                                <button
                                    onClick={handleProceedToPay}
                                    className="flex-1 bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                                >
                                    Proceed to Pay
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}