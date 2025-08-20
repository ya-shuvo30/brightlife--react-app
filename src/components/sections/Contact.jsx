import React, { useState } from 'react';
import Icon from '../shared/Icon';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id.replace('contact-', '')]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            alert('Message sent successfully! We will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            alert('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

     return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 font-heading tracking-tight">Get in Touch</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed font-body">We're here to help. Reach out with any questions or inquiries.</p>
                </div>
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-gray-50 p-8 md:p-12 rounded-2xl shadow-xl">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 font-heading">Contact Information</h3>
                        <div className="flex items-start space-x-4">
                            <Icon path="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" solid/>
                            <div>
                                <h4 className="font-bold text-gray-800">Phone</h4>
                                <p className="text-gray-600">01806 672338</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Icon path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" solid/>
                            <div>
                                <h4 className="font-bold text-gray-800">Email</h4>
                                <p className="text-gray-600">brightlifebdltd@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Icon path="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" solid/>
                            <div>
                                <h4 className="font-bold text-gray-800">Address</h4>
                                <p className="text-gray-600">Saiham Sky View Tower (14th Floor), 45 Bijoy Nagar, Ramna, Dhaka-1000</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="contact-name" className="font-medium text-gray-700 font-body">Your Name</label>
                            <input 
                                type="text" 
                                id="contact-name" 
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 bg-white border border-gray-300 rounded-lg form-input"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="contact-email" className="font-medium text-gray-700 font-body">Your Email</label>
                            <input 
                                type="email" 
                                id="contact-email" 
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 bg-white border border-gray-300 rounded-lg form-input"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="contact-message" className="font-medium text-gray-700 font-body">Message</label>
                            <textarea 
                                id="contact-message" 
                                rows="4" 
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 bg-white border border-gray-300 rounded-lg form-input resize-none"
                                placeholder="Tell us how we can help you"
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full btn-gold-gradient text-green-900 font-bold py-3 px-6 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
     );
};

export default Contact;