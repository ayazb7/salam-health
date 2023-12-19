// Home.js
import React, { useEffect } from 'react';
import '../App.css'; // Import your CSS file

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div className="home-background">
      <h2 className="hidden">
        Salam Health
      </h2>
  
    </div>
  );
};

export default Home;

