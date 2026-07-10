import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children, title }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-auto rounded-2xl bg-white shadow-card"
          onClick={(e) => e.stopPropagation()}
        >
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-brand-light border-opacity-20">
              <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-brand-bg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-brand-dark" />
              </button>
            </div>
          )}
          <div className={title ? 'p-6' : ''}>{children}</div>
          {!title && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-brand-dark bg-opacity-50 text-white hover:bg-opacity-70 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Modal;
