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
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [user, setUser] = useState(null);
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

    const handleLogin = (userData) => {
        // In a real app, you would authenticate with a backend
        setUser(userData);
        setCurrentPage('home');
        console.log('User logged in:', userData);
    };

    const handleRegister = (userData) => {
        // In a real app, you would register with a backend
        setUser(userData);
        setCurrentPage('home');
        console.log('User registered:', userData);
    };

    const handleLogout = () => {
        setUser(null);
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

    if (currentPage === 'login') {
        return (
            <LoginPage
                onBack={handleBackToHome}
                onSwitchToRegister={() => setCurrentPage('register')}
                onLogin={handleLogin}
            />
        );
    }

    if (currentPage === 'register') {
        return (
            <RegisterPage
                onBack={handleBackToHome}
                onSwitchToLogin={() => setCurrentPage('login')}
                onRegister={handleRegister}
            />
        );
    }
    return (
        <div className="min-h-screen">
            <Header 
                mobileMenuOpen={mobileMenuOpen} 
                setMobileMenuOpen={setMobileMenuOpen}
                user={user}
                onLogin={() => setCurrentPage('login')}
                onRegister={() => setCurrentPage('register')}
                onLogout={handleLogout}
            />
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
