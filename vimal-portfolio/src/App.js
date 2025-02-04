import './App.css';
import { useState, useEffect } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navigation from './pages/Navigation';
import Projects from './pages/Projects';
import Skills from './pages/Skills';


function App() {
  // State to control the loader visibility
  const [isLoading, setIsLoading] = useState(true);

  // Set a timer to hide the loader after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="App">
      {/* Show the loader while isLoading is true */}
      {isLoading ? (
        <div className="loader">
          <div className="signature-text">
           Vimal
          </div>
        </div>
      ) : (
        // After the loader, show the rest of the content
        <>
          <Navigation />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
