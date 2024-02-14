// LandingPage.js

import React from 'react';

const LandingPage = () => {
  return (
    <div class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="max-w-lg bg-white shadow-lg rounded-lg p-6">
      {/* <!-- Introduction with Typed.js --> */}
      <h1 id="typed-text" class="text-3xl font-semibold text-gray-800 mb-4"></h1>

      {/* <!-- Slider --> */}
      <div class="slider-container">
        <div class="slider" id="slider">
          <div><img src="https://via.placeholder.com/500x250" alt="Slide 1"></div>
          <div><img src="https://via.placeholder.com/500x250" alt="Slide 2"></div>
          <div><img src="https://via.placeholder.com/500x250" alt="Slide 3"></div>
        </div>
        <button class="prev-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Prev</button>
        <button class="next-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
      </div>
      
      {/* <!-- Content with AOS animation --> */}
      <div class="content" data-aos="fade-up">
        <p>This is your content with AOS animation.</p>
      </div>
    </div>
  </div>
  );
};

export default LandingPage;
