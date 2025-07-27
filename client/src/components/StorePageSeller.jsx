import React, { useState } from 'react';
import {
  ArrowLeft,
  Package,
  Plus,
  Edit3,
  Trash2,
  Upload,
  MapPin,
  IndianRupee,
  TrendingUp,
  Users,
  ShoppingCart,
  Eye,
  Settings,
  BarChart3,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';
import {useNavigate} from "react-router-dom";

function StorePageSeller() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Red Chili Powder",
      category: "Spices",
      price: 120,
      stock: 50,
      image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "High quality red chili powder perfect for street food vendors",
      locations: ["Mumbai", "Delhi", "Pune"],
      rating: 4.5,
      orders: 45,
      status: 'active'
    },
    {
      id: 2,
      name: "Fresh Onions (1kg)",
      category: "Vegetables",
      price: 40,
      stock: 200,
      image: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Farm fresh onions delivered daily to your location",
      locations: ["Mumbai", "Thane"],
      rating: 4.2,
      orders: 78,
      status: 'active'
    }
  ]);

  const [showAddProduct, setShowAddProduct] = useState(false);

  const stats = [
    { label: 'Total Products', value: '12', icon: Package, color: 'bg-blue-500' },
    { label: 'Total Orders', value: '234', icon: ShoppingCart, color: 'bg-green-500' },
    { label: 'Revenue', value: '₹45,670', icon: IndianRupee, color: 'bg-orange-500' },
    { label: 'Active Locations', value: '8', icon: MapPin, color: 'bg-purple-500' }
  ];

  const ProductCard = ({ product }) => (
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-6">
        <div className="flex items-start space-x-4">
          <img src={product.image} alt={product.name} className="w-20 h-20 rounded-lg object-cover" />
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center text-orange-600">
                  <IndianRupee className="w-4 h-4 mr-1" />
                  {product.price}/kg
                </span>
                  <span className="text-gray-600">Stock: {product.stock}</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {product.rating}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:scale-110">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 hover:scale-110">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300 hover:scale-110">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Locations: {product.locations.join(', ')}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                    product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                {product.status}
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );



  //ADD PRODUCT
  const AddProductForm = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Add New Product</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
              <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter product name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300">
                <option>Spices</option>
                <option>Vegetables</option>
                <option>Packaging</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price per kg (₹)</label>
              <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
              <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="0"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
              <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Describe your product..."
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-all duration-300 hover:scale-105">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Locations</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {['Mumbai', 'Delhi', 'Pune', 'Bangalore', 'Chennai'].map((city) => (
                    <label
                        key={city}
                        className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg hover:bg-orange-50 transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <input type="checkbox" className="text-orange-600" />
                      <span className="text-sm">{city}</span>
                    </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <button className="flex-1 bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Add Product
            </button>
            <button
                onClick={() => setShowAddProduct(false)} // 👈 Ensure `setShowAddProduct` exists in parent scope
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </div>
    );
  };




  return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-all duration-300 hover:scale-105">
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Home</span>
                </button>
                <div className="h-6 w-px bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-8 h-8 text-orange-600" />
                  <span className="text-2xl font-bold text-gray-800">BazaarBuddy</span>
                  <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Supplier</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:text-orange-600 transition-all duration-300 hover:scale-110">
                  <Settings className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Supplier!</h1>
            <p className="text-gray-600">Manage your products and grow your business with BazaarBuddy</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    </div>
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-md mb-8">
            <div className="flex border-b border-gray-200">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'products', label: 'Products', icon: Package },
                { id: 'orders', label: 'Orders', icon: ShoppingCart },
                { id: 'locations', label: 'Locations', icon: MapPin }
              ].map((tab) => (
                  <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 hover:scale-105 ${
                          activeTab === tab.id
                              ? 'text-orange-600 border-b-2 border-orange-600'
                              : 'text-gray-600 hover:text-orange-600'
                      }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
              ))}
            </div>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'products' && (
              <div className="space-y-6">
                {/* Add Product Button */}
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">Your Products</h2>
                  <button
                      onClick={() => setShowAddProduct(!showAddProduct)}
                      className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add Product</span>
                  </button>
                </div>

                {/* Add Product Form */}
                {showAddProduct && <AddProductForm />}

                {/* Products List */}
                <div className="space-y-4">
                  {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
          )}

          {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Recent Orders */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                        <div key={order} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                              <Package className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">Order #00{order}</p>
                              <p className="text-sm text-gray-600">Red Chili Powder - 5kg</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-800">₹600</p>
                            <p className="text-sm text-green-600">Completed</p>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Performance Chart */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Sales Performance</h3>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                      <p className="text-gray-600">Sales chart will be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
          )}

          {activeTab === 'orders' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Management</h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((order) => (
                      <div key={order} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                              <ShoppingCart className="w-6 h-6 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">Order #BZ00{order}</h4>
                              <p className="text-sm text-gray-600">Vendor: Street Food Corner</p>
                              <p className="text-sm text-gray-500">2 items • ₹850</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <p className="text-sm text-gray-600">Jan 15, 2025</p>
                              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                          Delivered
                        </span>
                            </div>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:scale-110">
                              <Eye className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
          )}

          {activeTab === 'locations' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Locations</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {['Mumbai', 'Delhi', 'Pune', 'Bangalore', 'Chennai', 'Hyderabad'].map((city) => (
                      <div key={city} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-6 h-6 text-orange-600" />
                            <div>
                              <h4 className="font-semibold text-gray-800">{city}</h4>
                              <p className="text-sm text-gray-600">Active delivery zone</p>
                            </div>
                          </div>
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                      </div>
                  ))}
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

export default StorePageSeller;
