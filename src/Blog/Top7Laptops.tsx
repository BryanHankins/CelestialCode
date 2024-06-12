// src/blog/Top7Laptops.tsx
import React from 'react';
import BlogPost from '../components/BlogPost';

const content = `
<p>Choosing the right laptop can be challenging with so many options available in the market. Whether you are looking for a budget-friendly device for everyday use, a mid-range laptop for professional work, or a high-end machine for gaming and creative tasks, there is something for everyone. This guide reviews seven top laptops across different price ranges and purposes to help you make an informed decision.</p>
<!-- Add the rest of your blog content here -->
`;

const Top7Laptops: React.FC = () => {
  return (
    <BlogPost 
      title="Top 7 Laptops Across Different Price Ranges and Purposes"
      content={content}
      imageUrl="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_SX466_.jpg"
    />
  );
};

export default Top7Laptops;
