import React from 'react';
import Icon from '../shared/Icon';
import { coreServices } from '../../data/plansData'; // Note: plans data is now local to this component

const OurServices = () => {
    const plans = [
        { 
            name: 'Silver (1 Year)', 
            price: '1,500', 
            duration: '/year', 
            features: [
                '24/7 Tele-Doctor & Specialist Consultation', 
                'Discounts: Hospital, Medicine (Up to 15%), Shops (Up to 30%)',
                'Hospitalization: ৳5,000 Cashback (1 Year) & 10 Nights',
                'Life Coverage: AD ৳100,000 & ND ৳50,000',
                'Gift & Tour by Lottery'
            ], 
            featured: false 
        },
        { 
            name: 'Bronze (2 Years)', 
            price: '2,500', 
            duration: '/year', 
            features: [
                'All Silver Features',
                'Increased Cashback: ৳10,000 (2 Years)',
                'Increased Stay: 20 Nights',
                'Life Coverage: AD ৳100,000 & ND ৳50,000',
                'Gift & Tour by Lottery'
            ], 
            featured: false 
        },
        { 
            name: 'Gold (3 Years)', 
            price: '3,500', 
            duration: '/year', 
            features: [
                'All Bronze Features',
                'Highest Cashback: ৳15,000 (3 Years)',
                'Increased Stay: 30 Nights',
                'Life Coverage: AD ৳100,000 & ND ৳50,000',
                'Exclusive Gifts & Tours'
            ], 
            featured: true 
        },
    ];

    return (
        <section id="ourservices" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 font-heading tracking-tight">Our Services & Plans</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed font-body">Transparent plans designed for your well-being and security.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
                    {coreServices.map(service => (
                        <div key={service.title} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-emerald-500 text-center">
                            <div className="bg-emerald-100 text-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <Icon path={service.icon} className="w-8 h-8" solid/>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3 font-heading">{service.title}</h3>
                            <p className="text-gray-600 font-body">{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                    {plans.map(plan => (
                        <div key={plan.name} className={`pricing-card bg-white rounded-2xl shadow-lg p-8 flex flex-col ${plan.featured ? 'border-4 border-amber-400' : 'border-4 border-transparent'}`}>
                            <h3 className="text-2xl font-bold text-gray-800 font-heading">{plan.name}</h3>
                            <div className="my-8">
                                <span className="text-5xl font-extrabold text-gray-900 font-heading">৳{plan.price}</span>
                                <span className="text-lg text-gray-500 font-medium">{plan.duration}</span>
                            </div>
                            <ul className="space-y-4 mb-8 text-gray-600 font-body flex-grow">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" solid />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full mt-auto font-bold py-3 px-6 rounded-lg transition-colors ${plan.featured ? 'btn-gold-gradient text-green-900' : 'bg-emerald-500 text-white hover:bg-emerald-600'}`}>Choose Plan</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
