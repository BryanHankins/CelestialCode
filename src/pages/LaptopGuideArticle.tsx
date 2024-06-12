
import React from 'react';

const laptops = [
  {
    title: "Budget Laptop: Acer Aspire 5",
    overview: "The Acer Aspire 5 is an excellent budget laptop that offers a great balance between performance and affordability. Ideal for students and everyday users, this laptop provides all the essential features without breaking the bank.",
    keyFeatures: [
      "Processor: Intel Core i5-1135G7",
      "RAM: 8GB",
      "Storage: 256GB SSD",
      "Display: 15.6-inch Full HD (1920 x 1080)",
      "Battery Life: Up to 8 hours",
      "Operating System: Windows 10 Home"
    ],
    pros: [
      "Affordable price",
      "Solid performance for everyday tasks",
      "Good battery life",
      "Full HD display"
    ],
    cons: [
      "Build quality is average",
      "Limited storage space",
      "Not suitable for heavy gaming or professional graphics work"
    ],
    idealUseCases: "The Acer Aspire 5 is perfect for students, casual users, and anyone who needs a reliable laptop for web browsing, streaming, and basic productivity tasks.",
    imageUrl: "https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_SX466_.jpg", // Replace with actual image URL
    link: "https://amzn.to/3yVnNeF"
  },
  {
    title: "Mid-Range Laptop: Lenovo ThinkPad E15",
    overview: "The Lenovo ThinkPad E15 offers a robust performance with a focus on durability and security, making it an excellent choice for business professionals and power users who need reliability and efficiency.",
    keyFeatures: [
      "Processor: Intel Core i7-10510U",
      "RAM: 16GB",
      "Storage: 512GB SSD",
      "Display: 15.6-inch Full HD (1920 x 1080)",
      "Battery Life: Up to 12 hours",
      "Operating System: Windows 10 Pro"
    ],
    pros: [
      "Strong performance with Intel Core i7",
      "Durable build quality",
      "Long battery life",
      "Professional design with robust security features"
    ],
    cons: [
      "Integrated graphics limit gaming and heavy graphics tasks",
      "Heavier than some other mid-range models"
    ],
    idealUseCases: "The Lenovo ThinkPad E15 is ideal for business professionals, content creators, and users who require a powerful machine for multitasking, software development, and light photo or video editing.",
    imageUrl: "https://m.media-amazon.com/images/I/71hiX9UWKaL._AC_SX466_.jpg", // Replace with actual image URL
    link: "https://amzn.to/3yXaKt7"
  },
  {
    title: "High-End Laptop: MacBook Pro 16-inch",
    overview: "The MacBook Pro 16-inch is a premium laptop that delivers exceptional performance, especially for creative professionals. With its powerful hardware and stunning Retina display, it’s designed to handle the most demanding tasks.",
    keyFeatures: [
      "Processor: Apple M1 Pro or M1 Max",
      "RAM: 16GB (configurable up to 64GB)",
      "Storage: 512GB SSD (configurable up to 8TB)",
      "Display: 16-inch Retina display with True Tone",
      "Battery Life: Up to 21 hours",
      "Operating System: macOS Monterey"
    ],
    pros: [
      "Outstanding performance with M1 Pro/Max chips",
      "Gorgeous Retina display",
      "Excellent battery life",
      "Premium build quality"
    ],
    cons: [
      "Expensive",
      "Limited port selection",
      "macOS may not be suitable for all users"
    ],
    idealUseCases: "The MacBook Pro 16-inch is perfect for creative professionals, including graphic designers, video editors, and software developers who need top-notch performance and a high-quality display.",
    imageUrl: "https://m.media-amazon.com/images/I/71b7B8OVHvL._AC_SX679_.jpg", // Replace with actual image URL
    link: "https://amzn.to/3KGnUgF"
  },
  {
    title: "Gaming Laptop: ASUS ROG Zephyrus G14",
    overview: "The ASUS ROG Zephyrus G14 is a powerhouse gaming laptop that combines high performance with a compact design. It's perfect for gamers who need a portable yet powerful machine to handle the latest games.",
    keyFeatures: [
      "Processor: AMD Ryzen 9 5900HS",
      "RAM: 16GB",
      "Storage: 1TB SSD",
      "Display: 14-inch Full HD 120Hz",
      "GPU: NVIDIA GeForce RTX 3060",
      "Battery Life: Up to 10 hours",
      "Operating System: Windows 10 Home"
    ],
    pros: [
      "Excellent gaming performance",
      "High refresh rate display",
      "Compact and lightweight design",
      "Good battery life for a gaming laptop"
    ],
    cons: [
      "Can get hot under load",
      "No webcam",
      "Pricey for a 14-inch laptop"
    ],
    idealUseCases: "The ASUS ROG Zephyrus G14 is ideal for gamers and power users who need a high-performance laptop for gaming, streaming, and heavy multitasking on the go.",
    imageUrl: "https://m.media-amazon.com/images/I/71a5BK6eYiL._AC_SX466_.jpg", // Replace with actual image URL
    link: "https://amzn.to/3Xm1gBU"
  },
  {
    title: "Ultra-Portable Laptop: Microsoft Surface Laptop Go",
    overview: "The Microsoft Surface Laptop Go is a sleek, lightweight, and highly portable laptop designed for users who need mobility without sacrificing performance. It’s perfect for students, travelers, and professionals who need to work on the go.",
    keyFeatures: [
      "Processor: Intel Core i5-1035G1",
      "RAM: 8GB",
      "Storage: 128GB SSD",
      "Display: 12.4-inch PixelSense",
      "Battery Life: Up to 13 hours",
      "Operating System: Windows 10 Home in S mode"
    ],
    pros: [
      "Extremely portable and lightweight",
      "Good battery life",
      "Responsive touchscreen",
      "Affordable for an ultra-portable device"
    ],
    cons: [
      "Limited storage",
      "Lower resolution display compared to competitors",
      "S mode may limit app installations"
    ],
    idealUseCases: "The Microsoft Surface Laptop Go is perfect for students, frequent travelers, and professionals who need a compact, portable laptop for note-taking, presentations, and light productivity tasks.",
    imageUrl: "https://m.media-amazon.com/images/I/61t4FAw-3IL._AC_SL1500_.jpg", // Replace with actual image URL
    link: "https://amzn.to/45nLLeL"
  },
  {
    title: "2-in-1 Convertible Laptop: HP Spectre x360",
    overview: "The HP Spectre x360 is a versatile 2-in-1 convertible laptop that offers powerful performance and flexibility. It’s designed for users who need both a laptop and a tablet in one device.",
    keyFeatures: [
      "Processor: Intel Core i7-1165G7",
      "RAM: 16GB",
      "Storage: 512GB SSD",
      "Display: 13.3-inch Full HD touchscreen",
      "Battery Life: Up to 14 hours",
      "Operating System: Windows 10 Home"
    ],
    pros: [
      "Flexible 2-in-1 design",
      "Powerful performance",
      "Long battery life",
      "High-quality touchscreen"
    ],
    cons: [
      "Can be expensive",
      "Slightly heavier in tablet mode",
      "Limited ports"
    ],
    idealUseCases: "The HP Spectre x360 is ideal for creative professionals, students, and anyone who needs the flexibility of a 2-in-1 device for both productivity and entertainment.",
    imageUrl: "https://m.media-amazon.com/images/I/81ZvaBihNsL._AC_SX466_.jpg", // Replace with actual image URL
    link: "https://amzn.to/4en7nMg"
  },
  {
    title: "Workstation Laptop: Dell Precision 5550",
    overview: "The Dell Precision 5550 is a high-performance workstation laptop designed for professionals who need top-tier processing power and graphics capabilities. It’s perfect for tasks like 3D rendering, CAD applications, and video editing.",
    keyFeatures: [
      "Processor: Intel Xeon W-10855M",
      "RAM: 32GB",
      "Storage: 1TB SSD",
      "Display: 15.6-inch 4K Ultra HD",
      "GPU: NVIDIA Quadro T2000",
      "Battery Life: Up to 12 hours",
      "Operating System: Windows 10 Pro"
    ],
    pros: [
      "Exceptional performance for professional applications",
      "Stunning 4K display",
      "Robust build quality",
      "Professional-grade GPU"
    ],
    cons: [
      "Very expensive",
      "Heavier and bulkier than standard laptops",
      "Overkill for general use"
    ],
    idealUseCases: "The Dell Precision 5550 is perfect for engineers, architects, video editors, and professionals who require a powerful workstation for demanding applications.",
    imageUrl: "https://m.media-amazon.com/images/I/414+tUV+RiL._AC_.jpg", // Replace with actual image URL
    link: "https://amzn.to/3VFdxQL"
  }
];

