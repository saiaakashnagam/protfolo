import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Cpu, Zap, Cloud, Orbit, BrainCircuit } from 'lucide-react';

const otherProjects = [
  {
    title: "AWS Cloud Infrastructure Automation",
    category: "Cloud & DevOps",
    icon: <Cloud className="w-8 h-8 text-sky-400" />,
    description: "Designed and provisioned secure, scalable architectures on AWS using EC2, S3, and Lambda. Integrated IAM best practices and custom cost-optimization strategies.",
    tags: ["AWS EC2/S3/Lambda", "Cloud Security", "Cost Optimization", "DevOps"],
    demoLink: "#contact"
  },
  {
    title: "Space Mission & Simulation Tool",
    category: "Space Technology",
    icon: <Orbit className="w-8 h-8 text-violet-400" />,
    description: "Built advanced simulation utilities and mission control modules in Python and Java. Developed in a fast-paced Agile team to optimize spacecraft telemetry analysis.",
    tags: ["Python", "Java", "Agile", "Simulation Engine"],
    demoLink: "#contact"
  },
  {
    title: "Supervised ML Predictive Engine",
    category: "Artificial Intelligence",
    icon: <BrainCircuit className="w-8 h-8 text-emerald-400" />,
    description: "Developed and integrated intelligent prediction modules using supervised learning techniques. Processed complex real-world datasets for actionable insights.",
    tags: ["Machine Learning", "Supervised Learning", "Data Pipelines", "Python"],
    demoLink: "#contact"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects & Research</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Featured Project Landscape Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative glass rounded-3xl overflow-hidden border border-slate-700/30 hover:border-primary/40 transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden bg-slate-950 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 group-hover:scale-110 transition-transform duration-700 opacity-60" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <Shield className="w-32 h-32 text-primary/30 animate-pulse" />
                    <Cpu className="w-16 h-16 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <span className="px-4 py-1.5 bg-slate-900/80 text-primary border border-primary/35 rounded-full text-xs font-mono tracking-wider uppercase">
                    Published Research Paper
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
                  <Zap size={16} className="animate-bounce" />
                  <span>Featured Project & IEEE Publication (Aug 2025)</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                  Blockchain-Integrated Quantum Metaheuristic Model for IoV Security
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  Proposed and developed a novel blockchain-integrated quantum metaheuristic model to significantly strengthen security frameworks in Internet of Vehicles (IoV) networks. 
                  Successfully presented and published at the **IEEE ICSCN 2025** conference (IEEE ComSoc).
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Blockchain', 'Quantum Computing', 'Cybersecurity', 'IoV Security', 'Decentralized Networks', 'IEEE ComSoc'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/nagamsaisaakash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700 font-medium"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a
                    href="https://ieeexplore.ieee.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20 font-medium"
                  >
                    <ExternalLink size={18} /> IEEE Paper
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other Highlights Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-slate-700 inline-block" />
            Core Implementation Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl flex flex-col justify-between hover:border-accent/40 border border-slate-700/30 group transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-800/80 rounded-2xl group-hover:scale-110 transition-transform">
                      {proj.icon}
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      {proj.category}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors leading-snug">
                    {proj.title}
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-0.5 bg-slate-800 text-slate-400 rounded-md text-xs font-medium border border-slate-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.demoLink}
                    className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-white transition-colors"
                  >
                    <span>Read Details</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
