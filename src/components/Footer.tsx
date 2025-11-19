import { Link } from 'react-router-dom';
import { Flame, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="text-white">Fireblaze AI School</span>
            </Link>
            <p className="text-sm mb-4">
              Empowering the next generation of data scientists and AI professionals with industry-focused training.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-orange-500 transition-colors">Courses</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/faculty" className="hover:text-orange-500 transition-colors">Faculty</Link></li>
              <li><Link to="/placements" className="hover:text-orange-500 transition-colors">Placements</Link></li>
              <li><Link to="/testimonials" className="hover:text-orange-500 transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-orange-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses/data-science" className="hover:text-orange-500 transition-colors">Data Science</Link></li>
              <li><Link to="/courses/machine-learning" className="hover:text-orange-500 transition-colors">Machine Learning</Link></li>
              <li><Link to="/courses/artificial-intelligence" className="hover:text-orange-500 transition-colors">Artificial Intelligence</Link></li>
              <li><Link to="/courses/nlp" className="hover:text-orange-500 transition-colors">NLP</Link></li>
              <li><Link to="/courses/deep-learning" className="hover:text-orange-500 transition-colors">Deep Learning</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>admissions@fireblaze.ai</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Sadar, Nagpur, Maharashtra 440001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Fireblaze AI School. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link>
            <Link to="/refund" className="hover:text-orange-500 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
