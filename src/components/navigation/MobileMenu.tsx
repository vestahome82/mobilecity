import React from 'react';
import { X } from 'lucide-react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-64 bg-white z-50 shadow-xl">
        <div className="p-4 flex justify-end">
          <button onClick={onClose}>
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <div className="px-4 py-2 space-y-2">
          <NavLinks mobile />
        </div>
      </div>
    </div>
  );
}