import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-emerald">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-emerald">About Us</h1>
        <p className="text-lg mb-4 text-gray-800">
          Celestial Code is a company based in Evansville, Indiana, dedicated to empowering individuals to achieve financial independence through affiliate marketing. Our mission is to provide innovative solutions and expert strategies to help you maximize your earning potential.
        </p>
        <p className="text-lg mb-4 text-gray-800">
          In addition to our affiliate marketing services, we are passionate about spreading the joys of the information technology sector to Evansville, a place where there really isn't a tech sector at all. We aim to foster a thriving tech community and inspire others to explore the exciting opportunities within the IT industry.
        </p>
        <p className="text-lg text-gray-800">
          Join us on our mission to revolutionize the way people make money online and bring the benefits of the tech sector to new regions.
        </p>
        <button
          onClick={() => navigate('/referral-links')}
          className="bg-emerald hover:bg-dark-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 my-2.5 mx-1.25"
        >
          Explore Our Referral Links
        </button>
      </div>
    </div>
  );
};

export default About;
