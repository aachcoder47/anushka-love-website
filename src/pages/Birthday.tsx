
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Gift, Camera, PenSquare } from "lucide-react";
import Confetti from "@/components/Confetti";
import HeartBackground from "@/components/HeartBackground";
import MusicPlayer from "@/components/MusicPlayer";
import FallingHearts from "@/components/FallingHearts";

const Birthday = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    heading: false,
    message: false,
    gallery: false,
    wishes: false,
    footer: false,
    music: false,
    navigation: false
  });
  
  useEffect(() => {
    // Show confetti after a short delay
    setTimeout(() => {
      setShowConfetti(true);
      
      toast({
        title: "Happy Birthday Anushka! 🎂",
        description: "I love you so much!",
        duration: 5000,
      });
    }, 500);
    
    // Animated entrance for sections with staggered timing
    const timers = [
      setTimeout(() => setVisibleSections(prev => ({ ...prev, heading: true })), 300),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, message: true })), 800),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, gallery: true })), 1300),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, wishes: true })), 1800),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, footer: true })), 2300),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, music: true })), 2600),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, navigation: true })), 2900),
    ];
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-pink-gradient py-12 px-4 sm:px-6 relative overflow-hidden">
      {showConfetti && <Confetti />}
      <HeartBackground />
      <FallingHearts density={10} />
      
      <div className="max-w-5xl mx-auto">
        {/* Home Navigation */}
        <div className="absolute top-4 left-4 z-20">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/50 backdrop-blur-sm hover:bg-white/70 text-love-dark transition-all duration-300"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={20} />
          </Button>
        </div>
        
        <div className={`transition-all duration-1000 transform ${visibleSections.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16 relative">
            <div className="ribbon animate-float">
              <span className="ribbon-content">With Love</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-love-dark mb-4 text-shadow-lg">Happy Birthday Anushka!</h1>
            <p className="text-xl text-gray-600 animate-pulse">Today is all about celebrating the amazing person you are!</p>
          </div>
        </div>
        
        <div className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-12 relative transition-all duration-1000 transform ${visibleSections.message ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-2xl hover:scale-[1.01] transition-all duration-300`}>
          <h2 className="text-4xl font-bold text-love-dark mb-6 animate-float">My Love For You</h2>
          <p className="text-lg text-gray-700 mb-4 first-letter:text-4xl first-letter:font-bold first-letter:text-love-dark first-letter:mr-1 first-letter:float-left">
            Every moment with you feels like a dream come true. Your smile brightens my darkest days, and your love gives me strength I never knew I had.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            On your special day, I want you to know that you are the most precious person in my life. The way you care, the way you laugh, and the way you love - everything about you is perfect.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Thank you for being you, for loving me, and for bringing endless joy into my life.
          </p>
          <div className="text-2xl font-bold text-love mt-8 text-center animate-heartbeat">💖 I Love You To The Moon And Back 💖</div>
          
          <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-love/20 rounded-full blur-2xl"></div>
          <div className="absolute -left-2 -top-2 w-16 h-16 bg-love/10 rounded-full blur-xl"></div>
        </div>
        
        <div className={`mb-12 transition-all duration-1000 transform ${visibleSections.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold text-love-dark">Our Precious Moments</h2>
            <Button 
              className="bg-love hover:bg-love-dark group"
              onClick={() => navigate("/memories")}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Camera size={18} className="mr-2 group-hover:animate-pulse" />
              <span>All Memories</span>
              <Heart size={16} className={`ml-2 transition-all ${isHovered ? 'scale-125 text-white' : 'scale-100'}`} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gallery">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <img src="/lovable-uploads/9901f9a5-e8bc-4ba0-ad93-35d1fbe95d26.png" alt="Our Memory" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <img src="/lovable-uploads/f4f25058-883a-4207-a74e-c0e7594f50eb.png" alt="Our Memory" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <img src="/lovable-uploads/9848dd2d-9a71-4b43-8687-2097a89c1ac2.png" alt="Our Memory" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        <div className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-12 transition-all duration-1000 transform ${visibleSections.wishes ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-2xl hover:scale-[1.01] transition-all duration-300`}>
          <h2 className="text-4xl font-bold text-love-dark mb-6">Birthday Wishes</h2>
          <div className="space-y-6">
            <div className="p-4 bg-love-light rounded-lg hover:shadow-md transition-all">
              <p className="text-lg font-medium mb-2">My wish for you today:</p>
              <p className="text-gray-700">May your day be as beautiful as your smile, as warm as your heart, and as amazing as you are. May this year bring you endless joy, success in all you do, and love that grows stronger each day.</p>
            </div>
            
            <div className="p-4 bg-love-light rounded-lg hover:shadow-md transition-all">
              <p className="text-lg font-medium mb-2">My promise to you:</p>
              <p className="text-gray-700">I promise to be there for you in good times and bad, to hold your hand through every journey, and to love you more with each passing day. You are my today and all of my tomorrows.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              className="bg-love hover:bg-love-dark text-white font-bold px-8 py-4 text-lg animate-heartbeat hover:shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => navigate("/love-notes")}
            >
              <Heart className="mr-2" fill="white" />
              <span>Read My Love Notes</span>
              <Heart className="ml-2" fill="white" />
            </Button>
          </div>
        </div>
        
        <div className={`text-center mt-16 transition-all duration-1000 transform ${visibleSections.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl text-love-dark font-medium">Made with ❤️ just for you</p>
          <p className="text-love mt-2">Forever Yours</p>
        </div>
        
        {/* Music player fixed at bottom */}
        <div className={`fixed bottom-4 right-4 z-20 transition-all duration-1000 ${visibleSections.music ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <MusicPlayer />
        </div>
        
        {/* Navigation Pills */}
        <div className={`fixed top-4 right-4 flex gap-2 z-20 transition-all duration-1000 ${visibleSections.navigation ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <Button 
            variant="outline" 
            className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-love-dark border-love/20"
            onClick={() => navigate("/memories")}
          >
            <Camera size={16} className="mr-2" /> Memories
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-love-dark border-love/20"
            onClick={() => navigate("/love-notes")}
          >
            <PenSquare size={16} className="mr-2" /> Love Notes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
