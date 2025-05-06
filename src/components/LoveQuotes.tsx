
import { useState, useEffect } from 'react';
import { Heart, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";

const quotes = [
  "Every time I see you, I fall in love all over again.",
  "In a world full of people, my eyes will always search for you.",
  "You're the first thought in my morning and the last thought in my night.",
  "My love for you is a journey, starting at forever and ending at never.",
  "If I know what love is, it is because of you.",
  "I love you more than yesterday, but less than tomorrow.",
  "You are my today and all of my tomorrows.",
  "To love is nothing. To be loved is something. To love and be loved is everything.",
  "I never knew how to worship until I knew your name.",
  "You're my favorite notification."
];

const LoveQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  
  const changeQuote = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
      setIsChanging(false);
    }, 500);
  };
  
  useEffect(() => {
    // Auto-change quotes every 10 seconds
    const interval = setInterval(() => {
      changeQuote();
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-2">
        <Heart className="text-love mr-1" size={16} />
        <h3 className="text-sm font-medium">Love Notes</h3>
      </div>
      
      <div 
        className={`text-center mb-3 h-16 flex items-center justify-center transition-opacity duration-500 ${isChanging ? 'opacity-0' : 'opacity-100'}`}
      >
        <p className="text-sm text-gray-700 italic">{quotes[currentQuote]}</p>
      </div>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-xs flex items-center text-gray-500 hover:text-love"
        onClick={changeQuote}
      >
        <RefreshCw size={12} className="mr-1" />
        New quote
      </Button>
    </div>
  );
};

export default LoveQuotes;
