import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Hero from './components/Hero';
import Formation from './components/Formation';
import Experience from './components/Experience';
import Competences from './components/Competences';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Accueil' },
    { id: 'formation', label: 'Formation' },
    { id: 'experience', label: 'Expérience' },
    { id: 'competences', label: 'Compétences' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        {activeSection === 'home' && <Hero />}
        {activeSection === 'formation' && <Formation />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'competences' && <Competences />}
        {activeSection === 'contact' && <Contact />}
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            © 2025 Pacôme SINWILLY BONI. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            {[
              { icon: FaGithub, url: '#' },
              { icon: FaLinkedin, url: '#' },
              { icon: FaTwitter, url: '#' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                whileHover={{ scale: 1.2, color: '#60a5fa' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
