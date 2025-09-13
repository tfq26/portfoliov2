import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { animateScroll as scroll } from 'react-scroll';
import Navbar from './components/Navbar';
import Portfolio from "./components/Portfolio.jsx";

const App = () => {
  // Enable smooth scrolling for the entire app
  useEffect(() => {
    scroll.scrollToTop();
    
    // Add smooth scrolling to all anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <ParallaxProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
            <Navbar />
            <main>
              <Portfolio />
            </main>
          </div>
        </ParallaxProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
