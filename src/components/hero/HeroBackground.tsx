import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90" />
      <img
        src="https://images.unsplash.com/photo-1491947153227-33d59da6c448?auto=format&fit=crop&q=80"
        alt="Modern tech repair workspace"
        className="w-full h-full object-cover opacity-30"
      />
    </div>
  );
}