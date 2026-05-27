import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const certs = [
  { name: "AWS Cloud Practitioner", issuer: "EduSkills" },
  { name: "AI-ML Virtual Internship", issuer: "EduSkills" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy" },
  { name: "Python Essentials", issuer: "Cisco Networking Academy" },
  { name: "Space Technology Internship", issuer: "Agnirva Space" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl group hover:border-accent/50 transition-all cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 group-hover:text-accent transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                    <CheckCircle2 size={12} />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
