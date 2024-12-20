import React from 'react';
import { Briefcase, Building2, MapPin } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  link: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  type,
  description,
  link
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <Building2 className="h-4 w-4 mr-2" />
            <span>{company}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
          {type}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
      >
        <Briefcase className="h-4 w-4 mr-2" />
        Apply Now
      </a>
    </div>
  );
};

export default JobCard;