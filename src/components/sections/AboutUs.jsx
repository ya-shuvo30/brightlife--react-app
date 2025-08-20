import React, { useRef } from 'react';
import StatCounter from '../shared/StatCounter';
import { teamMembers, partners } from '../../data/teamData';

const TeamMemberCard = ({ name, title, img }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left - width / 2) / 25;
        const y = (clientY - top - height / 2) / 25;
        cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        cardRef.current.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    };

    return (
        <div style={{ perspective: '1000px' }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div ref={cardRef} className="team-card bg-white p-6 rounded-2xl shadow-lg text-center transition-transform duration-300 ease-out">
                <div className="team-card-inner">
                    <img src={img} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-emerald-200 shadow-md"/>
                    <h3 className="text-xl font-bold text-gray-800 font-heading">{name}</h3>
                    <p className="text-emerald-700 font-medium">{title}</p>
                </div>
            </div>
        </div>
    );
};

const AboutUs = () => {
    const allPartners = [...partners, ...partners]; // Duplicate for seamless scroll effect

    return (
        <section id="aboutus" className="bg-white">
            <div className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 font-heading tracking-tight">Who We Are</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed font-body">Bright Life is dedicated to making a healthier, more affordable lifestyle accessible to everyone in Bangladesh.</p>
                </div>
                <div className="container mx-auto px-6 mt-16 grid md:grid-cols-2 gap-8 max-w-5xl">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-emerald-500">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 font-heading">Our Mission</h3>
                        <p className="text-gray-600 font-body">To simplify daily life by providing affordable access to essential services.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-500">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 font-heading">Our Vision</h3>
                        <p className="text-gray-600 font-body">To be the most trusted platform for lifestyle and healthcare benefits.</p>
                    </div>
                </div>
            </div>
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                    <StatCounter value="10000" label="Members Served" />
                    <StatCounter value="300" label="Partner Hospitals" />
                    <StatCounter value="200" label="Lifestyle Brands" />
                </div>
            </div>
            <div id="ourteam" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-16 font-heading tracking-tight">Meet Our Leadership</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => <TeamMemberCard key={index} {...member} />)}
                    </div>
                </div>
            </div>
            <div id="ourpartners" className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-16 font-heading tracking-tight">Our Valued Partners</h2>
                    <div className="relative w-full overflow-hidden partner-carousel">
                        <div className="carousel-track">
                            {allPartners.map((partner, index) => (
                                <div key={index} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
                                    <img src={partner.logo} alt={partner.name} className="h-16 mx-auto partner-logo"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
