import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-emerald">
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-emerald mb-6">About Us</h1>
          <p className="text-lg text-gray-800 mb-6">
            Celestial Code is a company based in Evansville, Indiana, dedicated to empowering individuals to achieve financial independence through affiliate marketing. Our mission is to provide innovative solutions and expert strategies to help you maximize your earning potential.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            In addition to our affiliate marketing services, we are passionate about spreading the joys of the information technology sector to Evansville, a place where there really isn't a tech sector at all. We aim to foster a thriving tech community and inspire others to explore the exciting opportunities within the IT industry.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            Join us on our mission to revolutionize the way people make money online and bring the benefits of the tech sector to new regions.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            At Celestial Code, we believe in continuous learning and growth. Our team is dedicated to staying at the forefront of technological advancements and industry trends. We regularly host workshops, webinars, and community events to share knowledge and empower our community members with the skills they need to succeed.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            Our commitment to excellence drives us to provide top-notch support and resources to our clients. We understand the challenges of affiliate marketing and are here to guide you every step of the way. From personalized coaching to cutting-edge tools, we offer everything you need to achieve your goals.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* New Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-emerald mb-4">Our Commitment to Youth Development</h2>
          <p className="text-lg text-gray-800 mb-6">
            At Celestial Code, we are committed to fostering the next generation of tech talent. We understand the importance of providing opportunities for young, aspiring developers to enter the tech industry. That's why we are planning to hire students straight out of high school who have a passion for technology and a desire to become developers.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            We offer a supportive environment where young developers can learn, grow, and gain real-world experience. Our team of experienced professionals will provide mentorship and training to help them develop the skills needed to succeed in the tech industry. We believe that by investing in young talent, we can help shape the future of technology and create a positive impact in our community.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            If you're a high school student with a passion for technology and a drive to learn, we encourage you to join us. Let's build a brighter future together.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
