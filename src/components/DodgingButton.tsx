
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface DodgingButtonProps {
  children: React.ReactNode;
  className?: string;
}

const DodgingButton = ({ children, className = "" }: DodgingButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (!buttonRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      
      const button = buttonRef.current;
      const buttonRect = button.getBoundingClientRect();
      
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Calculate distance between mouse and button center
      const distance = Math.sqrt(
        Math.pow(mouseX - buttonCenterX, 2) + Math.pow(mouseY - buttonCenterY, 2)
      );
      
      // If mouse is close to the button, move it away
      if (distance < 100) {
        // Calculate angle
        const angle = Math.atan2(mouseY - buttonCenterY, mouseX - buttonCenterX);
        
        // Move away from mouse (inverse direction)
        const moveX = Math.cos(angle) * (150 - distance);
        const moveY = Math.sin(angle) * (150 - distance);
        
        // Make sure button stays visible on screen
        const newX = Math.max(
          -buttonRect.left + 10,
          Math.min(
            window.innerWidth - buttonRect.right + 10,
            -moveX
          )
        );
        
        const newY = Math.max(
          -buttonRect.top + 10,
          Math.min(
            window.innerHeight - buttonRect.bottom + 10,
            -moveY
          )
        );
        
        setPosition({ x: newX, y: newY });
      }
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <Button
      ref={buttonRef}
      className={`cursor-dodge relative ${className}`}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
        backgroundColor: "#FF6B8B",
        transition: "transform 0.2s ease-out",
      }}
    >
      {children}
    </Button>
  );
};

export default DodgingButton;
