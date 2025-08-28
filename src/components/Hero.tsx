import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, X } from "lucide-react";

// Import images
const developerCharacter = "/assets/developer-avatar.svg";

// Import technology logos
const javaLogo = "/assets/java-icon.svg";
const reactLogo = "/assets/react-logo.svg";
const springLogo = "/assets/springio-icon.svg";
const mysqlLogo = "/assets/mysql-icon.svg";
const flutterLogo = "/assets/flutterio-icon.svg";
const dartLogo = "/assets/dartlang-icon.svg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showContact, setShowContact] = useState(false);

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

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <a 
                href="mailto:prajwalkharat.skn.comp@gmail.com" 
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-orange-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium text-slate-800">prajwalkharat.skn.comp@gmail.com</p>
                  <p className="text-sm text-slate-500 mt-1">Send me an email anytime!</p>
                </div>
              </a>

              <a 
                href="tel:+918856003489"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium text-slate-800">+91 88560 03489</p>
                  <p className="text-sm text-slate-500 mt-1">Call for urgent matters</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium text-slate-800">Maharashtra, India</p>
                  <p className="text-sm text-slate-500 mt-1">Available for remote work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-orange-500 font-semibold text-lg text-reveal">
                👋 Hi, my name is
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                <span className="inline-block overflow-hidden">
                  <span className="inline-block typewriter">Prajwal</span>
                </span>
                <br />
                <span className="inline-block overflow-hidden">
                  <span className="inline-block typewriter text-gradient" style={{ animationDelay: '1.2s' }}>
                    Kharat.
                  </span>
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
                onClick={() => setShowContact(true)}
                variant="outline" 
                className="px-8 py-4 rounded-full border-2 border-orange-300 text-orange-600 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-700 transition-all duration-300"
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

          {/* Developer Image */}
          <div className="relative hero-float">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Image Container */}
              <div className="card-3d p-8 bg-white/80 backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Developer Photo */}
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-orange-400 shadow-xl shadow-orange-500/20">
                    <img 
                      src="/man-with-hat.png" 
                      alt="Developer" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-100 rounded-lg p-3 text-center">
                      <div className="text-xs text-slate-500">Experience</div>
                      <div className="font-semibold text-slate-800">Fresher</div>
                    </div>
                    <div className="bg-slate-100 rounded-lg p-3 text-center">
                      <div className="text-xs text-slate-500">Projects</div>
                      <div className="font-semibold text-slate-800">15+</div>
                    </div>
                  </div>

                  {/* Tech Stack Icons */}
                  <div className="flex justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center hero-float">
                      <img src={javaLogo} alt="Java" className="w-8 h-8" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center hero-float" style={{ animationDelay: '0.5s' }}>
                      <img src={reactLogo} alt="React" className="w-8 h-8" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center hero-float" style={{ animationDelay: '1s' }}>
                      <img src={springLogo} alt="Spring Boot" className="w-8 h-8" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center hero-float" style={{ animationDelay: '1.5s' }}>
                      <img src={mysqlLogo} alt="MySQL" className="w-8 h-8" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center hero-float" style={{ animationDelay: '2s' }}>
                      <img src={flutterLogo} alt="Flutter" className="w-8 h-8" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center hero-float" style={{ animationDelay: '2.5s' }}>
                      <img src={dartLogo} alt="Dart" className="w-8 h-8" />
                    </div>
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