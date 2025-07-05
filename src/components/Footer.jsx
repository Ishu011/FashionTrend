import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              FashionTrend
            </h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for fashion, beauty, and lifestyle products. 
              Discover the latest trends and express your unique style.
            </p>
          </div>

          {/* Online Shopping */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Online Shopping</h4>
            <ul className="space-y-2">
              <li><Link to="/women" className="text-gray-400 hover:text-white transition-colors">Women</Link></li>
              <li><Link to="/men" className="text-gray-400 hover:text-white transition-colors">Men</Link></li>
              <li><Link to="/kids" className="text-gray-400 hover:text-white transition-colors">Kids</Link></li>
              <li><Link to="/beauty" className="text-gray-400 hover:text-white transition-colors">Beauty</Link></li>
              <li><Link to="/sale" className="text-gray-400 hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* Customer Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Policies</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/return-policy" className="text-gray-400 hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-pink-400" />
                <span className="text-gray-400">123 Fashion Street, Style City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-pink-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-pink-400" />
                <span className="text-gray-400">support@myntra.com</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024@ISHU FashionTrend All rights reserved. | Made By ISHU </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;