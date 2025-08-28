import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Remove from DOM after fade out completes
      setTimeout(() => setIsMounted(false), 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="relative w-20 h-20 transform-style-preserve-3d animate-spin-slow">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-full h-full bg-blue-500/80 border-2 border-blue-700/80"
            style={{
              transform: [
                'rotateY(0deg) translateZ(40px)',
                'rotateY(90deg) translateZ(40px)',
                'rotateY(180deg) translateZ(40px)',
                'rotateY(270deg) translateZ(40px)',
                'rotateX(90deg) translateZ(40px)',
                'rotateX(-90deg) translateZ(40px)'
              ][i]
            }}
          />
        ))}
      </div>
      <div className="mt-8 text-xl font-semibold text-slate-200">
        Loading Portfolio...
      </div>
    </div>
  );
};

export default LoadingScreen;