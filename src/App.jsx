import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import SearchSection from './components/SearchSection';
import CommunitySection from './components/CommunitySection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import StorePage from './components/StorePage';

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [searchData, setSearchData] = useState({
        query: '',
        location: '',
        category: ''
    });

    const handleSearch = (query, location, category) => {
        setSearchData({ query, location, category });
        setCurrentPage('store');
    };

    const handleBackToHome = () => {
        setCurrentPage('home');
    };

    if (currentPage === 'store') {
        return (
            <StorePage
                searchQuery={searchData.query}
                location={searchData.location}
                category={searchData.category}
                onBack={handleBackToHome}
            />
        );
    }

    return (
        <div className="min-h-screen">
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <SearchSection onSearch={handleSearch} />
            <CommunitySection />
            <TestimonialsSection />
            <Footer />
        </div>
    );
}

export default App;
