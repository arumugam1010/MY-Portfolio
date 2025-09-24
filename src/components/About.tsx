import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ArumugamImg from '../assets/Arumugam.png';

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-indigo-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-700 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-indigo-400/30 group-hover:border-indigo-400/60 transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src={ArumugamImg} 
                  alt="Arumugam" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Hello, I'm Arumugam
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                A passionate Full Stack Developer currently working at Roriri Software Solutions. 
                I have completed intensive training in PHP, MySQL, and phpMyAdmin, and have 
                successfully developed and deployed live projects including School Inventory Management Systems.
                I also hold degrees in BBA and  MBA (HR), which help me blend business understanding and people management with technical execution.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                I specialize in building comprehensive web applications using ReactJS for frontend 
                and PHP/Node.js for backend development. My experience includes working with databases 
                like MySQL and PostgreSQL, and I'm passionate about creating efficient, user-friendly solutions.
              </p>

              {/* Education */}
              <div className="mt-6 p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={20} className="text-indigo-700" />
                  <h4 className="text-lg font-semibold text-slate-900">Education</h4>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-800">BBA</li>
                  <li className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-800">MBA (HR)</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {['ReactJS', 'PHP', 'MySQL', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML/CSS', 'AutoCAD'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-white/80 border border-slate-200 rounded-full text-sm font-medium text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800 hover:border-indigo-300 transition-all duration-200 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;