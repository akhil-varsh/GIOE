import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* History Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our History</h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-6">
              Founded in 1950, our institution has been a beacon of excellence in education
              for over seven decades. What started as a small college with just 100 students
              has grown into a prestigious university with a global alumni network of over
              50,000 graduates.
            </p>
            <p className="text-gray-600">
              Through the years, we've maintained our commitment to academic excellence
              while adapting to the changing needs of society and industry. Our alumni
              have gone on to become leaders in various fields, from technology to
              public service.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Top 50 Universities</h3>
              <p className="text-gray-600">
                Consistently ranked among the top 50 universities globally for academic
                excellence and research impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">
                Over 50,000 alumni across 100+ countries, creating a powerful network
                of professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Research Excellence</h3>
              <p className="text-gray-600">
                Over 1,000 research papers published annually, contributing to
                global knowledge and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from academic
                  programs to research initiatives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We encourage innovative thinking and creative solutions to
                  address global challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of integrity and ethics in
                  all our endeavors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-gray-600">
                  We foster a strong sense of community and collaboration among
                  our students, faculty, and alumni.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;