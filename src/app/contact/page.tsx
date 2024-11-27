import React from 'react';

const Contact = () => {
  return (
    <section
      className="contact-form border max-w-full mx-auto shadow-md rounded-md h-screen text-white px-6 sm:px-10 md:px-16 lg:px-44"
      style={{
        backgroundImage: "url('/bg image 3.jpg')", // Public folder ka path
        backgroundSize: 'cover', // Image ko cover karne ke liye
        backgroundPosition: 'center', // Center mein position karne ke liye
        height: '100vh', // Full viewport height
      }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center text-white mt-10 sm:text-3xl md:text-4xl lg:text-5xl">
        Contact Us
      </h1>

      <form className="w-full max-w-lg mx-auto space-y-6" action="mailto:sm6928234@gmail.com" method="POST">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 sm:text-xl md:text-2xl border border-blue-500 rounded-md"
          required
        />
        <input

          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 sm:text-xl md:text-2xl border border-blue-500 rounded-md"
          required
        />
        <input
          type="number"
          placeholder="Phone"
          className="w-full px-4 py-2 sm:text-xl md:text-2xl border border-blue-500 rounded-md"
          required
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full px-4 py-2 text-black sm:text-xl md:text-2xl border border-blue-500 rounded-md"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-300 rounded-md font-bold text-lg sm:text-xl md:text-2xl"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
