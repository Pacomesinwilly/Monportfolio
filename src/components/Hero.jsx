import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px 20px' }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        {/* Photo de profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}
        >
          <img
            src="/image/IMG-20241031-WA0054.jpg"
            alt="Pacôme SINWILLY BONI"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '4px solid #60a5fa',
              objectFit: 'cover',
              boxShadow: '0 0 30px rgba(96, 165, 250, 0.5)'
            }}
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#60a5fa' }}
        >
          Pacôme SINWILLY
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#cbd5e1' }}
        >
          Développeur & Ingénieur Réseaux
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: '1rem', marginBottom: '20px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 20px' }}
        >
          Étudiant en Licence Informatique Réseaux et Télécommunication à l'ESGIS,
          passionné par le développement web, les réseaux informatiques et les nouvelles technologies.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ fontSize: '0.9rem', marginBottom: '40px', color: '#60a5fa' }}
        >
          📍 Cotonou, Bénin
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}
        >
          <a href="https://github.com/Pacomesinwilly" target="_blank" rel="noopener noreferrer" style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', cursor: 'pointer', transition: 'all 0.3s' }} title="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pacôme-sinwilly-988643288" target="_blank" rel="noopener noreferrer" style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', cursor: 'pointer', transition: 'all 0.3s' }} title="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:pacomesinwilly@gmail.com" style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', cursor: 'pointer', transition: 'all 0.3s' }} title="Email">
            <FaEnvelope size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
