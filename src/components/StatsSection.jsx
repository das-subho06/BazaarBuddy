import React from 'react';
import { Users, ShoppingBag, MapPin, TrendingUp } from 'lucide-react';

export default function StatsSection() {
    const stats = [
        {
            icon: Users,
            number: '5K+',
            label: 'Active Vendors',
            description: 'Street Food Vendors'
        },
        {
            icon: ShoppingBag,
            number: '2K+',
            label: 'Trusted Suppliers',
            description: 'Raw Material Suppliers'
        },
        {
            icon: MapPin,
            number: '50+',
            label: 'Cities Covered',
            description: 'Across India'
        },
        {
            icon: TrendingUp,
            number: '95%',
            label: 'Success Rate',
            description: 'Vendor Satisfaction'
        }
    ];

    return (
        <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center text-white">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                                <div className="text-sm opacity-90">{stat.description}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
