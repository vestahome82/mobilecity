import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from './Link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MobileCity Wireless</h3>
            <p className="text-gray-400">Your one-stop solution for wireless services, tax preparation, and travel needs in San Diego.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/book" className="text-gray-400 hover:text-white">Book Appointment</Link></li>
              <li><Link href="/upload" className="text-gray-400 hover:text-white">Upload Documents</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white">123-456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@mobilecity.com" className="text-gray-400 hover:text-white">info@mobilecity.com</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-gray-400">San Diego, CA</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MobileCity Wireless. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}