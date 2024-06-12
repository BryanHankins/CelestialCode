// src/components/BlogList.tsx
import React from 'react';

const blogs = [
  {
    title: "Top 7 Laptops Across Different Price Ranges and Purposes",
    excerpt: "Choosing the right laptop can be challenging with so many options available in the market. This guide reviews seven top laptops across different price ranges and purposes to help you make an informed decision.",
    link: "https://amzn.to/3yWbTRJ",
    imageUrl: "https://via.placeholder.com/800x400", // Replace with actual image URL
  },
  // Add more blogs here...
];

const BlogList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">Latest Blog Posts</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        {blogs.map((blog, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white hover:bg-gray-100 transition duration-300">
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-64 object-cover mb-6 rounded-lg" />
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">{blog.title}</h2>
              <p className="text-md text-gray-700">{blog.excerpt}</p>
              <a href={blog.link} className="inline-block px-4 py-2 text-md font-medium text-white bg-blue-600 rounded hover:bg-blue-700">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
