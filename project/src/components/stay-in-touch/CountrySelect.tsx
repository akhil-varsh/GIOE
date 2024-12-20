import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const countries = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+91', name: 'India' },
  { code: '+61', name: 'Australia' },
  { code: '+86', name: 'China' },
  { code: '+81', name: 'Japan' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+39', name: 'Italy' },
  { code: '+7', name: 'Russia' },
];

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    setIsOpen(false);
    onChange(`${country.code} ${phoneNumber}`);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value;
    setPhoneNumber(newNumber);
    onChange(`${selectedCountry.code} ${newNumber}`);
  };

  return (
    <div className="relative">
      <div className="flex">
        <div className="relative">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-r-0 border-gray-300 rounded-l-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedCountry.code}</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-1 w-56 bg-white shadow-lg rounded-md">
              <ul className="py-1 max-h-60 overflow-auto">
                {countries.map((country) => (
                  <li
                    key={country.code}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => handleCountrySelect(country)}
                  >
                    <span className="mr-2">{country.code}</span>
                    <span>{country.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Phone number"
        />
      </div>
    </div>
  );
};

export default CountrySelect;