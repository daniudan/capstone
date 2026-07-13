import React from 'react';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Testimonial from './components/Testimonial';
import About from './components/About';

function Main() {
  return (
    <main className="main-content">
      <Hero />
      <Highlight />
      <Testimonial />
      <About />
    </main>
  );
}

export default Main;