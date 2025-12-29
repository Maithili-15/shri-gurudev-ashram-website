import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartItemCount } = useCart();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/gurudev', label: 'Gurudev' },
    { path: '/activities', label: 'Activities' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl">🕉️</div>
            <span className="text-xl font-bold text-amber-700">Gurudev Ashram</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-amber-100 text-amber-800'
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="ml-4 px-4 py-2 bg-amber-600 text-white rounded-md text-sm font-medium hover:bg-amber-700 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              to="/shop"
              className="ml-2 px-4 py-2 bg-amber-500 text-white rounded-md text-sm font-medium hover:bg-amber-600 transition-colors relative"
            >
              Shop
              {getCartItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="ml-2 px-4 py-2 text-amber-700 hover:bg-amber-50 rounded-md text-sm font-medium transition-colors relative"
            >
              🛒 Cart
              {getCartItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-amber-50"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-amber-100 text-amber-800'
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 px-4 py-2 bg-amber-600 text-white rounded-md text-center font-medium hover:bg-amber-700"
            >
              Donate Now
            </Link>
            <Link
              to="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-2 px-4 py-2 bg-amber-500 text-white rounded-md text-center font-medium hover:bg-amber-600"
            >
              Shop
            </Link>
            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-md text-center font-medium hover:bg-amber-200 relative"
            >
              🛒 Cart {getCartItemCount() > 0 && `(${getCartItemCount()})`}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

