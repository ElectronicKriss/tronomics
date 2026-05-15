import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-lg">Tronomics</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Risk Assessment, Talent Solutions & IT Services for Modern Businesses
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition"><ExternalLink size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><ExternalLink size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><ExternalLink size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/risk-assessment" className="text-gray-400 hover:text-blue-400 transition">Risk Assessment</Link></li>
              <li><Link to="/services/talent-solutions" className="text-gray-400 hover:text-blue-400 transition">Talent Solutions</Link></li>
              <li><Link to="/services/it-services" className="text-gray-400 hover:text-blue-400 transition">IT Services</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-blue-400 transition">Industries</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-blue-400 transition">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-blue-400 transition">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-blue-400 transition">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+2348000000000" className="text-gray-400 hover:text-blue-400 transition">+234 800 000 0000</a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@tronomics.com" className="text-gray-400 hover:text-blue-400 transition">info@tronomics.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Tronomics. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
