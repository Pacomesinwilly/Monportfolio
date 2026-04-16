import { motion } from 'framer-motion';
import { FaGithub, FaGitlab, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Monportfolio',
      description: 'Portfolio professionnel moderne avec React, Vite, Tailwind CSS et Framer Motion. Animations fluides, responsive design, section admin avec gestion des messages. Déployable sur Render/Railway.',
      technologies: ['React 19', 'Vite 8', 'Tailwind CSS 3', 'Framer Motion', 'React Icons'],
      github: 'https://github.com/Pacomesinwilly/Monportfolio',
      gitlab: '#',
      live: 'https://monportfolio.render.com'
    },
    {
      id: 2,
      title: 'Konoula',
      description: 'Plateforme collaborative de gestion de projets et de tâches. Application web développée en groupe avec authentification utilisateur et dashboard intéractif.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      github: '#',
      gitlab: 'https://gitlab.com/pacomesinwilly/konoula',
      live: '#'
    },
    {
      id: 3,
      title: 'Dyra - Logistiq Web',
      description: 'Application web de gestion logistique développée lors de mes stages en entreprise (DYRA-Benin). Gestion des flux logistiques, suivi des commandes, inventaire et optimisation des opérations.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      github: '#',
      gitlab: 'https://gitlab.com/DYRA-Benin/logistiq_web',
      live: '#'
    },
    {
      id: 4,
      title: 'Plus de projets',
      description: 'Découvrez d\'autres contributions et projets en cours sur mes profils GitHub et GitLab. Consultez mes dépôts pour voir le code source complet et les contributions.',
      technologies: ['Divers', 'En cours', 'Open Source'],
      github: 'https://github.com/Pacomesinwilly',
      gitlab: 'https://gitlab.com/pacomesinwilly',
      live: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen py-20 px-4 pt-28">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          <FaCode className="inline mr-3" />
          Mes Projets
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="h-full p-6 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-3">{project.title}</h3>
              
              <p className="text-slate-300 text-sm mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-900 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 border-t border-slate-600 pt-4">
                {project.github !== '#' && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-blue-600 text-blue-400 hover:text-white rounded-lg transition-all text-sm font-semibold"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </motion.a>
                )}
                
                {project.gitlab !== '#' && (
                  <motion.a
                    href={project.gitlab}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-orange-600 text-orange-400 hover:text-white rounded-lg transition-all text-sm font-semibold"
                  >
                    <FaGitlab size={16} />
                    GitLab
                  </motion.a>
                )}

                {project.live !== '#' && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-cyan-600 text-cyan-400 hover:text-white rounded-lg transition-all text-sm font-semibold ml-auto"
                  >
                    <FaExternalLinkAlt size={14} />
                    Voir
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="p-8 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl border border-slate-600 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Consultez tous mes projets</h3>
          <p className="text-slate-300 mb-6">
            Visitez mes profils GitHub et GitLab pour découvrir tous mes projets, contributions et le code source complet.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.a
              href="https://github.com/Pacomesinwilly"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center gap-2"
            >
              <FaGithub size={20} />
              GitHub Profile
            </motion.a>
            <motion.a
              href="https://gitlab.com/pacomesinwilly"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all flex items-center gap-2"
            >
              <FaGitlab size={20} />
              GitLab Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
