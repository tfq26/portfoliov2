import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { animateScroll as scroll } from 'react-scroll';
import Navbar from './components/Navbar';
import Portfolio from "./components/Portfolio.jsx";

// PrimeReact Imports
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind'; 

// --- Custom PrimeReact PassThrough Configuration ---
const primeReactPassThrough = {
    // Enable unstyled mode to control all styling with Tailwind
    unstyled: true,
    
    // Global configuration for components to ensure they adhere to the theme
    pt: {
        // --- DIALOG FIX (ProjectCard Modal) ---
        dialog: {
            // Apply backdrop blur and dark background to the mask globally
            mask: () => ({ 
                className: [
                    'fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4',
                ]
            }),
            // Set the main dialog content container styles
            root: () => ({
                className: [
                    'relative rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300',
                    // Dynamic background based on the 'dark' class
                    'dark:bg-blue-950/90 bg-white/90 backdrop-blur-sm',
                    'focus:outline-none focus:ring-4 focus:ring-blue-500/50'
                ]
            }),
            content: 'p-0', 
        },

        // --- CARD Configuration (Portfolio, Experience, ProjectCard) ---
        card: {
            // Remove all default padding from internal sections
            header: 'p-0',
            body: 'p-0',
            content: 'p-0',
            footer: 'p-0',
        },

        // --- PROGRESS BAR Configuration (Skills) ---
        progressbar: {
            root: 'rounded-full',
        },

        // Use the default Tailwind preset for all other non-customized components
        ...Tailwind
    }
};

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
          // Use smooth scroll-into-view
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <PrimeReactProvider value={primeReactPassThrough}>
      <Router>
        <ThemeProvider>
          <ParallaxProvider>
            <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
              <Navbar />
              <main>
                <Portfolio />
              </main>
            </div>
          </ParallaxProvider>
        </ThemeProvider>
      </Router>
    </PrimeReactProvider>
  );
};

export default App;