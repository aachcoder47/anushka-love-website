
import { useEffect, useRef } from "react";

const HeartBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const colors = ['#FF6B8B', '#FF8E9E', '#FFA6B5', '#FFB8C5', '#FFD4DC'];
    
    const createHeart = () => {
      if (!container) return;
      
      const heart = document.createElement('div');
      heart.className = 'heart';
      
      // Random position, size and color
      const size = Math.random() * 20 + 10;
      const xPos = Math.random() * window.innerWidth;
      const colorIndex = Math.floor(Math.random() * colors.length);
      
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.left = `${xPos}px`;
      heart.style.filter = `hue-rotate(${Math.random() * 30 - 15}deg)`;
      
      // Create the heart SVG with the random color
      const svgHeart = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${colors[colorIndex]}" width="${size}" height="${size}">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      `;
      
      heart.innerHTML = svgHeart;
      
      // Animation
      heart.style.animation = `floatHeart ${Math.random() * 3 + 3}s ease-in-out forwards`;
      
      container.appendChild(heart);
      
      // Remove heart when animation ends
      setTimeout(() => {
        heart.remove();
      }, 6000);
    };
    
    // Create hearts at an interval
    const interval = setInterval(createHeart, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  return <div ref={containerRef} className="heart-container" />;
};

export default HeartBackground;
