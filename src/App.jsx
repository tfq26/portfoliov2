import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { animateScroll as scroll } from 'react-scroll';
import Navbar from './components/Navbar';
import Portfolio from "./components/Portfolio.jsx";
import './theme.css';


// PrimeReact Imports
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind'; 

// --- Custom PrimeReact PassThrough Configuration ---
const primeReactPassThrough = {
  unstyled: true,
  pt: {
    dialog: {
      mask: () => ({
        className: 'fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4',
      }),
      root: () => ({
        className: [
          'relative rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300',
          'bg-[var(--color-surface)] text-[var(--color-text)]',
        ],
      }),
      content: 'p-0',
    },
    card: {
      root: 'relative h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl cursor-pointer bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)]',
      header: 'p-0',
      body: 'p-0',
      content: 'p-0',
      footer: 'p-0',
    },
    progressbar: {
      root: 'rounded-full bg-[var(--color-border)]',
      value: 'bg-[var(--color-primary)]',
    },
    ...Tailwind,
  },
};

const App = () => {
  // Enable smooth scrolling for the entire app
  useEffect(() => {
    scroll.scrollToTop();

    const theme = document.documentElement;

    theme.classList.add('dark');
    
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
            <div className="min-h-screen dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
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