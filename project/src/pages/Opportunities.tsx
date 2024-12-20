import React, { useState } from 'react';
import JobCard from '../components/opportunities/JobCard';
import { Search, Briefcase, GraduationCap, Building2 } from 'lucide-react';

const opportunities = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Looking for experienced software engineers to join our growing team. Must have 5+ years of experience in full-stack development.",
    link: "#",
  },
  {
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "New York, NY",
    type: "Full-time",
    description: "Seeking data scientists with strong background in machine learning and statistical analysis.",
    link: "#",
  },
  {
    title: "Product Manager Intern",
    company: "StartUp Now",
    location: "Remote",
    type: "Internship",
    description: "Summer internship opportunity for aspiring product managers. Learn from industry experts.",
    link: "#",
  },
];

const Opportunities = () => {
  const [filter, setFilter] = useState('all');

  const filteredOpportunities = opportunities.filter((opportunity) => {
    if (filter === 'all') return true;
    if (filter === 'jobs') return opportunity.type.toLowerCase() === 'full-time';
    if (filter === 'internships') return opportunity.type.toLowerCase() === 'internship';
    return false;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h1>
          <p className="text-xl text-gray-600">
            Discover exciting opportunities within our alumni network
          </p>
        </div>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-md ${
                    filter === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('jobs')}
                  className={`px-4 py-2 rounded-md ${
                    filter === 'jobs'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Jobs
                </button>
                <button
                  onClick={() => setFilter('internships')}
                  className={`px-4 py-2 rounded-md ${
                    filter === 'internships'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Internships
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Briefcase className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">200+</h3>
              <p className="text-gray-600">Active Job Listings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <GraduationCap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Internship Programs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Building2 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-gray-600">Partner Companies</p>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Latest Opportunities</h2>
          <div className="space-y-6">
            {filteredOpportunities.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </section>

        {/* Career Resources Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Career Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Resume Templates</h3>
              <p className="text-gray-600 mb-4">
                Access professional resume templates designed for various industries.
              </p>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Download Templates →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Interview Preparation</h3>
              <p className="text-gray-600 mb-4">
                Get access to interview guides and practice materials.
              </p>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Learn More →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Opportunities;
