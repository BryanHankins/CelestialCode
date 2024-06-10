import React from 'react';
import printer from '../assets/printer1.jpg';

const Printer: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">HP Smart-Tank Plus 651 Wireless All-in-One Ink-Tank Printer</h1>

      <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
        <div className="lg:w-1/2">
          <img src={printer} alt="HP Smart-Tank Plus 651 Printer" className="w-full h-auto rounded-lg shadow-md object-contain" />
        </div>
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-2xl text-gray-700 font-semibold mb-2">$289.99</p>
          <a href="https://amzn.to/3yWbTRJ" className="bg-green-500 text-white px-6 py-3 rounded-full mb-4 inline-block">Buy now</a>
          <p className="text-yellow-500 text-xl font-bold mb-2">4.2 out of 5 stars</p>
          <p className="text-gray-500 mb-4">997 ratings</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">Key Features</h2>
        <ul className="list-disc list-inside mx-auto lg:mx-0 text-center lg:text-left max-w-lg lg:max-w-none">
          <li className="mb-2">Print, copy, scan, and fax with a 35-page automatic document feeder</li>
          <li className="mb-2">Up to 2 years of ink included: up to 8,000 color pages or 6,000 black pages</li>
          <li className="mb-2">Mobile and wireless printing, borderless prints</li>
          <li className="mb-2">Best print quality in its class with exceptional color graphics and sharp text</li>
          <li className="mb-2">HP Smart App: Print, scan, and copy from your phone</li>
          <li className="mb-2">Dual-band Wi-Fi for faster, more reliable connections</li>
          <li className="mb-2">Easy, spill-free refill system</li>
          <li className="mb-2">2.2" mono touchscreen</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">Product Information</h2>
        <ul className="list-disc list-inside mx-auto lg:mx-0 text-center lg:text-left max-w-lg lg:max-w-none">
          <li className="mb-2">Product Dimensions: 14.33"D x 16.83"W x 9.46"H</li>
          <li className="mb-2">Controller Type: Amazon Alexa, Android</li>
          <li className="mb-2">Printer Media Size Maximum: 8.5 x 14 inch</li>
          <li className="mb-2">Included Components: HP Smart Tank 7301 All-in-One Printer; HP 32XL Black Original Ink Bottle; HP 31 Cyan Original Ink Bottle; HP 31 Magenta Original Ink Bottle; HP 31 Yellow Original Ink Bottle; Ink caution flyer; Setup guide; Reference guide; Regulatory flyer; Power cord</li>
          <li className="mb-2">Print media: Envelopes, Paper (plain), Card stock, Labels, Glossy photo paper</li>
          <li className="mb-2">Scanner Type: Flatbed</li>
          <li className="mb-2">Max Input Sheet Capacity: 250</li>
          <li className="mb-2">Max Copy Speed (Black & White): 15 ppm</li>
          <li className="mb-2">Compatible Devices: Smartphones, PC, Tablets, Laptops</li>
          <li className="mb-2">Maximum Color Print Resolution: 4800 x 1200 Dots Per Inch</li>
          <li className="mb-2">Sheet Size: 3 x 5 to 8.5 x 14</li>
          <li className="mb-2">Maximum Black and White Print Resolution: 1200 x 1200 Dots Per Inch</li>
          <li className="mb-2">Color Depth: 24</li>
          <li className="mb-2">Dual-sided printing: Yes</li>
          <li className="mb-2">Maximum copies per run: 99</li>
          <li className="mb-2">Max copy resolution color: 4800 x 1200 dpi</li>
          <li className="mb-2">Duplex: Automatic</li>
          <li className="mb-2">Hardware Interface: Ethernet, USB 2.0</li>
          <li className="mb-2">Ink Color: Black, Cyan, Magenta, Yellow</li>
          <li className="mb-2">Resolution: 4800 x 1200</li>
          <li className="mb-2">Additional Printer functions: Copy, Scan</li>
          <li className="mb-2">Control Method: Touch</li>
          <li className="mb-2">Is Electric: Yes</li>
          <li className="mb-2">Series Number: 7300</li>
          <li className="mb-2">Model Series: 7300</li>
          <li className="mb-2">UPC: 195908302407</li>
          <li className="mb-2">Item Weight: 16.98 pounds</li>
          <li className="mb-2">ASIN: B09CJ2V6WM</li>
          <li className="mb-2">Item model number: Smart Tank 7301</li>
          <li className="mb-2">Customer Reviews: 4.0 out of 5 stars (940 ratings)</li>
          <li className="mb-2">Best Sellers Rank: #2,243 in Office Products (#13 in Ink Tank Printers)</li>
          <li className="mb-2">Date First Available: September 26, 2021</li>
          <li className="mb-2">Manufacturer: HP, Inc.</li>
          <li className="mb-2">Country of Origin: China</li>
        </ul>
      </div>
    </div>
  );
};

export default Printer;
