import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, ShoppingCart, Store, User, Phone, MapPin } from 'lucide-react';
import { useAuthStore } from '../store/authStore.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage({ onBack, onSwitchToLogin, onRegister }) {
    const { formData, setField, resetForm, error, setError } = useAuthStore();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setField(name, value);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.userType) {
            newErrors.userType = 'Please select a user type';
        }

        if (!formData.fullName) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        // Business fields are now required for SUPPLIER, not vendor
        if (formData.userType === 'supplier') {
            if (!formData.businessName) {
                newErrors.businessName = 'Business name is required';
            }
            if (!formData.location) {
                newErrors.location = 'Location is required';
            }
            if (!formData.category) {
                newErrors.category = 'Business category is required';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Format phone number to E.164
        const formattedPhone = `+91${formData.phone.replace(/\D/g, '')}`;

        const dataToSend = {
            ...formData,
            phone: formattedPhone,
        };

        try {
            const res = await axios.post(
                'http://localhost:5000/api/auth/register',
                dataToSend,
                { withCredentials: true }
            );

            if (res.status === 201) {
                navigate('/phoneAuthentication');
            }
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Something went wrong');
        }
        console.log(formData);
    };


    function navToLogin() {
        if(formData.userType === 'vendor')
        {
            navigate('/login');
        }
        else
        {
            navigate('/SupplierSubscription');
        }

    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
            {/* Header */}
            <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={onBack}
                            className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Home</span>
                        </button>
                        <div className="flex items-center space-x-2">
                            <ShoppingCart className="w-8 h-8 text-orange-500" />
                            <span className="text-2xl font-bold text-gray-900">BaazarBuddy</span>
                        </div>
                        <div className="w-20"></div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="bg-white rounded-3xl shadow-2xl p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Join BaazarBuddy!</h2>
                            <p className="text-gray-600">Create your account to get started</p>
                        </div>

                        {/* User Type Selection */}
                        <div className="mb-6">
                            <div className="flex bg-gray-100 rounded-xl p-1">
                                <button
                                    type="button"
                                    onClick={() => setField('userType', 'vendor')}
                                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${
                                        formData.userType === 'vendor'
                                            ? 'bg-orange-500 text-white shadow-md'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    <User className="w-5 h-5" />
                                    <span className="font-medium">Vendor</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setField('userType', 'supplier')}
                                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${
                                        formData.userType === 'supplier'
                                            ? 'bg-orange-500 text-white shadow-md'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    <Store className="w-5 h-5" />
                                    <span className="font-medium">Supplier</span>
                                </button>
                            </div>
                            {formData.userType && (
                                <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-blue-800">
                                        {formData.userType === 'vendor'
                                            ? '🛒 As a Vendor, you can browse and purchase from suppliers with a simple account setup.'
                                            : '🏪 As a Supplier, you provide goods/services and need to setup your business profile.'
                                        }
                                    </p>
                                </div>
                            )}
                            {errors.userType && <p className="mt-1 text-sm text-red-600">{errors.userType}</p>}
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName || ''}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                                            errors.fullName ? 'border-red-300' : 'border-gray-200'
                                        }`}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email || ''}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                                            errors.email ? 'border-red-300' : 'border-gray-200'
                                        }`}
                                        placeholder="Enter your email"
                                    />
                                </div>
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone || ''}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                                            errors.phone ? 'border-red-300' : 'border-gray-200'
                                        }`}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                            </div>

                            {/* Supplier-specific fields (swapped from vendor) */}
                            {formData.userType === 'supplier' && (
                                <>
                                    <div className="border-t border-gray-200 pt-4 mt-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <Store className="w-5 h-5 mr-2 text-orange-500" />
                                            Business Information
                                        </h3>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Business Name
                                        </label>
                                        <div className="relative">
                                            <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                name="businessName"
                                                value={formData.businessName || ''}
                                                onChange={handleInputChange}
                                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                                                    errors.businessName ? 'border-red-300' : 'border-gray-200'
                                                }`}
                                                placeholder="Enter your business name"
                                            />
                                        </div>
                                        {errors.businessName && <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Business Location
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location || ''}
                                                onChange={handleInputChange}
                                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                                                    errors.location ? 'border-red-300' : 'border-gray-200'
                                                }`}
                                                placeholder="Enter your business location"
                                            />
                                        </div>
                                        {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Business Category
                                        </label>
                                        <select
                                            name="category"
                                            value={formData.category || ''}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                                                errors.category ? 'border-red-300' : 'border-gray-200'
                                            }`}
                                        >
                                            <option value="">Select your business category</option>
                                            <option value="food-supplier">Food & Ingredients Supplier</option>
                                            <option value="packaging">Packaging & Supplies</option>
                                            <option value="equipment">Kitchen Equipment</option>
                                            <option value="wholesale">Wholesale Distributor</option>
                                            <option value="manufacturing">Food Manufacturing</option>
                                            <option value="logistics">Logistics & Delivery</option>
                                            <option value="other">Other Services</option>
                                        </select>
                                        {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
                                    </div>
                                </>
                            )}

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password || ''}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                                            errors.password ? 'border-red-300' : 'border-gray-200'
                                        }`}
                                        placeholder="Create a password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword || ''}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                                            errors.confirmPassword ? 'border-red-300' : 'border-gray-200'
                                        }`}
                                        placeholder="Confirm your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-start space-x-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mt-1"
                                    required
                                />
                                <span className="text-sm text-gray-600">
                                    I agree to the{' '}
                                    <button type="button" className="text-orange-500 hover:text-orange-600 underline">
                                        Terms of Service
                                    </button>{' '}
                                    and{' '}
                                    <button type="button" className="text-orange-500 hover:text-orange-600 underline">
                                        Privacy Policy
                                    </button>
                                </span>
                            </div>

                            {/* Error Display */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                                    <p className="text-sm text-red-600">{error}</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button onClick={()=>navToLogin()}
                                type="submit"
                                disabled={!formData.userType}
                                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                                    formData.userType
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                {formData.userType === 'vendor'
                                    ? 'Create Vendor Account'
                                    : formData.userType === 'supplier'
                                        ? 'Create Supplier Account'
                                        : 'Select Account Type'
                                }
                            </button>
                        </form>

                        {/* Login Link */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Already have an account?{' '}
                                <button
                                    onClick={onSwitchToLogin}
                                    className="text-orange-500 hover:text-orange-600 font-semibold transition-colors underline"
                                >
                                    Sign in here
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}