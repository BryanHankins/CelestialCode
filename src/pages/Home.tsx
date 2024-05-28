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

  const redirectToSignup = () => {
    window.location.href = 'https://lb.benchmarkemail.com//listbuilder/signupnew?IkfHTmyPVq%252BE4yaUvcDMH%252F5pwVnAjsSIAa2n1gFziWPtO5iNRn8gS049TyW7spdJ';
  };

  return (
    <div className="min-h-screen bg-white text-emerald">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-emerald text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to Celestial Code</h1>
        <p className="text-xl mb-6 max-w-2xl">
          At Celestial Code, we empower you to achieve financial independence through innovative affiliate marketing solutions. Leverage our expertise and state-of-the-art technology to maximize your earning potential.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={redirectToSignup}
            className="bg-white text-emerald font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-gray-200"
          >
            Join Our Email List
          </button>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-emerald mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-emerald">Comprehensive Training</h3>
              <p className="text-lg text-gray-800">Get access to in-depth training resources to help you excel in affiliate marketing.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-emerald">Robust Tracking</h3>
              <p className="text-lg text-gray-800">Utilize our powerful tracking tools to monitor your performance and optimize your strategies.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-emerald">Wide Range of Programs</h3>
              <p className="text-lg text-gray-800">Choose from a variety of affiliate programs that suit your niche and target audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-emerald mb-4">Our Goal</h2>
          <p className="text-lg text-gray-800 mb-6">
            Our journey began with a dream and a determination to make a difference. In a small town with little to no access to technology, we saw a gap and an opportunity. With minimal resources and countless sleepless nights, we started from nothing. The road was tough, filled with obstacles and setbacks, but we never gave up. Through perseverance and a relentless pursuit of our vision, Celestial Code was born. Today, we stand as a testament to what can be achieved with hard work, dedication, and a belief in creating something extraordinary from nothing.
          </p>
          <button
            onClick={() => navigate('/about')}
            className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald"
          >
            Learn More About Us
          </button>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
