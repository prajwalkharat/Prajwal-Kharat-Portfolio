import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader-container">
      <div className="loader-3d">
        <div className="loader-face" style={{ transform: 'rotateY(0deg) translateZ(40px)' }} />
        <div className="loader-face" style={{ transform: 'rotateY(90deg) translateZ(40px)' }} />
        <div className="loader-face" style={{ transform: 'rotateY(180deg) translateZ(40px)' }} />
        <div className="loader-face" style={{ transform: 'rotateY(270deg) translateZ(40px)' }} />
        <div className="loader-face" style={{ transform: 'rotateX(90deg) translateZ(40px)' }} />
        <div className="loader-face" style={{ transform: 'rotateX(-90deg) translateZ(40px)' }} />
      </div>
      <div className="absolute bottom-1/3 text-xl font-semibold text-slate-700">
        Loading Portfolio...
      </div>
    </div>
  );
};

export default LoadingScreen;