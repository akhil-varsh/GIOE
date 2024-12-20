import React from 'react';
import DonationProgress from '../components/fundraiser/DonationProgress';
import { Target, Users, Heart } from 'lucide-react';

const Fundraiser = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Our Future</h1>
          <p className="text-xl text-gray-600">Help us build a better tomorrow for the next generation</p>
        </div>

        {/* Progress Tracker */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Current Campaign Progress</h2>
          <DonationProgress current={750000} goal={1000000} />
        </section>

        {/* Campaign Details */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Target className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Goal</h3>
            <p className="text-gray-600">
              We aim to raise $1 million to fund scholarships, research programs,
              and campus infrastructure improvements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Impact</h3>
            <p className="text-gray-600">
              Your donation will help support 100+ students through scholarships
              and enable cutting-edge research projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Why Donate</h3>
            <p className="text-gray-600">
              Every contribution helps shape the future of education and creates
              opportunities for deserving students.
            </p>
          </div>
        </section>

        {/* Donation Form */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Make a Donation</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount ($)
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Donate Now
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Fundraiser;