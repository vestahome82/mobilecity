import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from './Link';

export default function Logo() {
  return (
    <div className="flex flex-col">
      <Link href="/" className="flex items-center">
        <Phone className="h-8 w-8 text-red-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">MobileCity Wireless</span>
      </Link>
      <span className="text-xs text-gray-600 mt-1">
        Wireless | Taxes | Travel – Serving San Diego's Community
      </span>
    </div>
  );
}