import React, { useState } from 'react';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        // Clear error when user starts typing
        if (errors[id]) {
            setErrors(prev => ({
                ...prev,
                [id]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setIsLoading(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            alert('Registration successful! Welcome to Bright Life Bangladesh.');
            setFormData({ name: '', email: '', password: '' });
        } catch {
            alert('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="registration" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                 <div className="max-w-lg mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-2 font-heading tracking-tight">Become a Member</h2>
                    <p className="text-center text-gray-600 mb-8 font-body">Start your journey to a brighter future today.</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="font-medium text-gray-700 font-body">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full mt-2 p-3 bg-white border rounded-lg form-input ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter your full name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="font-medium text-gray-700 font-body">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full mt-2 p-3 bg-white border rounded-lg form-input ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter your email address"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="font-medium text-gray-700 font-body">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full mt-2 p-3 bg-white border rounded-lg form-input ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Create a strong password"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full btn-gold-gradient text-green-900 font-bold py-3 px-6 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Registration;