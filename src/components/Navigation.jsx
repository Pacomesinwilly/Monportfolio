import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Navigation({ sections, activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          PACÔME
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {sections.map((section, idx) => (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-900 border-t border-slate-700"
        >
          <div className="flex flex-col gap-2 px-4 py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 rounded-lg text-left transition-all ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
