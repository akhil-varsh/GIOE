import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Fundraiser from './pages/Fundraiser';
import Contact from './pages/Contact';
import Impact from './pages/Impact';
import Opportunities from './pages/Opportunities';
import StayInTouch from './pages/StayInTouch';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/fundraiser" element={<Fundraiser />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/stay-in-touch" element={<StayInTouch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;