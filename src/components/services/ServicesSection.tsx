import React from 'react';
import ServiceCard from './ServiceCard';
import { Smartphone, FileText, Plane, HeadphonesIcon, Scale, Tablet, PiggyBank } from 'lucide-react';

const services = [
  {
    title: 'Wireless Device Repairs',
    description: 'Expert repair services for phones, tablets, and other devices with same-day service available.',
    icon: Smartphone,
    details: [
      'Screen repairs and replacements',
      'Battery replacements',
      'Water damage treatment',
      'Camera and speaker repairs',
      'Same-day service for most repairs'
    ]
  },
  {
    title: 'Tax Preparation',
    description: 'Professional tax preparation and filing services for individuals and businesses, current and past years.',
    icon: FileText,
    details: [
      'Individual and business tax returns',
      'Past year tax filing',
      'Tax planning and consultation',
      'Electronic filing',
      'Year-round tax support'
    ]
  },
  {
    title: 'Travel Services',
    description: 'Complete travel planning through IQRA Travel - flights, accommodations, and visa assistance.',
    icon: Plane,
    details: [
      'Flight bookings and reservations',
      'Hotel accommodations',
      'Visa application assistance',
      'Travel insurance',
      'Package deals and group bookings'
    ]
  },
  {
    title: 'Mobile Support',
    description: '24/7 technical support for all your mobile device needs, including troubleshooting and setup.',
    icon: HeadphonesIcon,
    details: [
      '24/7 technical assistance',
      'Device setup and configuration',
      'Software updates and troubleshooting',
      'Data transfer and backup',
      'Remote support available'
    ]
  },
  {
    title: 'Audit Support',
    description: 'Expert assistance with audits and conflict resolution to protect your interests.',
    icon: Scale,
    details: [
      'Audit representation',
      'Document preparation',
      'IRS correspondence',
      'Resolution strategies',
      'Appeals assistance'
    ]
  },
  {
    title: 'Device Care',
    description: 'Comprehensive support and repair services for all mobile devices and tablets.',
    icon: Tablet,
    details: [
      'Preventive maintenance',
      'Performance optimization',
      'Software updates',
      'Hardware diagnostics',
      'Device protection plans'
    ]
  },
  {
    title: 'Tax Planning',
    description: 'Strategic tax planning to optimize your financial future and minimize tax liability.',
    icon: PiggyBank,
    details: [
      'Tax strategy development',
      'Deduction optimization',
      'Investment planning',
      'Retirement tax planning',
      'Business tax strategies'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your wireless, tax, and travel needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}