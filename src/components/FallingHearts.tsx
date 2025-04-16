
import { useEffect, useRef } from 'react';

interface HeartProps {
  density?: number;
}

const FallingHearts = ({ density = 15 }: HeartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const hearts = [];
    const colors = ['#FF6B8B', '#FF8E9E', '#FFA6B5', '#FFB8C5', '#FFD4DC'];
    
    // Create falling hearts
    for (let i = 0; i < density; i++) {
      createHeart();
    }
    
    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'falling-heart';
      
      // Random position, size and color
      const size = Math.random() * 25 + 10;
      const xPos = Math.random() * window.innerWidth;
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 5;
      const colorIndex = Math.floor(Math.random() * colors.length);
      
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.left = `${xPos}px`;
      heart.style.animationDelay = `${delay}s`;
      heart.style.animationDuration = `${duration}s`;
      
      // Create the heart SVG with the random color
      const svgHeart = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${colors[colorIndex]}" width="${size}" height="${size}">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      `;
      
      heart.innerHTML = svgHeart;
      hearts.push(heart);
      container.appendChild(heart);
      
      // Remove heart when animation ends
      heart.addEventListener('animationend', () => {
        heart.remove();
        const index = hearts.indexOf(heart);
        if (index > -1) {
          hearts.splice(index, 1);
        }
        // Create a new heart to replace it
        createHeart();
      });
    }
    
    return () => {
      hearts.forEach(heart => heart.remove());
    };
  }, [density]);
  
  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style jsx>{`
        .falling-heart {
          position: absolute;
          top: -50px;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: 1;
          opacity: 0.7;
        }
        
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          20% {
            transform: translateY(20vh) rotate(45deg);
            opacity: 0.8;
          }
          40% {
            transform: translateY(40vh) rotate(90deg);
            opacity: 0.9;
          }
          60% {
            transform: translateY(60vh) rotate(135deg);
            opacity: 0.8;
          }
          80% {
            transform: translateY(80vh) rotate(180deg);
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh) rotate(225deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FallingHearts;
