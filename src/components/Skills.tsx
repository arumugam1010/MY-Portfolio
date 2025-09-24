import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  // unified color for all skills (lighter indigo/slate palette)
  const unifiedColor = 'from-indigo-300 to-slate-400';
  const skills = [
    { name: 'ReactJS & Frontend', level: 90, icon: Globe, logo: 'react', color: unifiedColor },
    { name: 'PHP & Backend', level: 85, icon: Server, logo: 'php', color: unifiedColor },
    { name: 'MySQL & PostgreSQL', level: 88, icon: Database, logo: 'mysql', color: unifiedColor },
    { name: 'JavaScript & Node.js', level: 82, icon: Code, logo: 'nodejs', color: unifiedColor },
    { name: 'AutoCAD', level: 75, icon: Palette, logo: 'autocad', color: unifiedColor },
  ];

  const deviconMap: Record<string, string> = {
    react: 'react/react-original.svg',
    php: 'php/php-original.svg',
    mysql: 'mysql/mysql-original.svg',
    nodejs: 'nodejs/nodejs-original.svg',
    autocad: 'autocad/autocad-original.svg',
  };

  const LogoBox: React.FC<{ id: string; label: string }> = ({ id, label }) => {
    const path = deviconMap[id];
    const src = id === 'autocad'
      ? `https://cdn.simpleicons.org/autocad/0696D7`
      : path
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`
        : `https://cdn.simpleicons.org/${id}`; // fallback to brand single color
    return (
      <div className="w-12 h-12 rounded-lg border border-indigo-100 bg-white flex items-center justify-center shadow-sm overflow-hidden">
        <img src={src} alt={`${label} logo`} className="w-8 h-8" loading="lazy" />
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-indigo-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-700 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`bg-white border border-slate-200 rounded-xl p-6 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <LogoBox id={skill.logo as string} label={skill.name} />
                  <h3 className="ml-3 text-lg font-semibold text-slate-900">{skill.name}</h3>
                </div>
                
                <div className="relative">
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${
                        isVisible ? '' : 'w-0'
                      }`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-slate-600 mt-2 block">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style> {`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;