import React from "react";
import Navbar from "./navbar";

const Contact = () => {
  return (
    <>
    {/* <div> */}
      <Navbar/>
      <div className = " bg-black">
      <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6 md:mt-20 mt:5">
      <div className="w-full max-w-lg  dark:bg-slate-900 dark:text-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Have questions about your government payments? Reach out to us!
        </p>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium ">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Government Contact Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-medium">Need help?</p>
          <p className="text-gray-600">Call: <span className="font-bold">1800-123-456</span></p>
          <p className="text-gray-600">Email: <a href="mailto:support@govpay.com" className="text-blue-600 hover:underline">support@govpay.com</a></p>
        </div>
      </div>
    </div>
      </div>
    {/* </div> */}
     
    </>
    
  );
};

export default Contact;
