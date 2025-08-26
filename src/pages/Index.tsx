import { useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className="relative overflow-hidden">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Index;
