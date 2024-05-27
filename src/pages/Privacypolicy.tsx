import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-emerald">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-emerald">Privacy Policy</h1>
        <p className="text-lg mb-4 text-gray-800">
          At Celestial Code, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-emerald">Information We Collect</h2>
        <p className="text-lg mb-4 text-gray-800">
          We may collect personal information such as your name, email address, and other contact details when you subscribe to our email service, fill out a contact form, or interact with our website.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-emerald">How We Use Your Information</h2>
        <p className="text-lg mb-4 text-gray-800">
          The information we collect is used to provide and improve our services, communicate with you, and personalize your experience. We may also use your information to send you promotional materials and updates about our products and services.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-emerald">Sharing Your Information</h2>
        <p className="text-lg mb-4 text-gray-800">
          We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or as necessary to provide our services.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-emerald">Security</h2>
        <p className="text-lg mb-4 text-gray-800">
          We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-emerald">Your Consent</h2>
        <p className="text-lg mb-4 text-gray-800">
          By using our website, you consent to our Privacy Policy. If we make changes to this policy, we will update the Privacy Policy page on our website.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-emerald">Contact Us</h2>
        <p className="text-lg mb-4 text-gray-800">
          If you have any questions about this Privacy Policy, please contact us at: 
          <a href="mailto:bryanhankinsdev@gmail.com" className="text-emerald ml-2 underline my-2.5 mx-1.25">
            bryanhankinsdev@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
