import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`nav-3d ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-xl text-slate-800">Prajwal</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {["home", "about", "skills", "portfolio", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="nav-item capitalize font-medium text-slate-700 hover:text-orange-500"
            >
              {item}
            </button>
          ))}
        </div>

        <Button 
          onClick={() => scrollToSection("contact")}
          className="btn-hero"
        >
          Get in Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;