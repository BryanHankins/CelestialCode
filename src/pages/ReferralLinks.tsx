import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReferralLinks: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-emerald">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-emerald">Our Referral Links</h1>
        <p className="text-lg mb-4 text-gray-800">
          At Celestial Code, we offer a comprehensive range of referral links to help you maximize your earnings. By leveraging our network of affiliate programs, you can access exclusive deals and offers that will drive traffic and increase your revenue.
        </p>
        <p className="text-lg mb-4 text-gray-800">
          Why choose our referral links?
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li>Exclusive offers and high commissions</li>
          <li>Easy-to-use tools and resources</li>
          <li>Dedicated support from our expert team</li>
        </ul>
        <p className="text-lg text-gray-800">
          Contact us today to learn more about our referral links and how you can start earning commissions by promoting top products and services.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="bg-emerald hover:bg-dark-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 my-2.5 mx-1.25"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default ReferralLinks;
