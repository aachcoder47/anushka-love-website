
import { useEffect, useRef } from 'react';

const Confetti = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const confettiCount = 150;
    const colors = ['#FF6B8B', '#FFD4DC', '#FFC3D8', '#FFB1C8', '#FFAEC5', '#FFC8D7', '#FFE3EA'];
    
    // Create the confetti pieces
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      
      // Random position, size, color, and shape
      const size = Math.random() * 10 + 5;
      const borderRadius = Math.random() < 0.5 ? '50%' : '0'; // Circle or square
      const xPos = Math.random() * window.innerWidth;
      const colorIndex = Math.floor(Math.random() * colors.length);
      
      confetti.style.left = `${xPos}px`;
      confetti.style.top = '-20px';
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = colors[colorIndex];
      confetti.style.borderRadius = borderRadius;
      
      // Animation
      confetti.style.animation = `confetti ${Math.random() * 3 + 2}s linear forwards ${Math.random() * 2}s`;
      
      container.appendChild(confetti);
    }
    
    // Clean up
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
};

export default Confetti;
