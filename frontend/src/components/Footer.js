import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Facebook } from 'react-feather';
import { Link } from 'react-router-dom';
import FadeIn from './effects/FadeIn';
import ContactUsComponent from './ContactUsComponent';

const quickLinks = [
  { to: '/AboutUs', label: 'About Us' },
  { to: '/Admission', label: 'Admission' },
  { to: '/Academics', label: 'Academics' },
  { to: '/Activities', label: 'Activities' },
];

const FooterComponent = () => (
  <footer className="relative bg-brand-dark text-white overflow-hidden">
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: 'linear-gradient(90deg, transparent, #89D7B7, transparent)' }}
    />
    <div className="absolute inset-0 noise-bg opacity-5" />

    <div className="relative container-wide section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        <FadeIn direction="up">
          <h3 className="text-2xl font-bold mb-6 text-brand-light">Contact Us</h3>
          <div className="space-y-4">
            <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white bg-opacity-10 flex-shrink-0">
                <MapPin className="w-4 h-4 text-brand-light" />
              </span>
              <p className="text-white text-opacity-80 pt-1.5">
                Gunjal Compound, Kolsewadi, Kalyan(E) - 421306
              </p>
            </motion.div>
            <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white bg-opacity-10 flex-shrink-0">
                <Phone className="w-4 h-4 text-brand-light" />
              </span>
              <a
                href="tel:9702236759"
                className="text-white text-opacity-80 hover:text-brand-light transition-colors"
              >
                9702236759
              </a>
            </motion.div>
            <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white bg-opacity-10 flex-shrink-0">
                <Mail className="w-4 h-4 text-brand-light" />
              </span>
              <a
                href="mailto:gayatrividyalaya7@gmail.com"
                className="text-white text-opacity-80 hover:text-brand-light transition-colors break-all"
              >
                gayatrividyalaya7@gmail.com
              </a>
            </motion.div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <h3 className="text-2xl font-bold mb-6 text-brand-light">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="group inline-flex items-center gap-2 text-white text-opacity-80 hover:text-brand-light transition-colors"
                >
                  <ArrowRight className="w-4 h-4 -ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <h3 className="text-2xl font-bold mb-6 text-brand-light">Follow Us</h3>
          <motion.a
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.facebook.com/profile.php?id=61556437616351"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white bg-opacity-10 hover:bg-opacity-20 transition-all"
          >
            <Facebook className="w-5 h-5 text-brand-light" />
            <span className="font-medium">Facebook Page</span>
          </motion.a>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <ContactUsComponent />
        </FadeIn>
      </div>

      <div className="mt-14 pt-6 border-t border-white border-opacity-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white text-opacity-60">
        <p>© {new Date().getFullYear()} Gayatri Vidyalaya. All rights reserved.</p>
        <p>Shree Swami Samarth Shikshan Sanstha, Kalyan</p>
      </div>
    </div>
  </footer>
);

export default FooterComponent;