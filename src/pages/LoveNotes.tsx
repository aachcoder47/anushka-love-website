
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Gift, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import HeartBackground from "@/components/HeartBackground";
import FallingHearts from "@/components/FallingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import LoveQuotes from "@/components/LoveQuotes";

const loveNotes = [
  {
    title: "When I First Saw You",
    content: "The moment our eyes met, I knew my heart would never be the same. Your smile lit up the room and I couldn't look away.",
    color: "#FF6B8B",
    icon: Heart
  },
  {
    title: "My Favorite Memory",
    content: "Remember that night under the stars? You pointed at constellations and I was just looking at you, thinking how lucky I am to have found someone so perfect.",
    color: "#FF8E9E",
    icon: Star
  },
  {
    title: "What You Mean To Me",
    content: "You're my best friend, my confidant, my partner in everything. You make every day brighter just by being in it. Your laugh is my favorite sound.",
    color: "#FFA6B5",
    icon: Heart
  },
  {
    title: "My Promise",
    content: "I promise to stand by you through every storm, to hold your hand when you need strength, and to love you with all my heart for all of my days.",
    color: "#FFB8C5",
    icon: Gift
  },
  {
    title: "Our Future",
    content: "I dream of growing old with you, of building a life filled with adventures, laughter, and unconditional love. Every day with you is a gift I cherish.",
    color: "#FFD4DC",
    icon: Star
  }
];

const LoveNotes = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [visibleNotes, setVisibleNotes] = useState<number[]>([]);
  const [hoveredNote, setHoveredNote] = useState<number | null>(null);
  const [showFloatingHearts, setShowFloatingHearts] = useState(false);
  
  useEffect(() => {
    toast({
      title: "My Love Notes to You ❤️",
      description: "Words from my heart to yours",
      duration: 4000,
    });
    
    const timers = loveNotes.map((_, index) => {
      return setTimeout(() => {
        setVisibleNotes(prev => [...prev, index]);
      }, 300 * index);
    });
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [toast]);

  const createFloatingHeart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showFloatingHearts) return;
    
    const heart = document.createElement('div');
    heart.className = 'absolute w-5 h-5 animate-fly-away pointer-events-none';
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    
    const randomColor = loveNotes[Math.floor(Math.random() * loveNotes.length)].color;
    
    heart.innerHTML = `
      <svg viewBox="0 0 24 24" fill="${randomColor}" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 1000);
  };
  
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50 py-12 px-4 sm:px-6 relative overflow-hidden"
      onMouseMove={createFloatingHeart}
    >
      <HeartBackground />
      <FallingHearts density={5} />
      
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/4 opacity-20 animate-rotate-slow">
        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-love to-love-dark blur-xl"></div>
      </div>
      <div className="absolute -right-20 bottom-1/4 opacity-20 animate-rotate-slow" style={{ animationDirection: 'reverse' }}>
        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-love-light to-love blur-xl"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-love/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-love/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="absolute top-4 left-4 z-20">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/50 backdrop-blur-sm hover:bg-white/70 text-love-dark transition-all duration-300 shadow-md"
            onClick={() => navigate("/anniversary")}
          >
            <ArrowLeft size={20} />
          </Button>
        </div>
        
        <div className="fixed top-4 right-4 z-50">
          <MusicPlayer />
        </div>
        
        <div className="text-center mb-8">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-love via-love-dark to-love bg-clip-text mb-4 font-dancing animate-float relative z-10">
              Love Notes for You
            </h1>
            <div className="absolute -z-0 w-full h-8 bg-love-light/50 -bottom-2 left-0 transform -rotate-1"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-dancing mt-4">
            These little notes carry big feelings - all the ways you make my heart flutter.
          </p>
          
          <div className="mt-4">
            <Button 
              variant="ghost" 
              className="text-love hover:text-love-dark hover:bg-love-light/30 transition-all duration-300"
              onClick={() => setShowFloatingHearts(prev => !prev)}
            >
              <Heart className={`mr-2 ${showFloatingHearts ? 'fill-love' : ''}`} size={16} />
              {showFloatingHearts ? 'Hearts Activated!' : 'Click For Hearts'}
            </Button>
          </div>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-md shadow-xl border-love/20 overflow-hidden animate-pulse-glow">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-love-light to-love/20 rounded-bl-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-love-light to-love/20 rounded-tr-full opacity-50"></div>
          
          <CardContent className="p-8 relative z-10">
            <div className="grid gap-6">
              {loveNotes.map((note, index) => {
                const IconComponent = note.icon;
                
                return (
                  <div 
                    key={index}
                    className={`transition-all duration-700 transform ${
                      visibleNotes.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    onMouseEnter={() => setHoveredNote(index)}
                    onMouseLeave={() => setHoveredNote(null)}
                  >
                    <div className="relative bg-gradient-to-r from-white/50 to-white/90 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                      <div 
                        className={`absolute -left-2 top-0 h-full w-1 rounded-full transition-all duration-300 ${
                          hoveredNote === index ? 'w-1.5' : 'w-1'
                        }`}
                        style={{ backgroundColor: note.color, boxShadow: hoveredNote === index ? `0 0 8px ${note.color}` : 'none' }} 
                      />
                      <div className="pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div 
                            className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
                              hoveredNote === index ? 'animate-heartbeat' : ''
                            }`} 
                            style={{ 
                              backgroundColor: hoveredNote === index ? note.color : 'transparent',
                              transform: hoveredNote === index ? 'scale(1.1)' : 'scale(1)',
                              boxShadow: hoveredNote === index ? `0 0 10px ${note.color}` : 'none'
                            }}
                          >
                            <IconComponent 
                              className="transition-all duration-300" 
                              size={18} 
                              fill={hoveredNote === index ? "white" : note.color}
                              stroke={hoveredNote === index ? "white" : note.color}
                            />
                          </div>
                          <h3 className="text-xl font-semibold text-love-dark font-dancing">{note.title}</h3>
                        </div>
                        <p className="text-gray-700 italic font-dancing text-lg ml-1 leading-relaxed">{note.content}</p>
                      </div>
                      
                      {hoveredNote === index && (
                        <div className="absolute -right-2 -bottom-2 transform rotate-12 transition-all duration-500 ease-in-out opacity-70">
                          <div className="relative">
                            <IconComponent size={32} fill={note.color} />
                            <div className="absolute inset-0 animate-pulse-glow" style={{ boxShadow: `0 0 15px ${note.color}` }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                    {index < loveNotes.length - 1 && (
                      <div className="border-b border-dashed border-love/20 my-4" />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center">
          <Button 
            className="bg-gradient-to-r from-love to-love-dark hover:opacity-90 text-white transition-all duration-300 hover:scale-105 px-6 py-2 h-auto shadow-lg"
            onClick={() => navigate("/anniversary")}
          >
            <Heart className="mr-2" size={16} fill="white" />
            Back to Anniversary
          </Button>
        </div>
        
        <div className="mt-12 glass-card p-4 rounded-xl max-w-md mx-auto">
          <LoveQuotes />
        </div>
      </div>
    </div>
  );
};

export default LoveNotes;
