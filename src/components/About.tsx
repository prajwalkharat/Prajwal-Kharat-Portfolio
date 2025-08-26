import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-orange-500 font-semibold text-lg">About Me</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Crafting Digital
                <span className="text-gradient"> Experiences</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Computer Science graduate with hands-on experience in Java, JavaScript, SQL, Spring Boot, and React.js. 
                Proficient in SDLC and object-oriented programming with a proven track record in both backend and frontend development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Backend Development",
                    "Frontend Development", 
                    "API Integration",
                    "Code Debugging",
                    "Responsive Design",
                    "Version Control"
                  ].map((skill, index) => (
                    <div 
                      key={skill}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white/70 backdrop-blur-sm card-3d"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Education</h3>
                <div className="card-3d p-6 bg-white/70 backdrop-blur-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800">B.E. in Computer Science & Engineering</h4>
                    <p className="text-orange-600 font-medium">Savitribai Phule Pune University</p>
                    <p className="text-slate-600">Shrimati Kashibai Navale College of Engineering, Pune</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">2020 – 2024</span>
                      <span className="font-semibold text-orange-600">CGPA: 7.91/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Main Card */}
              <div className="card-3d p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
                <div className="space-y-6">
                  {/* Profile Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">PK</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Prajwal Kharat</h3>
                      <p className="text-blue-200">Full Stack Developer</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">23</div>
                      <div className="text-xs text-blue-200">Age</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">2+</div>
                      <div className="text-xs text-blue-200">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">IN</div>
                      <div className="text-xs text-blue-200">India</div>
                    </div>
                  </div>

                  {/* Tech Skills Preview */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">TECHNICAL SKILLS</h4>
                    {[
                      { name: "Java & Spring Boot", level: 90 },
                      { name: "React.js", level: 85 },
                      { name: "JavaScript ES6+", level: 88 },
                      { name: "MySQL & Database", level: 82 }
                    ].map((skill, index) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-white/80 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${index * 0.2}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full hero-float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-lg hero-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;