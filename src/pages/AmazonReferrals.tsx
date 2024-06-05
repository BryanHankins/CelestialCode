import React from 'react';

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
                  <img src="https://m.media-amazon.com/images/I/71U96xg2SUL._AC_SL1500_.jpg" alt="EastPoint Sports Easy Setup Badminton Set" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Deluxe Badminton Set that's fun and engaging for players of all skill levels.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $42.76</p>
                <a href="https://amzn.to/4bNBDOG" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Disc Golf Set</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src="https://m.media-amazon.com/images/I/71uWT1MaS1L._AC_SX679_.jpg" alt="Disc Golf Set" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Perfect for new or professional players. Includes 6 discs and a carrying bag.</p>
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
                  <img src="https://m.media-amazon.com/images/I/71RONeKiVNL._AC_SL1500_.jpg" alt="Air Mattress" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">18" Queen Inflatable Mattress for Camping, Travel, Sleeping, Portable Size.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $49.99</p>
                <a href="https://amzn.to/3yOtF9u" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Lighting EVER Camping Lantern</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src="https://m.media-amazon.com/images/I/51QvaCt0jsL._AC_SX679_.jpg" alt="Lighting EVER Camping Lantern" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Rechargeable lantern with 4 light modes, IP44 waterproof rating.</p>
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
                  <img src="https://m.media-amazon.com/images/I/51G-fiB9Z-L._AC_SL1001_.jpg" alt="Char-Broil Portable Gas Grill" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Portable gas grill perfect for outdoor cooking with a 13-piece tool set.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $57.98</p>
                <a href="https://amzn.to/4c66MNb" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Camping Stove</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src="https://m.media-amazon.com/images/I/61b+DnmrOoL._AC_SX679_.jpg" alt="Camping Stove" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Portable Butane Stove, perfect for camping, picnics, hiking, and BBQ.</p>
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
                  <img src="https://m.media-amazon.com/images/I/51c78SyDkDS._AC_SX466_.jpg" alt="WILSON Traditional Soccer Ball" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">WILSON Traditional Soccer Ball - Size 4, Black/White.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $15.99</p>
                <a href="https://amzn.to/3XbbMfo" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">JAMBO Slip Splash and Slide</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src="https://m.media-amazon.com/images/I/71v5TyxSklL._AC_SL1000_.jpg" alt="JAMBO Slip Splash and Slide" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Heavy Duty Water Slide with Advanced 3-Way Water Sprinkler System.</p>
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
                  <img src="https://m.media-amazon.com/images/I/81NPwpqcT1L._AC_SX522_.jpg" alt="TORRAS Waterproof Phone Pouch" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">IPX8 Waterproof, Floating, Underwater Screen Touchable.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $20.99</p>
                <a href="https://amzn.to/4e1l0k6" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">2 Pack Inflatable Pool Float Mat</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src="https://m.media-amazon.com/images/I/91k-Ch9hfuL._AC_SX679_.jpg" alt="Inflatable Pool Float Mat" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Giant Pool Floats Adult Size with Headrest, Lake Float Raft Water Lounger.</p>
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
                  <img src="https://m.media-amazon.com/images/I/81XSV2FZ28L._AC_SX679_.jpg" alt="Water Play Sprinkler Set" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">2 in 1- Sprinkler Hose and Circular Sprinkler Ring, Fun Outdoor Water Toys for Kids.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $19.99</p>
                <a href="https://amzn.to/3KwO1XC" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Electric Water Gun</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src="https://m.media-amazon.com/images/I/81h3q3HNH8L._AC_SX679_.jpg" alt="Electric Water Gun" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Water Guns for Adults Kids, Strong Power, Up to 25 FT Long Range.</p>
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
                  <img src="https://m.media-amazon.com/images/I/7153xLfdwAL._AC_SX679_.jpg" alt="Amazon Basics Yoga Mat" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">Extra thick, cushy floor mat in Blue for yoga, gym, and everyday exercise.</p>
                <p className="text-lg text-gray-800 mb-4">Price: $20.18</p>
                <a href="https://amzn.to/3yRCDmA" className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">Health Fitness Tracker</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src="https://m.media-amazon.com/images/I/61dr0pCOsIL._AC_SX466_.jpg" alt="Health Fitness Tracker" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">24/7 Heart Rate, Blood Oxygen, Blood Pressure, Sleep Tracker.</p>
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
