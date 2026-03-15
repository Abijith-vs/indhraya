import { ReactLenis } from 'lenis/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUnion from './components/AboutUnion';
import AboutCollege from './components/AboutCollege';

import UpcomingEvents from './components/UpcomingEvents';
import Gallery from './components/Gallery';
import ComplaintForm from './components/ComplaintForm';
import Announcements from './components/Announcements';

import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
    <Router>
        <div className="bg-gray-900 min-h-screen text-gray-100 font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <AboutUnion />
                <AboutCollege />
                <UpcomingEvents />
                <Gallery />
                <ComplaintForm />
                <Announcements />
                <Contact />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
