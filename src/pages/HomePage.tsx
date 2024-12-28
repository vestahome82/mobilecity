import React from 'react';
import Hero from '../components/hero/Hero';
import ServicesSection from '../components/services/ServicesSection';
import CallToAction from '../components/common/CallToAction';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <CallToAction />
    </div>
  );
}