import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-emerald">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-emerald">Contact Us</h1>
        <p className="text-lg mb-4 text-gray-800">
          For any inquiries or more information about our services and referral programs, please contact us at:
        </p>
        <a
          href="mailto:bryanhankinsdev@gmail.com"
          className="text-emerald underline my-2.5 mx-1.25"
        >
          bryanhankinsdev@gmail.com
        </a>
        <p className="text-lg mt-4 text-gray-800">
          We're here to help you every step of the way. Get in touch with us today to start your journey towards financial independence.
        </p>
      </div>
    </div>
  );
};

export default Contact;
