import React from 'react';

const Cards = ({ post }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
      <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{post.title}</h3>
        <p className="text-[#868686] text-base text-[0.7rem] mb-4">{post.shortDes}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span className="font-bold">{post.author}</span>
          <span className="italic">{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
