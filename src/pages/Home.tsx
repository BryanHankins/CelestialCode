import React, { useState } from 'react';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-emerald">
      <div className="px-6 py-8 bg-white rounded-lg shadow-lg max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-emerald">Welcome to Celestial Code</h1>
        <p className="text-xl mb-6 text-gray-800">
          At Celestial Code, we empower you to achieve financial independence through innovative affiliate marketing solutions. Leverage our expertise and state-of-the-art technology to maximize your earning potential. We believe in providing you with the best tools and strategies to help you succeed in the competitive world of affiliate marketing.
        </p>
        <p className="text-xl mb-6 text-gray-800">
          Whether you're an experienced marketer or just getting started, Celestial Code provides the tools and resources you need to succeed. Our platform offers comprehensive training, robust tracking, and a wide range of affiliate programs to choose from. Explore the opportunities that await you and take control of your financial future with Celestial Code.
        </p>
        <div className="flex justify-center">
          <button
            onClick={openModal}
            className="bg-emerald hover:bg-dark-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 my-2.5 mx-1.25"
          >
            Join Our Email List
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div className="mt-12 px-6 py-8 bg-white rounded-lg shadow-lg max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-emerald mb-4">Our Goal</h2>
        <p className="text-lg text-gray-800">
          Our journey began with a dream and a determination to make a difference. In a small town with little to no access to technology, we saw a gap and an opportunity. With minimal resources and countless sleepless nights, we started from nothing. The road was tough, filled with obstacles and setbacks, but we never gave up. Through perseverance and a relentless pursuit of our vision, Celestial Code was born. Today, we stand as a testament to what can be achieved with hard work, dedication, and a belief in creating something extraordinary from nothing.
        </p>
        <button
          onClick={() => navigate('/about')}
          className="bg-emerald hover:bg-dark-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 my-2.5 mx-1.25"
        >
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default Home;
