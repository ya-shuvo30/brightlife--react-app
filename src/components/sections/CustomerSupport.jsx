import React from 'react';
import PolicySection from './PolicySection.jsx';

const CustomerSupport = () => (
    <PolicySection id="customersupport" title="Customer Support">
        <div className="space-y-4">
            <p>Our dedicated support team is here to help you with any questions or issues. Please feel free to reach out to us through any of the channels below.</p>
            <div>
                <h4 className="font-bold text-lg">Support Hours</h4>
                <p><strong>Saturday - Thursday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Friday:</strong> Closed</p>
            </div>
             <div>
                <h4 className="font-bold text-lg">Contact Us</h4>
                <p><strong>Phone:</strong> 01806 672338</p>
                <p><strong>Email:</strong> support@brightlifebd.com</p>
            </div>
        </div>
    </PolicySection>
);

export default CustomerSupport;
