import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-between py-20 gap-10">
      <div className="hero-text">
        <p className="hello">Hi, I am</p>
        <h1 className="text-5xl font-bold">Kian Agulan</h1>
        <p className="subtitle">IT Student • Developer • Designer</p>

        <div className="socials flex gap-4 mt-4">
          <a href="#"><img src="icons/facebook.svg" alt="Facebook" className="w-6 h-6"></a>
          <a href="#"><img src="icons/github.svg" alt="GitHub" className="w-6 h-6"></a>
          <a href="#"><img src="icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6"></a>
        </div>

        <a href="#contact" className="inline-block bg-gray-900 text-white py-2.5 px-6 rounded-md text-base no-underline cursor-pointer transition duration-300 hover:bg-gray-700 mt-4">Contact Me</a>
      </div>

      <div className="hero-photo">
        <img src="your-photo.jpg" alt="Profile Photo" className="w-52 rounded-lg">
      </div>
    </section>
  );
};

export default Hero;
