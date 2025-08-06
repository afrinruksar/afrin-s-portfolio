import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Replace YOUR_FORMSPREE_ENDPOINT with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xpwlyjzj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="container mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0, y: 20 }}
    >
      <motion.h1 className="text-4xl font-bold mb-8 gradient-text text-center" variants={itemVariants}>
        Get In Touch
      </motion.h1>
      <motion.p className="text-text-secondary text-center max-w-2xl mx-auto mb-12" variants={itemVariants}>
        Have a question or want to work together? Feel free to reach out to me using the form below or through my contact information.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div className="md:col-span-1" variants={itemVariants}>
          <GlassCard className="h-full">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-accent-1/20 mr-4">
                  <Mail className="text-accent-1" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-text-secondary">afrinruksar2017@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-accent-2/20 mr-4">
                  <MapPin className="text-accent-2" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-text-secondary">Barasat , Kolkata</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-accent-3/20 mr-4">
                  <Phone className="text-accent-3" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-text-secondary">+91 8910047437</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/afrinruksar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/afrin-ruksar-8b57b128b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a
                  href="https://x.com/AfrinRuksar9563"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div className="md:col-span-2" variants={itemVariants}>
          <GlassCard>
            <h2 className="text-2xl font-bold mb-6 gradient-text">Send Me a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-green-400 font-medium">Your message has been sent successfully!</p>
                <p className="text-text-secondary mt-2">I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-center mb-6">
                    <p className="text-red-400 font-medium">{error}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-text-secondary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary/30 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-1/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-secondary mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary/30 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-1/50"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-text-secondary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/30 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-1/50"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-secondary/30 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-1/50"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary flex items-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>

      <motion.div className="mt-16" variants={itemVariants}>
        <GlassCard>
          <h2 className="text-2xl font-bold mb-6 gradient-text text-center">Message Inbox</h2>
          <p className="text-text-secondary text-center mb-8">
            Here you can see all the messages that have been sent to me. Feel free to leave a message!
          </p>
          
          
          
        </GlassCard>
      </motion.div>
    </motion.div>
  );
};

export default Contact;