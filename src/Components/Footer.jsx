import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Add social icons

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 pb-3">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Stay Updated!</h2>
          <p className="text-lg mb-4">Sign up for our newsletter to receive the latest blog posts, updates, and news.</p>
          <div className="flex justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 w-64 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
            />
            <button className="bg-teal-500 text-white px-6 py-2 rounded-r-md hover:bg-teal-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 m-12 text-sm">
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul>
              <li><a href="/home" className="hover:text-teal-500">Home</a></li>
              <li><a href="/about" className="hover:text-teal-500">About Us</a></li>
              <li><a href="/contact" className="hover:text-teal-500">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-teal-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul>
              <li><a href="/" className="hover:text-teal-500">FAQ</a></li>
              <li><a href="/" className="hover:text-teal-500">Help Center</a></li>
              <li><a href="/" className="hover:text-teal-500">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-teal-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-teal-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-teal-500">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-teal-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-400 mb-4">123 Company St, City, Country</p>
            <p className="text-gray-400">Email: support@company.com</p>
          </div>
        </div>

        <div className="text-center text-sm text-white p-2 bg-teal-500">
          <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
