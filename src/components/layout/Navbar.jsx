import React, { useState, useEffect } from 'react';
import Icon from '../shared/Icon';

const Navbar = ({ navigateTo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigate = (page) => {
        navigateTo(page);
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsServicesDropdownOpen(false);
        setIsMoreDropdownOpen(false);
    };

    const headerClasses = isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-emerald-800'; // Solid green background
    const textClasses = isScrolled 
        ? 'text-gray-800' 
        : 'text-white';
    const hoverTextClasses = isScrolled 
        ? 'hover:text-emerald-600' 
        : 'hover:text-amber-300';
    const logoColor1 = isScrolled ? 'text-emerald-700' : 'text-white';
    const logoColor2 = isScrolled ? 'text-amber-500' : 'text-amber-300';

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerClasses}`}>
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#" onClick={() => handleNavigate('Home')} className="text-2xl font-extrabold tracking-tight font-heading">
                    <span className={logoColor1}>Bright</span>
                    <span className={logoColor2}>Life</span>
                </a>
                <div className={`hidden md:flex items-center space-x-6 font-medium ${textClasses}`}>
                    <a href="#" onClick={() => handleNavigate('Home')} className={`${hoverTextClasses} transition-colors`}>Home</a>
                    <div className="relative">
                        <button onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)} className={`flex items-center ${hoverTextClasses} transition-colors`}>
                            About Us <Icon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-4 h-4 ml-1" solid />
                        </button>
                        {isAboutDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-20">
                                <a href="#" onClick={() => handleNavigate('AboutUs')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Overview</a>
                                <a href="#" onClick={() => handleNavigate('OurTeam')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</a>
                                <a href="#" onClick={() => handleNavigate('OurPartners')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Partners</a>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <button onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)} className={`flex items-center ${hoverTextClasses} transition-colors`}>
                            Services <Icon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-4 h-4 ml-1" solid />
                        </button>
                        {isServicesDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-20">
                                <a href="#" onClick={() => handleNavigate('OurServices')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Plans & Pricing</a>
                                <a href="#" onClick={() => handleNavigate('NetworkHospital')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Network Hospitals</a>
                                <a href="#" onClick={() => handleNavigate('SuperShop')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Super Shops</a>
                                <a href="#" onClick={() => handleNavigate('Transportation')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Transportation</a>
                            </div>
                        )}
                    </div>
                    <a href="#" onClick={() => handleNavigate('Contact')} className={`${hoverTextClasses} transition-colors`}>Contact</a>
                    <div className="relative">
                        <button onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)} className={`flex items-center ${hoverTextClasses} transition-colors`}>
                            More <Icon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-4 h-4 ml-1" solid />
                        </button>
                        {isMoreDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-20">
                                <a href="#" onClick={() => handleNavigate('ValuedMembers')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Valued Members</a>
                                <a href="#" onClick={() => handleNavigate('InsurancePartner')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Insurance Partner</a>
                                <a href="#" onClick={() => handleNavigate('CustomerSupport')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Customer Support</a>
                                <a href="#" onClick={() => handleNavigate('TermsAndConditions')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Terms & Conditions</a>
                                <a href="#" onClick={() => handleNavigate('PrivacyPolicy')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Privacy Policy</a>
                                <a href="#" onClick={() => handleNavigate('ReturnAndRefundPolicy')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Return & Refund Policy</a>
                            </div>
                        )}
                    </div>
                </div>
                <a href="#" onClick={() => handleNavigate('Registration')} className="hidden md:block btn-gold-gradient text-green-900 font-bold py-2 px-6 rounded-full">Register</a>
                 <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${textClasses} focus:outline-none z-50 relative`}>
                        <Icon path={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                    </button>
                </div>
        </nav>
        {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-gray-900/95 z-40 flex flex-col items-center justify-center space-y-5 text-white">
                <a href="#" onClick={() => handleNavigate('Home')} className="text-2xl hover:text-amber-300">Home</a>
                <a href="#" onClick={() => handleNavigate('AboutUs')} className="text-2xl hover:text-amber-300">About Us</a>
                <a href="#" onClick={() => handleNavigate('OurServices')} className="text-2xl hover:text-amber-300">Services</a>
                <a href="#" onClick={() => handleNavigate('Contact')} className="text-2xl hover:text-amber-300">Contact</a>
                <a href="#" onClick={() => handleNavigate('Registration')} className="mt-4 block w-auto btn-gold-gradient text-green-900 font-bold py-3 px-8 rounded-full">Register</a>
            </div>
        )}
    </header>
);
};

export default Navbar;
