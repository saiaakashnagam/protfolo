import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-2xl font-bold gradient-text">
              Aakash.
            </a>
            <p className="text-slate-500 mt-2 text-sm">
              Building the future with code and intelligence.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/nagamsaisaakash" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/nagamsaisaakash" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:nagamsaiaakash@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Nagam Sai Aakash. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Designed & Developed by Nagam Sai Aakash
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
