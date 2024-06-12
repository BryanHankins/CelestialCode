// src/components/BlogPost.tsx
import React from 'react';

interface BlogPostProps {
  title: string;
  content: string;
  imageUrl?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">{title}</h1>
      {imageUrl && (
        <div className="flex justify-center mb-10">
          <img src={imageUrl} alt={title} className="w-full h-auto object-cover rounded-lg shadow-md" />
        </div>
      )}
      <div className="prose lg:prose-xl max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default BlogPost;
