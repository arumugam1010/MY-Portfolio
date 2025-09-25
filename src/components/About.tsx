import React from 'react';
import { GraduationCap, Briefcase, Award, Building } from 'lucide-react';
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

          <div className="flex flex-wrap gap-12 items-start">
            {/* Profile Image */}
            <div className="w-80 rounded-full overflow-hidden border-8 border-gray-200 shadow-lg">
              <img
                src={ArumugamImg}
                alt="Arumugam"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 min-w-[300px] space-y-6">
              <p className="text-lg text-gray-900 font-semibold">Hello, I'm Arumugam</p>
              <p className="text-gray-700 leading-relaxed">
                A passionate Full Stack Developer currently working at Roriri Software Solutions. 
                I have completed intensive training in PHP, MySQL, and phpMyAdmin, and have 
                successfully developed and deployed live projects including School Inventory Management Systems.
                I also hold degrees in BBA and  MBA (HR), which help me blend business understanding and people management with technical execution.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I specialize in building comprehensive web applications using ReactJS for frontend 
                and PHP/Node.js for backend development. My experience includes working with databases 
                like MySQL and PostgreSQL, and I'm passionate about creating efficient, user-friendly solutions.
              </p>

            
            </div>
          </div>

          {/* Cards Section */}
          <div className="mt-12 flex flex-wrap gap-6 justify-center items-start">
            <div className="flex flex-col gap-6">
              {/* Education Card */}
              <div className="min-w-[280px] max-w-sm p-6 bg-white rounded-xl shadow-lg border border-gray-200 self-start">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-indigo-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                </div>
              <div   className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-800">BBA</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-800">MBA (HR)</span>
              </div>
              </div>

              {/* Internship Card */}
              <div className="min-w-[280px] max-w-sm p-6 bg-white rounded-xl shadow-lg border border-gray-200 self-start">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="text-indigo-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Internship</h3>
                </div>
                <p className="font-semibold text-gray-800">Fine-tech Construction Company</p>
                <p className="text-gray-700">Mumbai</p>
              </div>
            </div>

            {/* Experience Card */}
            <div className="flex-1 min-w-[280px] max-w-sm p-6 bg-white rounded-xl shadow-lg border border-gray-200 self-start">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-indigo-600" size={24} />
                <h3 className="text-lg font-semibold text-gray-900">Experience</h3>
              </div>
              <div className="text-gray-700">
                <h4 className="font-bold">Field Officer (Part-Time)</h4>
                <p>Tamil Nadu Water Supply and Drainage Board (TWAD) • 08/2023 – Present</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Collected water samples from designated locations, ensuring proper handling.</li>
                  <li>Transported samples to laboratories for testing and analysis.</li>
             
                </ul>
                <h4 className="font-bold mt-4">Developer</h4>
                <p>Roriri Software Solutions • Jan 2025 – Present</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Completed 6 months of intensive training in PHP, MySQL, and phpMyAdmin.</li>
                  
                </ul>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="flex-1 min-w-[280px] max-w-sm p-6 bg-white rounded-xl shadow-lg border border-gray-200 self-start">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-indigo-600" size={24} />
                <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
              </div>
              <p className="font-semibold text-gray-800">Knockdown the lockdown</p>
              <p className="text-gray-700">Online course offered by TCS iON</p>
              <p className="text-gray-700">The Fundamentals of Digital Marketing - Google Digital Unlocked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
