import React from 'react';
import { Link } from '../common/Link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const baseClasses = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium"
    : "px-3 py-2 rounded-md text-sm font-medium";
    
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`${baseClasses} text-gray-700 hover:text-red-600 hover:bg-gray-50`}
        >
          {item.name}
        </Link>
      ))}
      <Link
        href="/book"
        className={`${baseClasses} ${
          mobile ? 'mt-2' : 'ml-4'
        } text-white bg-red-600 hover:bg-red-700`}
      >
        Book Appointment
      </Link>
    </>
  );
}