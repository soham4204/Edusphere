import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';
import small_logo from '../assets/small_logo.png';
import Button from './ui/Button';

const navLinks = [
  { to: '/AboutUs', label: 'About Us' },
  { to: '/Admission', label: 'Admission' },
  { to: '/Academics', label: 'Academics' },
  { to: '/Activities', label: 'Activities' },
];

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll + close on Escape while mobile menu is open
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === 'Escape' && setIsOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className={`
          sticky top-0 z-50 transition-all duration-300 border-b
          ${scrolled
            ? 'glass shadow-soft py-2 border-brand-light/20'
            : 'bg-brand-bg bg-opacity-80 backdrop-blur-sm py-3 border-transparent'
          }
        `}
      >
        <nav className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <motion.img
              whileHover={{ scale: 1.06, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              src={small_logo}
              alt="Gayatri Vidyalaya Logo"
              className="h-11 sm:h-14 w-auto"
            />
            <div className="hidden sm:block leading-tight">
              <h1 className="text-lg sm:text-xl font-bold text-brand-dark group-hover:text-brand transition-colors">
                GAYATRI VIDYALAYA
              </h1>
              <p className="text-xs text-brand text-opacity-70 tracking-wide">
                Shree Swami Samarth Shikshan Sanstha Kalyan
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={location.pathname === link.to ? 'page' : undefined}
                className={`
                  relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
                  ${location.pathname === link.to
                    ? 'text-brand'
                    : 'text-brand-dark hover:text-brand hover:bg-brand-light hover:bg-opacity-10'
                  }
                `}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/login">
              <Button variant="dark" size="sm" icon={LogIn}>
                Login
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-brand-light hover:bg-opacity-20 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {isOpen ? <X className="w-6 h-6 text-brand-dark" /> : <Menu className="w-6 h-6 text-brand-dark" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden glass border-t border-brand-light border-opacity-20"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      aria-current={location.pathname === link.to ? 'page' : undefined}
                      className={`
                        block px-4 py-3 rounded-xl font-semibold transition-colors
                        ${location.pathname === link.to
                          ? 'bg-brand text-white'
                          : 'text-brand-dark hover:bg-brand-light hover:bg-opacity-20'
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Link to="/login" className="block pt-2">
                  <Button variant="dark" className="w-full" icon={LogIn}>
                    Login
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarComponent;