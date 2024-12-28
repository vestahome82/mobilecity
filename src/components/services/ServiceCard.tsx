import React, { useState } from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { Link } from '../common/Link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
}

export default function ServiceCard({ title, description, icon: Icon, details = [] }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6 group-hover:bg-red-200 transition-colors">
        <Icon className="h-8 w-8 text-red-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        {details.length > 0 && (
          <ul className="space-y-2 mt-4 mb-6">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 ml-2">{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Link
          href={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
          onClick={(e) => e.stopPropagation()}
        >
          Learn More
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
        <button 
          className={`text-gray-500 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}