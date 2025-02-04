import React, { useState, useEffect } from 'react';
import './loader.css'

const Loaders = () => {
  const [isLoading, setIsLoading] = useState(true); // Initially, the loader is shown

  useEffect(() => {
    // Set a timer to simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false); // After 3 seconds, set loading to false
    }, 3000);

    // Cleanup the timer if the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      {isLoading && (
        <div className="loader">
          {/* Signature-style loader text */}
          <div className="signature-text">
            Welcome to My Portfolio
          </div>
        </div>
      )}
    </div>
  );
};

export default Loaders;
