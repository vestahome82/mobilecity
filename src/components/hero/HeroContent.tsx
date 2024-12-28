import React from 'react';
import { Smartphone, FileText, Plane } from 'lucide-react';
import { Link } from '../common/Link';

export default function HeroContent() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex justify-center space-x-8 mb-8">
        <Smartphone className="h-12 w-12 text-red-500" />
        <FileText className="h-12 w-12 text-red-500" />
        <Plane className="h-12 w-12 text-red-500" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Wireless Repairs | Tax Preparation | Travel Services
      </h1>
      <p className="text-xl mb-8 text-center font-light">
        All Under One Roof in San Diego
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/book"
          className="group bg-red-600 text-white px-8 py-4 rounded-md font-medium hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          <span className="flex items-center">
            Schedule Appointment
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </Link>
        <Link
          href="/upload"
          className="group bg-white text-gray-900 px-8 py-4 rounded-md font-medium hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          <span className="flex items-center">
            Upload Documents
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </Link>
      </div>
    </div>
  );
}