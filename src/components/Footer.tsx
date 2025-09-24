import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/arumugam1010', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arumugam-s-719391210/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:saravananvlr1010@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-slate-300 bg-clip-text text-transparent mb-4">
              Arumugam.S
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions. 
              Specialized in ReactJS, PHP, MySQL, and modern web technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-slate-500 transition-all duration-200 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail size={16} />
                <span className="text-sm">saravananvlr1010@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone size={16} />
                <span className="text-sm">+91 9943206339</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin size={16} />
                <span className="text-sm">Vallioor, Tirunelveli, TN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Arumugam.S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;