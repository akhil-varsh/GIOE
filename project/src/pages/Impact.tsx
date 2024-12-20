import React from 'react';
import TestimonialCard from '../components/impact/TestimonialCard';
import { Trophy, TrendingUp, Users } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    batch: "2018",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "The education and network I gained here have been instrumental in my success at Google. The alumni community continues to be a source of inspiration and opportunities.",
    role: "Senior Software Engineer at Google"
  },
  {
    name: "Michael Chen",
    batch: "2015",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "The research opportunities and mentorship I received helped me launch my successful startup. I'm proud to give back to the community that gave me so much.",
    role: "CEO & Founder, TechStart"
  },
  {
    name: "Emily Rodriguez",
    batch: "2019",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "The leadership skills I developed through various campus activities prepared me well for my current role in management consulting.",
    role: "Management Consultant at McKinsey"
  }
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h1>
          <p className="text-xl text-gray-600">
            Transforming lives and making a difference in the world
          </p>
        </div>

        {/* Impact Statistics */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Trophy className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">90%</h3>
            <p className="text-gray-600">
              Employment rate within 6 months of graduation
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <TrendingUp className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-gray-600">
              Startups founded by our alumni
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">50,000+</h3>
            <p className="text-gray-600">
              Active alumni network members
            </p>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>

        {/* Global Impact */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Research Impact</h3>
              <p className="text-gray-600 mb-4">
                Our alumni have published over 1,000 research papers in top-tier
                journals, contributing to advancements in technology, medicine,
                and sustainable development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Social Impact</h3>
              <p className="text-gray-600 mb-4">
                Alumni-led initiatives have impacted over 1 million lives through
                various social projects, from education programs to healthcare
                accessibility improvements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Impact;