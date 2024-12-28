import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <HeroBackground />
      <HeroContent />
    </section>
  );
}