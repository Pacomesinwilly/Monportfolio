import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

export default function Formation() {
  const formations = [
    {
      titre: "Deuxième année de Licence en Informatique Réseaux et Télécommunication",
      institution: "ESGIS, Cotonou, Bénin",
      periode: "En cours",
      description: "Formation supérieure en informatique avec spécialisation réseaux"
    },
    {
      titre: "Première année de Licence en Informatique Réseaux et Télécommunication",
      institution: "ESGIS, Cotonou, Bénin",
      periode: "Sept. 2024 - Juil. 2025",
      description: "Fondamentaux de l'informatique et réseaux informatiques"
    },
    {
      titre: "Baccalauréat en Électronique",
      institution: "Lycée Technique Natitingou, Natitingou, Bénin",
      periode: "Sept. 2023 - Juin 2024",
      description: "Mention: ABIEN - Distinction académique"
    },
    {
      titre: "Certificat d'Aptitude Professionnel (CAP) en Électricité",
      institution: "Lycée Technique de Natitingou, Natitingou, Bénin",
      periode: "Oct. 2022 - Mai 2023",
      description: "Formation pratique en électricité et installations électriques"
    },
    {
      titre: "Formation en Électronique (3 années)",
      institution: "Lycée Technique de Natitingou, Natitingou, Bénin",
      periode: "Oct. 2021 - Mai 2024",
      description: "Parcours complet en électronique et systèmes électroniques"
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
          <FaGraduationCap className="inline mr-3" />
          Ma Formation
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {formations.map((formation, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="p-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaGraduationCap className="text-blue-400 text-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{formation.titre}</h3>
                  <p className="text-slate-300 font-semibold mb-2">{formation.institution}</p>
                  <p className="text-blue-400 flex items-center gap-2 mb-3">
                    <FaCalendarAlt size={16} />
                    {formation.periode}
                  </p>
                  <p className="text-slate-400">{formation.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30 text-center"
        >
          <p className="text-slate-300">Un parcours académique solide combinant électronique et informatique</p>
        </motion.div>
      </div>
    </section>
  );
}
