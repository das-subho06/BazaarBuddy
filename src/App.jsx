import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import SearchSection from './components/SearchSection';
import CommunitySection from './components/CommunitySection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen">
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <SearchSection />
            <CommunitySection />
            <TestimonialsSection />
            <Footer />
        </div>
    );
}

export default App;
