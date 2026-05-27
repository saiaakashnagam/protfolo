import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono mb-4"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Sai Aakash Nagam
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-slate-400 mb-6"
          >
            Software Engineer | Cloud & DevOps Specialist | AI/ML Researcher
          </motion.h2>

          <div className="h-8 mb-8 text-xl md:text-2xl text-primary font-semibold">
            <Typewriter
              words={[
                'Software Engineer',
                'Cloud & DevOps Intern',
                'AI/ML Developer',
                'Research Author'
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 animate-pulse-slow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-all border border-slate-700 flex items-center gap-2"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex gap-6"
          >
            <a href="https://github.com/nagamsaisaakash" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/nagamsaisaakash" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nagamsaiaakash@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aakash"
                  alt="Aakash"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
