import React from 'react';

const Home = ({ navigateTo }) => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden animated-gradient">
            <div className="relative z-10 text-center px-4 flex flex-col items-center">
                <img 
                    src="https://www.brightlifebd.com/Untitled-1-01.png" 
                    alt="Bright Life Bangladesh Logo" 
                    className="h-28 w-28 md:h-36 md:w-36 mx-auto mb-8 rounded-full shadow-2xl bg-white/20 p-2 logo-animation"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/144x144/ffffff/059669?text=BL'; }}
                />
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 font-heading">Your Future, Brighter.</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-10 font-body leading-relaxed">Bright Life Bangladesh offers premier health coverage and exclusive discounts to ensure your peace of mind.</p>
                <button onClick={() => navigateTo('Registration')} className="btn-gold-gradient text-green-900 font-bold py-4 px-10 rounded-full text-lg shadow-xl">
                    Become a Member
                </button>
            </div>
        </section>
    );
};

export default Home;
