import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and collaborations. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <a href="mailto:nagamsaiaakash@gmail.com" className="flex items-center gap-4 group">
                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-primary/20 group-hover:text-primary transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email Me</p>
                  <p className="text-white font-medium">nagamsaiaakash@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/nagamsaisaakash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-primary/20 group-hover:text-primary transition-all">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">LinkedIn</p>
                  <p className="text-white font-medium">linkedin.com/in/nagamsaisaakash</p>
                </div>
              </a>

              <a href="https://github.com/nagamsaisaakash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-primary/20 group-hover:text-primary transition-all">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">GitHub</p>
                  <p className="text-white font-medium">github.com/nagamsaisaakash</p>
                </div>
              </a>

              <a href="tel:+919182383674" className="flex items-center gap-4 group">
                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-primary/20 group-hover:text-primary transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Call Me</p>
                  <p className="text-white font-medium">+91-9182383674</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-primary/20 group-hover:text-primary transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white font-medium">Tirupati, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass p-8 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Inquiry"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-primary transition-colors text-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-primary/20"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
