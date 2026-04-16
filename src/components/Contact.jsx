import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTrash } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Charger les messages depuis localStorage au chargement
  useEffect(() => {
    const savedMessages = localStorage.getItem('contactMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === 'Pacome2025') {
      setIsAdminLoggedIn(true);
      setAdminPassword('');
    } else {
      alert('Mot de passe incorrect');
      setAdminPassword('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Créer un nouvel objet de message avec timestamp
    const newMessage = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleString('fr-FR')
    };

    // Ajouter à la liste et sauvegarder en localStorage
    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  };

  const contactInfo = [
    { icon: FaPhone, label: 'Téléphone', value: '+229 01 56 97 23 19', href: 'tel:+22901569723' },
    { icon: FaEnvelope, label: 'Email', value: 'pacomesinwilly@gmail.com', href: 'mailto:pacomesinwilly@gmail.com' },
    { icon: FaMapMarkerAlt, label: 'Localisation', value: 'Cotonou, Bénin' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
          <FaEnvelope className="inline mr-3" />
          Contactez-moi
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href || '#'}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 text-center group cursor-pointer"
            >
              <div className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <info.icon />
              </div>
              <h3 className="text-white font-semibold mb-2">{info.label}</h3>
              <p className="text-slate-300 text-sm group-hover:text-cyan-400 transition-colors">
                {info.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Nom
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Message
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                whileFocus={{ scale: 1.02 }}
                rows="6"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all resize-none"
                placeholder="Votre message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Envoyer le Message
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-center"
              >
                ✓ Merci! Votre message a été envoyé avec succès.
              </motion.div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
            <FaEnvelope className="inline" />
            Espace Admin
          </h3>
          
          {!isAdminLoggedIn ? (
            <motion.form
              onSubmit={handleAdminLogin}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl border border-slate-600 max-w-md mx-auto"
            >
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Mot de passe Admin
              </label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all mb-4"
                placeholder="Entrez le mot de passe..."
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Se Connecter
              </button>
            </motion.form>
          ) : (
            <div>
              <button
                onClick={() => setIsAdminLoggedIn(false)}
                className="mb-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
              >
                Se Déconnecter
              </button>

              <h4 className="text-xl font-bold text-cyan-400 mb-4">Messages Reçus ({messages.length})</h4>
              
              {messages.length === 0 ? (
                <div className="p-8 bg-slate-800 rounded-xl border border-slate-700 text-center">
                  <p className="text-slate-400">Aucun message pour le moment...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="p-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-cyan-400 transition-all"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-white font-bold text-lg">{msg.name}</h4>
                          <p className="text-cyan-400 text-sm">{msg.email}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 text-xs">{msg.date}</span>
                          <button
                            onClick={() => deleteMessage(msg.id)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <FaTrash size={16} />
                          </button>
                        </div>
                      </div>
                      <p className="text-slate-300">{msg.message}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 p-6 bg-slate-800 rounded-xl border border-slate-700 text-center"
        >
          <p className="text-slate-300 mb-4">
            N'hésitez pas à me contacter pour toute opportunité de collaboration ou question.
          </p>
          <p className="text-cyan-400 font-semibold">Réponse garantie dans les 24h!</p>
        </motion.div>
      </div>
    </section>
  );
}
