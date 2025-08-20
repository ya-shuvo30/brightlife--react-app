import React from 'react';
import PolicySection from './PolicySection';

const CustomerSupport = () => (
    <PolicySection id="customersupport" title="Customer Support (গ্রাহক সহায়তা)">
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-heading">24/7 Support</h3>
                <p className="text-gray-600 mb-4">
                    Our dedicated customer support team is available 24/7 to assist you with any queries or concerns.
                </p>
                <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                    <h4 className="font-bold text-emerald-800 mb-2">Emergency Hotline</h4>
                    <p className="text-emerald-700 text-lg font-bold">01806 672338</p>
                </div>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-heading">Support Channels</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-bold text-blue-800">Email Support</h4>
                        <p className="text-blue-700">brightlifebdltd@gmail.com</p>
                        <p className="text-sm text-blue-600">Response within 24 hours</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-green-800">Phone Support</h4>
                        <p className="text-green-700">01806 672338</p>
                        <p className="text-sm text-green-600">Available 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    </PolicySection>
);

export default CustomerSupport;