import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90, icon: "☕" },
        { name: "JavaScript (ES6+)", level: 88, icon: "🟨" },
        { name: "SQL (MySQL)", level: 85, icon: "🗄️" },
        { name: "Dart", level: 80, icon: "🎯" },
        { name: "HTML/CSS", level: 92, icon: "🌐" }
      ]
    },
    {
      title: "Frameworks & Libraries", 
      skills: [
        { name: "Spring Boot", level: 90, icon: "🍃" },
        { name: "React.js", level: 88, icon: "⚛️" },
        { name: "Flutter", level: 82, icon: "📱" },
        { name: "Hibernate", level: 85, icon: "💾" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 88, icon: "🔧" },
        { name: "Postman", level: 85, icon: "📮" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "Lovable.ai", level: 85, icon: "🤖" },
        { name: "VS Code", level: 92, icon: "💻" }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl hero-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl hero-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-orange-400 font-semibold text-lg mb-4">Technical Expertise</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about learning and mastering cutting-edge technologies to build robust, scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skills Grid */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="card-3d p-6 bg-white/10 backdrop-blur-sm border border-white/20"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="text-slate-200 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-orange-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${isVisible ? 'animate-in' : ''}`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 3D Visualization */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Main Skills Dashboard */}
              <div className="card-3d p-8 bg-gradient-to-br from-orange-500 to-red-600 text-white">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Development Stack</h3>
                    <p className="text-orange-100">Full-Stack Capabilities</p>
                  </div>

                  {/* Tech Stack Visual */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "Frontend", icon: "🎨", color: "bg-blue-500" },
                      { name: "Backend", icon: "⚙️", color: "bg-green-500" },
                      { name: "Database", icon: "🗄️", color: "bg-purple-500" },
                      { name: "Mobile", icon: "📱", color: "bg-pink-500" },
                      { name: "Cloud", icon: "☁️", color: "bg-cyan-500" },
                      { name: "DevOps", icon: "🔧", color: "bg-yellow-500" }
                    ].map((item, index) => (
                      <div 
                        key={item.name}
                        className={`${item.color} rounded-lg p-4 text-center hero-float`}
                        style={{ animationDelay: `${index * 0.3}s` }}
                      >
                        <div className="text-2xl mb-1">{item.icon}</div>
                        <div className="text-xs font-semibold">{item.name}</div>
                      </div>
                    ))}
                  </div>

                  {/* Experience Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold">2+</div>
                      <div className="text-sm text-orange-100">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm text-orange-100">Projects Built</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold hero-float">
                JS
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold hero-float" style={{ animationDelay: '2s' }}>
                J
              </div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold hero-float" style={{ animationDelay: '4s' }}>
                SQL
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Full Stack Web Development", issuer: "Excelr", icon: "🎓" },
              { title: "Java (Core & Advanced)", issuer: "Core2web", icon: "☕" },
              { title: "Certificate of Appreciation", issuer: "Military Institute of Technology", icon: "🏆" }
            ].map((cert, index) => (
              <div 
                key={cert.title}
                className="card-3d p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-slate-300 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;