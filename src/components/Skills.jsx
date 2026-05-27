import { motion } from 'framer-motion';
import { 
  Code2, Globe, Cloud, Database, 
  BrainCircuit, ShieldCheck, Wrench
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="text-blue-400" />,
    skills: ["Python", "Java", "C"]
  },
  {
    title: "Web Technologies",
    icon: <Globe className="text-emerald-400" />,
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-sky-400" />,
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "Docker", "Jenkins", "CI/CD"]
  },
  {
    title: "Databases",
    icon: <Database className="text-orange-400" />,
    skills: ["MySQL", "SQL"]
  },
  {
    title: "AI/ML",
    icon: <BrainCircuit className="text-violet-400" />,
    skills: ["Machine Learning", "NLP", "Supervised Learning"]
  },
  {
    title: "Cybersecurity",
    icon: <ShieldCheck className="text-red-400" />,
    skills: ["Secure Coding", "Threat Analysis", "Cloud Security"]
  },
  {
    title: "Developer Tools",
    icon: <Wrench className="text-slate-400" />,
    skills: ["Git", "GitHub", "VS Code"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
