import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              I am a results-driven **Computer Science & Engineering** student at **Mohan Babu University** (GPA: 8.28/10) with hands-on experience in 
              <span className="text-white font-medium"> Python, Java, AWS, and AI/ML</span> across multiple professional internships. 
              I specialize in building secure, scalable cloud architectures and intelligent web applications.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Through my roles in **AI/ML development, cloud infrastructure provisioning, space technology simulation, and modern web developer ecosystems**, I have cultivated a robust skill set. I am looking for opportunities where I can apply my expertise to solve complex challenges as a Software Engineer, DevOps, or Cloud Engineer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl">
                <GraduationCap className="text-primary mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">Education</h3>
                <p className="text-slate-400 text-sm">B.Tech in CS Engineering</p>
                <p className="text-primary text-sm font-semibold">CGPA: 8.28</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <Briefcase className="text-secondary mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">Internships</h3>
                <p className="text-slate-400 text-sm">4+ Industry Experiences</p>
                <p className="text-secondary text-sm font-semibold">AI/ML, Web, Space</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-40 glass rounded-2xl flex items-center justify-center p-4">
                <img src="https://img.icons8.com/color/144/python--v1.png" alt="Python" className="w-16 h-16 opacity-70 grayscale hover:grayscale-0 transition-all" />
              </div>
              <div className="h-60 glass rounded-2xl flex items-center justify-center p-4">
                <img src="https://img.icons8.com/color/144/amazon-web-services.png" alt="AWS" className="w-16 h-16 opacity-70 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="h-60 glass rounded-2xl flex items-center justify-center p-4">
                <img src="https://img.icons8.com/color/144/java-coffee-cup-logo.png" alt="Java" className="w-16 h-16 opacity-70 grayscale hover:grayscale-0 transition-all" />
              </div>
              <div className="h-40 glass rounded-2xl flex items-center justify-center p-4">
                <img src="https://img.icons8.com/color/144/docker.png" alt="Docker" className="w-16 h-16 opacity-70 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
