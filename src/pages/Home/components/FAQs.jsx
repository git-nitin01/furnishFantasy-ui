import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = () => {
    const [openIndices, setOpenIndices] = useState([0]); 
    const toggleFAQ = (index) => {
        setOpenIndices((prevOpenIndices) => {
            if (prevOpenIndices.includes(index)) {
                return prevOpenIndices.filter((i) => i !== index); 
            } else {
                return [...prevOpenIndices, index]; 
            }
        });
    };

    return (
        <div className="container mx-auto py-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
                <div className="grid gap-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(0)}>
                            <h3 className="text-xl font-semibold text-gray-800">How can I track my order?</h3>
                            {openIndices.includes(0) ? <FaChevronUp className="h-6 w-6 text-gray-600" /> : <FaChevronDown className="h-6 w-6 text-gray-600" />}
                        </div>
                        {openIndices.includes(0) && (
                            <p className="text-gray-700 mt-2">
                                You can track your order by logging into your account and checking the order status. Alternatively, you can contact our support team for assistance.
                            </p>
                        )}
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(1)}>
                            <h3 className="text-xl font-semibold text-gray-800">What payment methods do you accept?</h3>
                            {openIndices.includes(1) ? <FaChevronUp className="h-6 w-6 text-gray-600" /> : <FaChevronDown className="h-6 w-6 text-gray-600" />}
                        </div>
                        {openIndices.includes(1) && (
                            <p className="text-gray-700 mt-2">
                                We accept all major credit cards, PayPal, and bank transfers as payment methods.
                            </p>
                        )}
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(2)}>
                            <h3 className="text-xl font-semibold text-gray-800">Do you offer international shipping?</h3>
                            {openIndices.includes(2) ? <FaChevronUp className="h-6 w-6 text-gray-600" /> : <FaChevronDown className="h-6 w-6 text-gray-600" />}
                        </div>
                        {openIndices.includes(2) && (
                            <p className="text-gray-700 mt-2">
                                Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary depending on the destination.
                            </p>
                        )}
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(3)}>
                            <h3 className="text-xl font-semibold text-gray-800">What is your return policy?</h3>
                            {openIndices.includes(3) ? <FaChevronUp className="h-6 w-6 text-gray-600" /> : <FaChevronDown className="h-6 w-6 text-gray-600" />}
                        </div>
                        {openIndices.includes(3) && (
                            <p className="text-gray-700 mt-2">
                                We offer a 30-day return policy for unused and undamaged items. Please refer to our Returns page for more information.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
