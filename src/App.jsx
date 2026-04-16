import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Hero from './components/Hero';
import Formation from './components/Formation';
import Experience from './components/Experience';
import Competences from './components/Competences';
import Projects from './components/Projects';
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
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)', color: 'white' }}>
      <Navigation sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        {activeSection === 'home' && <Hero />}
        {activeSection === 'formation' && <Formation />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'competences' && <Competences />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </motion.div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #334155', padding: '2rem 1rem', marginTop: '4rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
            © 2025 Pacôme SINWILLY BONI. All rights reserved.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            {[
              { icon: FaGithub, url: 'https://github.com/Pacomesinwilly' },
              { icon: FaLinkedin, url: 'https://www.linkedin.com/in/pacôme-sinwilly-988643288' },
              { icon: FaTwitter, url: '#' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target={social.url !== '#' ? '_blank' : undefined}
                rel={social.url !== '#' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ color: '#94a3b8', fontSize: '1.5rem', textDecoration: 'none', cursor: 'pointer' }}
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
