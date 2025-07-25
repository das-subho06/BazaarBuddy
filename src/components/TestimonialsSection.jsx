import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            business: 'Chaat Corner, Delhi',
            rating: 5,
            text: 'BaazarBuddy helped me find the best spice suppliers in my area. My chaat business has grown 50% since I started using their platform!',
            avatar: '👨‍🍳'
        },
        {
            name: 'Priya Sharma',
            business: 'Dosa Express, Mumbai',
            rating: 5,
            text: 'Finding fresh vegetables was always a challenge. Now I get the best quality ingredients at competitive prices. Highly recommended!',
            avatar: '👩‍🍳'
        },
        {
            name: 'Amit Singh',
            business: 'Pav Bhaji Stall, Pune',
            rating: 5,
            text: 'The community feature is amazing! I learned so many tips from other vendors. BaazarBuddy is more than just a supplier platform.',
            avatar: '👨‍🍳'
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Satisfied Vendors Are Our Best Success Stories
                    </h2>
                </div>

                <div className="relative">
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-12 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="flex space-x-1">
                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                                ))}
                            </div>
                        </div>

                        <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                            "{testimonials[currentTestimonial].text}"
                        </blockquote>

                        <div className="flex items-center justify-center space-x-4">
                            <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                            <div className="text-left">
                                <p className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                                <p className="text-gray-600">{testimonials[currentTestimonial].business}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
