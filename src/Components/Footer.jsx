import React from 'react';
import { assets } from '../assets/assets';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className='bg-gray-600 text-white py-10'>
      <div className='container mx-auto flex flex-col sm:grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm px-4'>
        
        {/* Branding and About */}
        <div>
          <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 mb-4">
            <img src={assets.logo} alt="SheCart Logo" className="w-16 h-auto" />
            <span className="text-2xl font-semibold text-pink-500">SheCart</span>
          </div>
          <p className='text-white'>
            Welcome to SheCart, your go-to platform for all women-centric products. We aim to provide the best online shopping experience for women everywhere.
          </p>
          <p className='text-white mt-4'>
            © {new Date().getFullYear()} SheCart. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-4 text-pink-500'>Quick Links</h3>
          <ul className='space-y-3'>
            <li><a href='/about' className='hover:text-pink-400 transition-colors duration-300'>About Us</a></li>
            <li><a href='/shop' className='hover:text-pink-400 transition-colors duration-300'>Shop</a></li>
            <li><a href='/contact' className='hover:text-pink-400 transition-colors duration-300'>Contact Us</a></li>
            <li><a href='/faqs' className='hover:text-pink-400 transition-colors duration-300'>FAQs</a></li>
            <li><a href='/terms' className='hover:text-pink-400 transition-colors duration-300'>Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className='text-lg font-semibold mb-4 text-pink-500'>Follow Us</h3>
          <ul className='flex space-x-4'>
            <li><a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-pink-400 transition-colors duration-300'><FaFacebookF /></a></li>
            <li><a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-pink-400 transition-colors duration-300'><FaInstagram /></a></li>
            <li><a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-pink-400 transition-colors duration-300'><FaTwitter /></a></li>
            <li><a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-pink-400 transition-colors duration-300'><FaLinkedinIn /></a></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom border and extra padding for visual separation */}
      <div className='border-t border-gray-700 mt-8 py-4 text-center text-xs text-white'>
        Powered by SheCart | Designed with ❤️ for women
      </div>
    </footer>
  );
}

export default Footer;
