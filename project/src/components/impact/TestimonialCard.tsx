import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  batch: string;
  image: string;
  quote: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  batch,
  image,
  quote,
  role
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Quote className="h-8 w-8 text-indigo-600 mb-4" />
      <p className="text-gray-600 mb-4">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">
            {role} - Batch of {batch}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;