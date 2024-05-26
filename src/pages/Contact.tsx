import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">
        For any inquiries or more information, please contact us at: 
        <a href="mailto:bryanhankinsdev@gmail.com" className="text-blue-400 ml-2">
          bryanhankinsdev@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
