import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // kept for future interactive focus styles; unused but harmless
  const [loading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.warn("Please fill all fields before sending.");
      return;
    }

    const mailto = `mailto:saravananvlr1010@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
    toast.info("Opening your email client...");
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'saravananvlr1010@gmail.com', href: 'mailto:saravananvlr1010@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9943206339', href: 'tel:+919943206339' },
    { icon: MapPin, label: 'Location', value: 'Vallioor, Tirunelveli, Tamil Nadu', href: '#' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/arumugam1010', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arumugam-s-719391210/', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white via-indigo-50/40 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-700 bg-clip-text text-transparent tracking-tight">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting development projects. 
                  Whether you need a full-stack developer or want to discuss a project, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 group"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-900 to-slate-900 group-hover:from-indigo-800 group-hover:to-slate-800 transition-all duration-300 transform group-hover:rotate-3">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">{item.label}</p>
                      <p className="text-gray-900 font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/60 hover:bg-gradient-to-r hover:from-indigo-900 hover:to-slate-900 hover:border-transparent transition-all duration-300 transform hover:-translate-y-0.5 group shadow-md hover:shadow-xl"
                      aria-label={social.label}
                    >
                      <social.icon size={20} className="text-slate-600 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      
                      className="w-full bg-white/60 border border-indigo-200/70 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-900/70 focus:ring-4 focus:ring-indigo-900/10 focus:bg-white transition-all duration-300 shadow-inner"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      
                      className="w-full bg-white/60 border border-indigo-200/70 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-900/70 focus:ring-4 focus:ring-indigo-900/10 focus:bg-white transition-all duration-300 shadow-inner"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    
                    className="w-full bg-white/60 border border-indigo-200/70 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-900/70 focus:ring-4 focus:ring-indigo-900/10 focus:bg-white transition-all duration-300 shadow-inner"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    
                    rows={6}
                    className="w-full bg-white/60 border border-indigo-200/70 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-900/70 focus:ring-4 focus:ring-indigo-900/10 focus:bg-white transition-all duration-300 resize-none shadow-inner"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-700 to-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                    loading ? "opacity-70 cursor-not-allowed" : "hover:from-indigo-600 hover:to-slate-700 hover:shadow-xl"
                  }`}
                >
                  <Send size={18} className="transition-transform duration-300 transform group-hover:translate-x-1" />
                  {loading ? "Opening..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
