import React from 'react';
import air from '../assets/air matress.jpg';
import badmit from '../assets/badmitten.jpg';
import camp from '../assets/camping stove.jpg';
import disc from '../assets/discgolf.jpg';
import grill from '../assets/grill.jpg';
import kidsprinker from '../assets/kidsprinker.jpg';
import lantern from '../assets/lantern.jpg';
import poolfloot from '../assets/poolfloot.jpg';
import slipslide from '../assets/slipandslide.jpg';
import soccer from '../assets/soccar.jpg';
import tracker from '../assets/traker.jpg';
import watergun from '../assets/watergun.jpg';
import waterproof from '../assets/waterproof phone.jpg';
import yogamat from '../assets/yogamat.jpg';

const AmazonReferrals: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-emerald">
      {/* Header */}
      <header className="bg-emerald text-white text-center py-6">
        <h1 className="text-4xl font-bold">Summer Essentials</h1>
        <p className="text-xl">Discover top products for the perfect summer</p>
      </header>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          
          {/* Outdoor Sports */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald mb-4">Outdoor Sports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">EastPoint Sports Easy Setup Badminton Set</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={badmit} alt="EastPoint Sports Easy Setup Badminton Set" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Deluxe Badminton Set that's fun and engaging for players of all skill levels. Includes everything you need for an exciting game with family and friends.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $42.76</p>
                <a href="https://amzn.to/4bNBDOG" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Disc Golf Set</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={disc} alt="Disc Golf Set" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Perfect for new or professional players. Includes 6 discs and a carrying bag, ideal for a fun day at the park.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $23.99</p>
                <a href="https://amzn.to/3yYNpHm" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Camping Comfort */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald mb-4">Camping Comfort</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Air Mattress</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={air} alt="Air Mattress" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">18" Queen Inflatable Mattress for Camping, Travel, Sleeping, Portable Size. Provides superior comfort and support for a restful night's sleep outdoors.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $49.99</p>
                <a href="https://amzn.to/3yOtF9u" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Lighting EVER Camping Lantern</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={lantern} alt="Lighting EVER Camping Lantern" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Rechargeable lantern with 4 light modes, IP44 waterproof rating. Perfect for camping trips and emergency situations.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $25.59</p>
                <a href="https://amzn.to/3Vr3ajl" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Picnic Essentials */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald mb-4">Picnic Essentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Char-Broil Portable Gas Grill</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={grill} alt="Char-Broil Portable Gas Grill" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Portable gas grill perfect for outdoor cooking with a 13-piece tool set. Ideal for tailgating, camping, and backyard barbecues.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $57.98</p>
                <a href="https://amzn.to/4c66MNb" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Camping Stove</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={camp} alt="Camping Stove" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Portable Butane Stove, perfect for camping, picnics, hiking, and BBQ. Easy to use and clean, with a powerful burner for quick cooking.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $24.67</p>
                <a href="https://amzn.to/3Vv94Pp" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Water Fun */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald mb-4">Water Fun</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">WILSON Traditional Soccer Ball</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={soccer} alt="WILSON Traditional Soccer Ball" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Enjoy playing with this WILSON traditional soccer ball, available in size 4 and featuring a classic black and white design. Durable construction ensures long-lasting fun.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $15.99</p>
                <a href="https://amzn.to/3XbbMfo" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">JAMBO Slip Splash and Slide</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={slipslide} alt="JAMBO Slip Splash and Slide" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Experience summer fun with the JAMBO Slip Splash and Slide. This heavy-duty water slide comes with 3 bodyboards and an advanced sprinkler system for hours of fun.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $40.99</p>
                <a href="https://amzn.to/3Kv8SdH" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Beach Essentials */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald mb-4">Beach Essentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">TORRAS Waterproof Phone Pouch</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={waterproof} alt="TORRAS Waterproof Phone Pouch" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Keep your phone safe with the TORRAS waterproof pouch, perfect for underwater photography and floating on water. It fits all large smartphones up to 7 inches.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $20.99</p>
                <a href="https://amzn.to/4e1l0k6" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">2 Pack Inflatable Pool Float Mat</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={poolfloot} alt="Inflatable Pool Float Mat" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Relax on these oversized inflatable pool float mats with ergonomic headrests. Perfect for lounging in the pool, at the beach, or on the lake.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $29.99</p>
                <a href="https://amzn.to/3yLZwYl" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Kids' Summer Fun */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald mb-4">Kids' Summer Fun</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Water Play Sprinkler Set</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={kidsprinker} alt="Water Play Sprinkler Set" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Fun for kids with this 2-in-1 water play sprinkler set. Easy to install and durable, perfect for backyard activities.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $19.99</p>
                <a href="https://amzn.to/3KwO1XC" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Electric Water Gun</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={watergun} alt="Electric Water Gun" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Enjoy summer fun with the Electric Water Gun, featuring strong power and up to 25 FT long range. Perfect for kids and adults.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $23.99</p>
                <a href="https://amzn.to/459t26A" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Fitness and Wellness */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald mb-4">Fitness and Wellness</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Amazon Basics Yoga Mat</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={yogamat} alt="Amazon Basics Yoga Mat" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Extra thick, cushy floor mat in Blue for yoga, gym, and everyday exercise. Provides excellent support and comfort for all your fitness needs.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $20.18</p>
                <a href="https://amzn.to/3yRCDmA" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Health Fitness Tracker</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={tracker} alt="Health Fitness Tracker" className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Monitor your health with this fitness tracker that tracks heart rate, blood oxygen, blood pressure, and sleep. It's a comprehensive tool to help you stay on top of your wellness goals.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $49.99</p>
                <a href="https://amzn.to/4aOhnv2" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AmazonReferrals;
