import { motion } from 'framer-motion';
import { FaCode, FaHardHat, FaArtwork } from 'react-icons/fa';

export default function Competences() {
  const competences = {
    "Réseaux & Systèmes": [
      { skill: "Docker Compose", level: 85 },
      { skill: "Systèmes Linux", level: 80 },
      { skill: "Configuration Réseaux", level: 75 },
      { skill: "TCP/IP", level: 80 }
    ],
    "Développement Web": [
      { skill: "HTML", level: 95 },
      { skill: "CSS", level: 90 },
      { skill: "JavaScript", level: 85 },
      { skill: "React.js", level: 88 },
      { skill: "PHP", level: 82 },
      { skill: "Laravel", level: 90 }
    ],
    "Bases de Données": [
      { skill: "MySQL", level: 85 },
      { skill: "SQL", level: 88 },
      { skill: "Design BDD", level: 82 }
    ],
    "Langages & Autres": [
      { skill: "Python (bases)", level: 70 },
      { skill: "Microsoft Excel", level: 90 },
      { skill: "VBA Macros", level: 85 },
      { skill: "PowerPoint", level: 85 }
    ],
    "Outils Design": [
      { skill: "Adobe Photoshop", level: 80 },
      { skill: "Adobe Illustrator", level: 78 },
      { skill: "Adobe InDesign", level: 80 }
    ],
    "Langues": [
      { skill: "Français", level: 100 }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen py-20 px-4 pt-28">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          <FaCode className="inline mr-3" />
          Mes Compétences
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {Object.entries(competences).map((category, catIdx) => (
            <motion.div
              key={category[0]}
              variants={categoryVariants}
              className="p-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-blue-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm">
                  {catIdx + 1}
                </span>
                {category[0]}
              </h3>

              <div className="space-y-4">
                {category[1].map((skill, idx) => (
                  <div key={skill.skill}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-200 font-semibold">{skill.skill}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-700">
                      <motion.div
                        variants={skillVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: FaCode, title: "Développement", desc: "Web & Backend" },
            { icon: FaHardHat, title: "Infrastructure", desc: "Réseaux & Systèmes" },
            { icon: FaArtwork, title: "Design", desc: "Adobe Suite" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all text-center"
            >
              <item.icon className="text-3xl text-cyan-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
