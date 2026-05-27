import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    type: 'internship',
    title: 'Web Developer',
    company: 'MSsquare Technologies',
    period: 'Present',
    location: 'Tirupati, Andhra Pradesh',
    bullets: [
      'Currently developing and maintaining web applications, contributing to front-end and back-end features in a professional environment.'
    ]
  },
  {
    type: 'internship',
    title: 'Cloud Computing Intern',
    company: 'EduSkills - AWS Virtual Internship',
    period: 'Dec 2024 - Mar 2025',
    location: 'Remote',
    bullets: [
      'Provisioned scalable cloud infrastructure using AWS EC2, S3, and Lambda; designed secure architecture following AWS best practices.',
      'Monitored cloud resource utilization and applied cost-optimization strategies to improve system efficiency.'
    ]
  },
  {
    type: 'internship',
    title: 'Software Engineering Intern - AI/ML',
    company: 'EduSkills - AI-ML Virtual Internship',
    period: 'Feb 2025',
    location: 'Tirupati, Andhra Pradesh',
    bullets: [
      'Developed and integrated AI/ML-based software modules; applied supervised ML to real-world datasets for actionable insights.',
      'Participated in code reviews, unit testing, and debugging to enhance code quality and reduce defects.'
    ]
  },
  {
    type: 'internship',
    title: 'Space Technology Intern',
    company: 'Agnirva Space',
    period: 'Sep 2024 - Jan 2025',
    location: 'Remote',
    bullets: [
      'Built simulation tools and mission management modules using Python and Java; collaborated in cross-functional Agile team.',
      'Strengthened debugging and analytical problem-solving skills across fast-paced, iterative development cycles.'
    ]
  }
];

const education = {
  degree: 'B.Tech - Computer Science & Engineering',
  university: 'Mohan Babu University',
  location: 'Tirupati, Andhra Pradesh',
  cgpa: '8.28 / 10.0',
  period: 'Sep 2022 - Jun 2026'
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Journey</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Education Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl sticky top-24 border border-slate-700/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-primary" size={28} />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold text-lg">{education.degree}</h4>
                  <p className="text-slate-400 text-sm mt-1">{education.university}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin size={12} className="text-slate-500" />
                    <span>{education.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar size={14} className="text-primary" />
                  <span>{education.period}</span>
                </div>
                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-slate-300">GPA: <span className="text-primary font-bold text-xl">{education.cgpa}</span></p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Internship Timeline */}
          <div className="lg:col-span-2 space-y-8 relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-slate-800" />
            
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                <div className="absolute left-[-5px] md:left-[27px] top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20" />
                
                <div className="glass p-8 rounded-2xl hover:border-primary/30 transition-all border border-slate-700/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex items-center gap-1 text-slate-500 text-xs mt-1">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-mono border border-slate-700 self-start">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="list-none space-y-2 mt-4">
                    {exp.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
