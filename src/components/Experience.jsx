import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      titre: "Stage Académique",
      entreprise: "DYRA, Natitingou, Bénin",
      periode: "Août 2025 - Sept. 2025",
      description: "Stage en développement et infrastructure informatique"
    },
    {
      titre: "Stage Académique",
      entreprise: "YOUPILAB, Godomey, Bénin",
      periode: "Juin 2023 - Sept. 2023",
      description: "Formation pratique en développement web et technologies modernes"
    },
    {
      titre: "Stage Académique",
      entreprise: "YOUPILAB, Godomey, Bénin",
      periode: "Mai 2022 - Août 2022",
      description: "Initiation aux technologies web et développement frontend"
    }
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen py-20 px-4 pt-28">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          <FaBriefcase className="inline mr-3" />
          Mon Expérience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="p-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaBriefcase className="text-cyan-400 text-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.titre}</h3>
                  <p className="text-slate-300 font-semibold mb-2">{exp.entreprise}</p>
                  <p className="text-cyan-400 flex items-center gap-2 mb-3">
                    <FaCalendarAlt size={16} />
                    {exp.periode}
                  </p>
                  <p className="text-slate-400">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { title: "3+ Stages", desc: "Expérience pratique" },
            { title: "Web Dev", desc: "Développement web moderne" },
            { title: "Réseaux", desc: "Systèmes et infrastructure" }
          ].map((stat, idx) => (
            <div key={idx} className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-center hover:border-cyan-400 transition-colors">
              <p className="text-2xl font-bold text-cyan-400">{stat.title}</p>
              <p className="text-slate-400 text-sm">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
