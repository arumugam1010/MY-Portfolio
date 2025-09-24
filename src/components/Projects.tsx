import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import inventoryImg from '../assets/inventory.jpg';
import smartCanteenImg from '../assets/Smart-Canteen.jpg';
import billingImg from '../assets/billing system.jpg';
import visitorImg from '../assets/visitormanagement.jpg';

const Projects: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'School Inventory Management System',
      description: 'A comprehensive inventory management system for educational institutions',
      image: inventoryImg,
      technologies: [ 'PHP', 'MySQL', 'phpMyAdmin'],
      demoUrl: 'https://kings.roririsoft.com',
      githubUrl: '#',
      details: 'Full-fledged School Inventory Management System developed for a live client. Features include CRUD operations, inventory tracking, user management, and comprehensive reporting modules with optimized database design.'
    },
    {
      id: 2,
      title: 'Smart Canteen System',
      description: 'AI-powered canteen management system with real-time ordering',
      image: smartCanteenImg,
      technologies: ['ReactJS', 'Node.js', 'Express.js', 'PostgreSQL', 'TailwindCSS'],
      demoUrl: 'https://canteen-app-alpha.vercel.app',
      githubUrl: '#',
      details: 'Smart Canteen System with real-time ordering capabilities, AI-powered recommendations, and secure backend API integration. Built with modern web technologies for seamless user experience.'
    },
    {
      id: 3,
      title: 'Billing Management System',
      description: 'Modal-based billing solution with GST calculations and reporting',
      image: billingImg,
      technologies: ['JavaScript', 'HTML', 'CSS', 'PHP', 'MySQL'],
      demoUrl: 'https://sridevisnacks.vercel.app',
      githubUrl: '#',
      details: 'Comprehensive billing management system featuring GST calculations, item management, dynamic reporting, and modal-based interface for efficient billing operations.'
    },
    {
      id: 4,
      title: 'Visitor Management System',
      description: 'Efficient visitor tracking and management system',
      image: visitorImg,
      technologies: ['ReactJS', 'Node.js', 'MySQL', 'JavaScript'],
      demoUrl: 'https://visitor-registration-chi.vercel.app',
      githubUrl: '#',
      details: 'Visitor Management System designed to log, track, and manage visitors efficiently. Features include visitor registration, pass generation, check-in/check-out tracking, and comprehensive reporting dashboard.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-indigo-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-700 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`relative group h-96 perspective-1000 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setFlippedCard(project.id)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === project.id ? 'rotate-y-180' : ''
                }`}>
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                        <p className="text-slate-700 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm border border-indigo-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-gradient-to-br from-indigo-50 to-slate-50 rounded-xl border border-indigo-200 shadow-lg h-full p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-4">{project.title}</h3>
                        <p className="text-slate-700 leading-relaxed mb-6">{project.details}</p>
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href={project.demoUrl}
                          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-slate-700 text-white px-4 py-2 rounded-lg hover:from-indigo-500 hover:to-slate-600 transition-all duration-200 shadow-md"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
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

export default Projects;