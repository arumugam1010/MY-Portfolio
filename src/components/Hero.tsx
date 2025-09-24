import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ArumugamCV from '../assets/ArumugamCV.pdf';



const Hero: React.FC = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4
    }));
    setParticles(newParticles);
  }, []);

  const scrollToSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-indigo-600 to-slate-700 rounded-full opacity-50"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        ></div>
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-700 bg-clip-text text-transparent">
            Arumugam.S
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-slate-700">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate Full Stack Developer with expertise in PHP, MySQL, ReactJS, and PostgreSQL.
            Specialized in building comprehensive web applications and inventory management systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open(ArumugamCV, '_blank')}
              className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-600 to-slate-800 hover:from-indigo-500 hover:to-slate-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Download CV
            </button>


            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-indigo-700 text-indigo-800 rounded-full font-semibold hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <button
          onClick={scrollToSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-indigo-800 hover:text-slate-900 transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
