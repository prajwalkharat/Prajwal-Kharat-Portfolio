import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden parallax-section">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-orange-400/20 rounded-full hero-float" />
        <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-blue-400/20 rounded-lg hero-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-3/4 w-12 h-12 bg-purple-400/20 rounded-full hero-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-orange-500 font-semibold text-lg text-reveal">
                👋 Hi, my name is
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                <span className="text-reveal">Prajwal</span>
                <br />
                <span className="text-reveal text-gradient" style={{ animationDelay: '0.2s' }}>
                  Kharat.
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed text-reveal" style={{ animationDelay: '0.4s' }}>
                I love creating beautiful user experiences. Full-stack developer passionate about building scalable applications with modern technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-reveal" style={{ animationDelay: '0.6s' }}>
              <Button 
                onClick={() => scrollToSection("portfolio")}
                className="btn-hero"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                className="px-8 py-4 rounded-full border-2 border-slate-300 hover:border-orange-400 hover:bg-orange-50 transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 text-reveal" style={{ animationDelay: '0.8s' }}>
              <a href="https://github.com" className="text-slate-600 hover:text-orange-500 transition-colors p-2 hover:scale-110 transform duration-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-slate-600 hover:text-orange-500 transition-colors p-2 hover:scale-110 transform duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:prajwalkharat.skn.comp@gmail.com" className="text-slate-600 hover:text-orange-500 transition-colors p-2 hover:scale-110 transform duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* 3D Character/Workspace */}
          <div className="relative hero-float">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Character Container */}
              <div className="card-3d p-8 bg-white/80 backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Character Avatar */}
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center hero-glow">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-orange-500">PK</span>
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-100 rounded-lg p-3 text-center">
                      <div className="text-xs text-slate-500">Experience</div>
                      <div className="font-semibold text-slate-800">2+ Years</div>
                    </div>
                    <div className="bg-slate-100 rounded-lg p-3 text-center">
                      <div className="text-xs text-slate-500">Projects</div>
                      <div className="font-semibold text-slate-800">15+</div>
                    </div>
                  </div>

                  {/* Tech Stack Icons */}
                  <div className="flex justify-center space-x-4">
                    {["Java", "React", "Spring", "MySQL"].map((tech, index) => (
                      <div 
                        key={tech}
                        className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-xs font-semibold text-blue-700 hero-float"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      >
                        {tech.slice(0, 2)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-slate-500 text-sm mb-2">Scroll to explore</div>
          <ChevronDown className="mx-auto text-slate-400 animate-bounce" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;