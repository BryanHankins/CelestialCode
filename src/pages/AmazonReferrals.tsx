import React, { useEffect, useState } from 'react';
import air from '../assets/air-matress.jpg';
import badmit from '../assets/badmitten.jpg';
import camp from '../assets/camping-stove.jpg';
import disc from '../assets/discgolf.jpg';
import grill from '../assets/grill.jpg';
import kidsprinker from '../assets/kidsprinker.jpg';
import lantern from '../assets/lantern.jpg';
import poolfloot from '../assets/poolfloot.jpg';
import slipslide from '../assets/slipandslide.jpg';
import soccer from '../assets/soccer.jpg';
import tracker from '../assets/traker.jpg';
import watergun from '../assets/watergun.jpg';
import waterproof from '../assets/waterproof-phone.jpg';
import yogamat from '../assets/yogamat.jpg';
import SearchBar from '../components/SearchBar';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  link: string;
}

const products: Product[] = [
  { id: '1', name: 'Water Play Sprinkler Set', image: kidsprinker, description: 'Fun for kids with this 2-in-1 water play sprinkler set. Easy to install and durable, perfect for backyard activities.', price: '$19.99', link: 'https://amzn.to/3KwO1XC' },
  { id: '2', name: 'Electric Water Gun', image: watergun, description: 'Enjoy summer fun with this Electric Water Gun, featuring strong power and up to 25 FT long range. Perfect for kids and adults.', price: '$23.99', link: 'https://amzn.to/459t26A' },
  { id: '3', name: 'EastPoint Sports Easy Setup Badminton Set', image: badmit, description: 'Deluxe Badminton Set that\'s fun and engaging for players of all skill levels. Includes everything you need for an exciting game with family and friends.', price: '$42.76', link: 'https://amzn.to/4bNBDOG' },
  { id: '4', name: 'Disc Golf Set', image: disc, description: 'Perfect for new or professional players. Includes 6 discs and a carrying bag, ideal for a fun day at the park.', price: '$23.99', link: 'https://amzn.to/3yYNpHm' },
  { id: '5', name: 'Air Mattress', image: air, description: '18" Queen Inflatable Mattress for Camping, Travel, Sleeping, Portable Size. Provides superior comfort and support for a restful night\'s sleep outdoors.', price: '$49.99', link: 'https://amzn.to/3yOtF9u' },
  { id: '6', name: 'Lighting EVER Camping Lantern', image: lantern, description: 'Rechargeable lantern with 4 light modes, IP44 waterproof rating. Perfect for camping trips and emergency situations.', price: '$25.59', link: 'https://amzn.to/3Vr3ajl' },
  { id: '7', name: 'Char-Broil Portable Gas Grill', image: grill, description: 'Portable gas grill perfect for outdoor cooking with a 13-piece tool set. Ideal for tailgating, camping, and backyard barbecues.', price: '$57.98', link: 'https://amzn.to/4c66MNb' },
  { id: '8', name: 'Camping Stove', image: camp, description: 'Portable Butane Stove, perfect for camping, picnics, hiking, and BBQ. Easy to use and clean, with a powerful burner for quick cooking.', price: '$24.67', link: 'https://amzn.to/3Vv94Pp' },
  { id: '9', name: 'WILSON Traditional Soccer Ball', image: soccer, description: 'Enjoy playing with this WILSON traditional soccer ball, available in size 4 and featuring a classic black and white design. Durable construction ensures long-lasting fun.', price: '$15.99', link: 'https://amzn.to/3XbbMfo' },
  { id: '10', name: 'JAMBO Slip Splash and Slide', image: slipslide, description: 'Experience summer fun with the JAMBO Slip Splash and Slide. This heavy-duty water slide comes with 3 bodyboards and an advanced sprinkler system for hours of fun.', price: '$40.99', link: 'https://amzn.to/3Kv8SdH' },
  { id: '11', name: 'TORRAS Waterproof Phone Pouch', image: waterproof, description: 'Keep your phone safe with the TORRAS waterproof pouch, perfect for underwater photography and floating on water. It fits all large smartphones up to 7 inches.', price: '$20.99', link: 'https://amzn.to/4e1l0k6' },
  { id: '12', name: '2 Pack Inflatable Pool Float Mat', image: poolfloot, description: 'Relax on these oversized inflatable pool float mats with ergonomic headrests. Perfect for lounging in the pool, at the beach, or on the lake.', price: '$29.99', link: 'https://amzn.to/3yLZwYl' },
  { id: '13', name: 'Amazon Basics Yoga Mat', image: yogamat, description: 'Extra thick, cushy floor mat in Blue for yoga, gym, and everyday exercise. Provides excellent support and comfort for all your fitness needs.', price: '$20.18', link: 'https://amzn.to/3yRCDmA' },
  { id: '14', name: 'Health Fitness Tracker', image: tracker, description: 'Monitor your health with this fitness tracker that tracks heart rate, blood oxygen, blood pressure, and sleep. It\'s a comprehensive tool to help you stay on top of your wellness goals.', price: '$49.99', link: 'https://amzn.to/4aOhnv2' }
];

const keywordMapping: { [key: string]: string[] } = {
  'water play': ['1'],
  'sprinkler': ['1'],
  'electric water gun': ['2'],
  'water gun': ['2'],
  'badminton': ['3'],
  'disc golf': ['4'],
  'air mattress': ['5'],
  'camping lantern': ['6'],
  'gas grill': ['7'],
  'camping stove': ['8'],
  'soccer ball': ['9'],
  'slip and slide': ['10'],
  'waterproof phone pouch': ['11'],
  'pool float': ['12'],
  'yoga mat': ['13'],
  'fitness tracker': ['14']
};

const AmazonReferrals: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'Amazon Referrals - Celestial Code | Summer Essentials and More';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Discover top Amazon products recommended by Celestial Code for the perfect summer. From camping gear to fitness trackers, find all your summer essentials here.');
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 'Amazon referrals, summer essentials, camping gear, fitness trackers, kids summer fun, outdoor sports, picnic essentials, beach essentials');
  }, []);

  const filteredProducts = products.filter(product => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const productMatchesQuery = product.name.toLowerCase().includes(lowerCaseQuery);

    if (productMatchesQuery) {
      return true;
    }

    // Check keyword mappings
    for (const [keyword, ids] of Object.entries(keywordMapping)) {
      if (lowerCaseQuery.includes(keyword)) {
        return ids.includes(product.id);
      }
    }

    return false;
  });

  return (
    <div className="min-h-screen bg-white text-emerald">
      <header className="bg-emerald text-white text-center py-6">
        <h1 className="text-4xl font-bold">Summer Essentials</h1>
        <p className="text-xl">Discover top products for the perfect summer straight from Amazons Best</p>
      </header>

      <SearchBar onSearch={setSearchQuery} />

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-emerald mb-4">{product.name}</h3>
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain object-center" />
                </div>
                <p className="text-lg text-gray-800 mb-4">{product.description}</p>
                <p className="text-lg text-gray-800 mb-4">Price: {product.price}</p>
                <a href={product.link} className="bg-emerald text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-dark-emerald">Buy Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmazonReferrals;
