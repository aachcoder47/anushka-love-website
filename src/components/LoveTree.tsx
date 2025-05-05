
import { useState, useEffect } from 'react';

interface LoveTreeProps {
  className?: string;
}

const LoveTree = ({ className = "" }: LoveTreeProps) => {
  const [growthStage, setGrowthStage] = useState(0);
  const maxStage = 5;
  
  useEffect(() => {
    // Animate the tree growing
    if (growthStage < maxStage) {
      const timer = setTimeout(() => {
        setGrowthStage(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [growthStage]);
  
  // Colors for the tree
  const trunkColor = "#8B4513";
  const leafColor = "#FF6B8B";
  const heartColor = "#FF4370";
  
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
        {/* Trunk */}
        <path 
          d={`M90,300 Q${90 + growthStage * 5},${220 - growthStage * 20} 100,${180 - growthStage * 30}`} 
          stroke={trunkColor} 
          strokeWidth="10" 
          fill="none"
          style={{ transition: 'all 0.5s ease-out' }}
        />
        <path 
          d={`M110,300 Q${110 - growthStage * 5},${220 - growthStage * 20} 100,${180 - growthStage * 30}`} 
          stroke={trunkColor} 
          strokeWidth="10" 
          fill="none"
          style={{ transition: 'all 0.5s ease-out' }}
        />
        
        {/* Branches - only appear in later stages */}
        {growthStage >= 2 && (
          <>
            <path 
              d={`M100,${180 - (growthStage-2) * 30} Q${130 + (growthStage-2) * 10},${160 - (growthStage-2) * 30} ${140 + (growthStage-2) * 10},${140 - (growthStage-2) * 20}`} 
              stroke={trunkColor} 
              strokeWidth="6" 
              fill="none"
              style={{ transition: 'all 0.5s ease-out' }}
            />
            <path 
              d={`M100,${180 - (growthStage-2) * 30} Q${70 - (growthStage-2) * 10},${160 - (growthStage-2) * 30} ${60 - (growthStage-2) * 10},${140 - (growthStage-2) * 20}`} 
              stroke={trunkColor} 
              strokeWidth="6" 
              fill="none"
              style={{ transition: 'all 0.5s ease-out' }}
            />
          </>
        )}
        
        {/* Leaves/Foliage */}
        {growthStage >= 3 && (
          <>
            <circle 
              cx="100" 
              cy={120 - (growthStage-3) * 20} 
              r={20 + (growthStage-3) * 10} 
              fill={leafColor}
              style={{ transition: 'all 0.5s ease-out' }}
            />
            <circle 
              cx={140 + (growthStage-2) * 10} 
              cy={140 - (growthStage-2) * 20} 
              r={15 + (growthStage-3) * 5} 
              fill={leafColor}
              style={{ transition: 'all 0.5s ease-out' }}
            />
            <circle 
              cx={60 - (growthStage-2) * 10} 
              cy={140 - (growthStage-2) * 20} 
              r={15 + (growthStage-3) * 5} 
              fill={leafColor}
              style={{ transition: 'all 0.5s ease-out' }}
            />
          </>
        )}
        
        {/* Hearts - appear in final stage */}
        {growthStage >= maxStage && (
          <>
            <path 
              d="M100,80 C90,70 70,75 70,90 C70,105 100,115 100,115 C100,115 130,105 130,90 C130,75 110,70 100,80" 
              fill={heartColor}
              className="animate-heartbeat"
              style={{ transformOrigin: 'center' }}
            />
            <path 
              d="M150,120 C145,115 135,118 135,125 C135,132 150,138 150,138 C150,138 165,132 165,125 C165,118 155,115 150,120" 
              fill={heartColor}
              className="animate-heartbeat"
              style={{ transformOrigin: 'center', animationDelay: '0.5s' }}
            />
            <path 
              d="M50,120 C45,115 35,118 35,125 C35,132 50,138 50,138 C50,138 65,132 65,125 C65,118 55,115 50,120" 
              fill={heartColor}
              className="animate-heartbeat"
              style={{ transformOrigin: 'center', animationDelay: '1s' }}
            />
            <path 
              d="M75,150 C72,147 67,148 67,153 C67,158 75,160 75,160 C75,160 83,158 83,153 C83,148 78,147 75,150" 
              fill={heartColor}
              className="animate-heartbeat"
              style={{ transformOrigin: 'center', animationDelay: '0.7s' }}
            />
            <path 
              d="M125,150 C122,147 117,148 117,153 C117,158 125,160 125,160 C125,160 133,158 133,153 C133,148 128,147 125,150" 
              fill={heartColor}
              className="animate-heartbeat"
              style={{ transformOrigin: 'center', animationDelay: '1.2s' }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default LoveTree;
