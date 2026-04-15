import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full border-4 border-blue-400 p-2 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              PS
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
        >
          Pacôme SINWILLY
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-slate-300 mb-6"
        >
          Développeur & Ingénieur Réseaux
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Étudiant en Licence Informatique Réseaux et Télécommunication à l'ESGIS, 
          passionné par le développement web, les réseaux informatiques et les nouvelles technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12 flex-wrap"
        >
          {[
            { icon: FaGithub, label: 'GitHub' },
            { icon: FaLinkedin, label: 'LinkedIn' },
            { icon: FaEnvelope, label: 'Email' },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center text-xl text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              title={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-blue-400 text-3xl"
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
