import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/.netlify/functions/submit-contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus('Message sent successfully.');
    } else {
      setStatus(`Error: ${result.error}`);
    }
  };

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
          Or, use the form below to send us a message directly:
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-800 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border border-emerald bg-white text-emerald rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-emerald bg-white text-emerald rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4 py-2 border border-emerald bg-white text-emerald rounded-lg w-full h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-emerald hover:bg-dark-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 my-2.5 mx-1.25"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-lg text-gray-800">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
