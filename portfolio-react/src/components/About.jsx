import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 text-center">
      <div className="container mx-auto px-4 about-inner">
        <h2 className="text-3xl font-bold mb-5">About Me</h2>

        <p className="max-w-2xl mx-auto mb-5 text-base">
          I'm passionate about building systems, websites, and mobile apps that make life easier.
          I enjoy modern designs, clean UI, and smooth user experience.
          Always learning. Always improving.
        </p>

        <a href="#" className="inline-block border border-gray-900 text-gray-900 py-2.5 px-6 rounded-md text-base no-underline transition duration-300 hover:bg-gray-900 hover:text-white">Download CV</a>
      </div>
    </section>
  );
};

export default About;
