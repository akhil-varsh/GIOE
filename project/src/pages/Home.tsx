import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Award, Heart } from 'lucide-react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const [alumniCount, setAlumniCount] = useState(0);
  const [storiesCount, setStoriesCount] = useState(0);
  const [fundsRaised, setFundsRaised] = useState(0);
  const statsRef = useRef(null);

  // Function to update the scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Setting up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Start counting when stats section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);  // Trigger counting when stats section is in view
        }
      },
      { threshold: 0.5 } // Start counting when 50% of the stats section is in view
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Animation for counting up the numbers
  useEffect(() => {
    if (startCounting) {
      const animateNumbers = () => {
        if (alumniCount < 100) setAlumniCount(prev => Math.min(prev + 1, 100));
        if (storiesCount < 100) setStoriesCount(prev => Math.min(prev + 1, 100));
        if (fundsRaised < 500000) setFundsRaised(prev => Math.min(prev + 5000, 500000));
      };
      const interval = setInterval(animateNumbers, 50);
      return () => clearInterval(interval);
    }
  }, [startCounting, alumniCount, storiesCount, fundsRaised]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome Back, Alumni!</h1>
            <p className="text-xl md:text-2xl mb-8">Connecting generations of excellence</p>
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision & Mission</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Vision</h3>
                <p className="text-gray-600">
                  To create a global network of successful alumni who contribute to society
                  and inspire future generations.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Mission</h3>
                <p className="text-gray-600">
                  To foster meaningful connections, provide valuable opportunities, and
                  support the continuous growth of our alumni community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Dynamic Counting */}
      <section className="py-16 bg-indigo-600" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center text-white">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{alumniCount}+</div>
              <div className="text-xl">Active Alumni</div>
            </div>
            <div className="text-center text-white">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{storiesCount}+</div>
              <div className="text-xl">Success Stories</div>
            </div>
            <div className="text-center text-white">
              <Heart className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{Math.floor(fundsRaised / 100000)} Lakh+</div>
              <div className="text-xl">Funds Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">Latest News & Events</h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2"> {/* Updated to 2 events */}
      {/* Event 1: Alumni Meet 2024 */}
      <div key="event-1" className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="src\components\images\gioe-3.jpg" // Replace with the image URL of Alumni Meet
          alt="Alumni Meet 2024"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Alumni Meet - 2024</h3>
          <p className="text-gray-600 mb-4">Join us for the Alumni Meet on 21st January, 2024. Reconnect with your peers and be part of an exciting gathering.</p>
          <a
            href="/events"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Learn More → 
          </a>
        </div>
      </div>

      {/* Event 2: Auditorium Opening */}
      <div key="event-2" className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="URL_of_the_Auditorium_Opening_Image" // Replace with the image URL of the Auditorium Opening
          alt="Auditorium Opening"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Auditorium Opening</h3>
          <p className="text-gray-600 mb-4">We are excited to announce the opening of our new auditorium on 21st December, 2024. Don't miss the grand unveiling event!</p>
          <a
            href="/events"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Learn More → 
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