const LaptopGuideArticle: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Top 7 Laptops Across Different Price Ranges and Purposes</h1>
      <p className="mb-4">
        Choosing the right laptop can be challenging with so many options available in the market. Whether you are looking for a budget-friendly device for everyday use, a mid-range laptop for professional work, or a high-end machine for gaming and creative tasks, there is something for everyone. This guide reviews seven top laptops across different price ranges and purposes to help you make an informed decision.
      </p>
      {laptops.map((laptop, index) => (
        <div key={index} className="mb-8 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold mb-3">{laptop.title}</h2>
          <p className="mb-2"><strong>Overview:</strong> {laptop.overview}</p>
          <img src={laptop.imageUrl} alt={laptop.title} className="w-full mb-4 rounded" />
          <p className="mb-2"><strong>Key Features:</strong></p>
          <ul className="list-disc pl-5 mb-2">
            {laptop.keyFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <p className="mb-2"><strong>Pros:</strong></p>
          <ul className="list-disc pl-5 mb-2">
            {laptop.pros.map((pro, i) => (
              <li key={i}>{pro}</li>
            ))}
          </ul>
          <p className="mb-2"><strong>Cons:</strong></p>
          <ul className="list-disc pl-5 mb-2">
            {laptop.cons.map((con, i) => (
              <li key={i}>{con}</li>
            ))}
          </ul>
          <p className="mb-4"><strong>Ideal Use Cases:</strong> {laptop.idealUseCases}</p>
          <a href={laptop.link} className="inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Try it out here</a>
        </div>
      ))}
    </div>
  );
};

export default LaptopGuideArticle;

