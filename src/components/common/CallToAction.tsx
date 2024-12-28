import React from 'react';
import { Link } from './Link';

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <div className="space-y-6">
          <p className="text-xl">
            Need Your Phone Fixed Today? Schedule Now!
          </p>
          <p className="text-xl">
            Get Your Taxes Done Right—Upload Your Documents Securely!
          </p>
          <p className="text-xl mb-8">
            Ready to Travel? Let Us Book Your Trip!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}