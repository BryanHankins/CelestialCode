import React from 'react';

const ReferralLinks: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-emerald">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-emerald">Our Referral Links</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-emerald">Murf AI</h2>
          <p className="text-lg mb-4 text-gray-800">
            <a href="https://get.murf.ai/l4qd1k9xg8l4" className="text-emerald underline">Murf AI</a> is an advanced text-to-speech platform that helps you create professional voiceovers quickly and easily. I recommend Murf AI for its high-quality voice generation, user-friendly interface, and wide range of voice options, making it perfect for content creators and businesses alike.
          </p>
          <button
            onClick={() => window.location.href = 'https://get.murf.ai/l4qd1k9xg8l4'}
            className="bg-emerald hover:bg-dark-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 my-2.5 mx-1.25"
          >
            Go to Murf AI
          </button>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-emerald">Scalenut</h2>
          <p className="text-lg mb-4 text-gray-800">
            <a href="https://www.scalenut.com/?fpr=bryan32" className="text-emerald underline">Scalenut</a> is a comprehensive content research and writing tool that uses AI to help you create high-quality content at scale. I recommend Scalenut for its powerful SEO features, intuitive content planning tools, and ability to streamline your content creation process, making it ideal for marketers and writers.
          </p>
          <button
            onClick={() => window.location.href = 'https://www.scalenut.com/?fpr=bryan32'}
            className="bg-emerald hover:bg-dark-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 my-2.5 mx-1.25"
          >
            Go to Scalenut
          </button>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-emerald">Frase</h2>
          <p className="text-lg mb-4 text-gray-800">
            <a href="https://www.frase.io/?via=bryan79" className="text-emerald underline">Frase</a> is an AI-powered content optimization tool that helps you create content that ranks higher in search engines. I recommend Frase for its ability to generate content briefs, optimize your existing content, and provide insights into what your audience is searching for, making it a valuable tool for SEO professionals and content creators.
          </p>
          <button
            onClick={() => window.location.href = 'https://www.frase.io/?via=bryan79'}
            className="bg-emerald hover:bg-dark-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 my-2.5 mx-1.25"
          >
            Go to Frase
          </button>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-emerald">Writesonic</h2>
          <p className="text-lg mb-4 text-gray-800">
            <a href="https://writesonic.com?fpr=bryan29" className="text-emerald underline">Writesonic</a> is an AI writing assistant that helps you create high-quality content for blogs, ads, emails, and more. I recommend Writesonic for its versatility, ease of use, and ability to generate engaging content quickly, making it a great tool for writers and marketers looking to boost their productivity.
          </p>
          <button
            onClick={() => window.location.href = 'https://writesonic.com?fpr=bryan29'}
            className="bg-emerald hover:bg-dark-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 my-2.5 mx-1.25"
          >
            Go to Writesonic
          </button>
        </div>
        <button
          onClick={() => window.location.href = '/contact'}
          className="bg-emerald hover:bg-dark-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 my-2.5 mx-1.25"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default ReferralLinks;
