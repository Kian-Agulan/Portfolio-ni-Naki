import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="container mx-auto px-4 contact-inner">
        <h2 className="text-3xl font-bold mb-10">Contact Me</h2>

        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full max-w-md p-3 mb-4 border border-gray-400 rounded-md" />
          <input type="email" placeholder="Email Address" className="w-full max-w-md p-3 mb-4 border border-gray-400 rounded-md" />
          <textarea rows="5" placeholder="Message" className="w-full max-w-md p-3 mb-4 border border-gray-400 rounded-md"></textarea>
          <button className="bg-gray-900 text-white py-2.5 px-6 rounded-md text-base cursor-pointer transition duration-300 hover:bg-gray-700">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
