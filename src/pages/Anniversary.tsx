import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Gift, Camera, PenSquare } from "lucide-react";
import Confetti from "@/components/Confetti";
import HeartBackground from "@/components/HeartBackground";
import MusicPlayer from "@/components/MusicPlayer";
import FallingHearts from "@/components/FallingHearts";
import LoveQuotes from "@/components/LoveQuotes";
import PageTransition from "@/components/PageTransition";

const Anniversary = () => {
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
  const [showTransition, setShowTransition] = useState(false);
  const [transitionConfig, setTransitionConfig] = useState({ to: '', message: '' });

  const handleNavigation = (to: string, message: string) => {
    setTransitionConfig({ to, message });
    setShowTransition(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(true);
      
      toast({
        title: "Happy 2nd Anniversary! 💑",
        description: "Two years of endless love and beautiful memories!",
        duration: 5000,
      });
    }, 500);
    
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50 py-6 sm:py-12 px-3 sm:px-6 relative overflow-hidden">
      {showTransition && (
        <PageTransition 
          to={transitionConfig.to}
          message={transitionConfig.message}
        />
      )}
      
      {showConfetti && <Confetti />}
      <HeartBackground />
      <FallingHearts density={15} />
      
      <div className="max-w-5xl mx-auto">
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/50 backdrop-blur-sm hover:bg-white/70 text-love-dark transition-all duration-300"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
        
        <div className={`transition-all duration-1000 transform ${visibleSections.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8 sm:mb-16 relative">
            <div className="ribbon animate-float">
              <span className="ribbon-content text-sm sm:text-base">Two Years Together</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-love-dark mb-2 sm:mb-4 text-shadow-lg font-dancing">Happy Anniversary!</h1>
            <p className="text-base sm:text-xl text-gray-600 animate-pulse">Celebrating 2 years of endless love and beautiful moments</p>
          </div>
        </div>
        
        <div className={`bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-4 sm:p-8 mb-8 sm:mb-12 relative transition-all duration-1000 transform ${visibleSections.message ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-2xl hover:scale-[1.01] transition-all duration-300`}>
          <h2 className="text-2xl sm:text-4xl font-bold text-love-dark mb-4 sm:mb-6 font-dancing animate-float">Two Years of Magic</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-love-dark first-letter:mr-1 first-letter:float-left">
          Heyyyy babyiee 🤭🎀✨ itss our anniversary 💕 anddd i loveeee u sooo muchh baachaa apn ek sath 2yrs complete krliye yeahh🤭🫀 literally  yrrr We started this beautiful journey on 6th May 2023, 🤭🎀 ndd since that day, we've faced so many ups and downs, yet here we are—stronger than ever! 🙈🫀✨Through every challenge, our love never faded, our care never lessened, 💕✨and our trust only grew deeper. Thank you for standing by me, 👉👈for being my biggest support, ❤my happiness, and my everything. 🎀✨I'm truly lucky to have you in my life babyieeee🤭          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
            You make every moment special,🤭 every day brighter,🎀✨ and my life complete. 🤭🫀 
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
            Thank you for being my perfect partner,🤭🫀best friend, wifeeyy💕 and soulmate.🫀✨I fall in love with you more and more each day.🙈🫀✨
          </p>
          <div className="text-xl sm:text-2xl font-bold text-love mt-6 sm:mt-8 text-center animate-heartbeat font-dancing">
            💖 Two Years Down, Forever to Go 💖
          </div>
          
          <div className="absolute -right-2 -bottom-2 w-16 sm:w-24 h-16 sm:h-24 bg-love/20 rounded-full blur-2xl"></div>
          <div className="absolute -left-2 -top-2 w-12 sm:w-16 h-12 sm:h-16 bg-love/10 rounded-full blur-xl"></div>
        </div>
        
        <div className={`mb-8 sm:mb-12 transition-all duration-1000 transform ${visibleSections.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-love-dark font-dancing">Mera Cutiewww baacha 🙈🫀✨</h2>
            <Button 
              className="bg-love hover:bg-love-dark group w-full sm:w-auto"
              onClick={() => handleNavigation("/memories", "Let's revisit our beautiful journey together...")}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Camera size={16} className="mr-2 group-hover:animate-pulse w-4 h-4 sm:w-5 sm:h-5" />
              <span>View Memories</span>
              <Heart size={14} className={`ml-2 transition-all w-3 h-3 sm:w-4 sm:h-4 ${isHovered ? 'scale-125 text-white' : 'scale-100'}`} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/90 p-2 sm:p-4">
              <img src="/lovable-uploads/IMG-20250502-WA0012.jpg" alt="Our Memory" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/90 p-2 sm:p-4">
              <img src="/lovable-uploads/IMG-20250502-WA0013.jpg" alt="Our Memory" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/90 p-2 sm:p-4">
              <img src="/lovable-uploads/IMG-20250502-WA0014.jpg" alt="Our Memory" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
        
        <div className={`bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-4 sm:p-8 mb-8 sm:mb-12 transition-all duration-1000 transform ${visibleSections.wishes ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-2xl hover:scale-[1.01] transition-all duration-300`}>
          <LoveQuotes />
          
          <div className="mt-6 sm:mt-8 text-center">
            <Button 
              className="bg-love hover:bg-love-dark text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg animate-heartbeat hover:shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={() => handleNavigation("/love-notes", "Words can't express how much you mean to me...")}
            >
              <Heart className="mr-2 w-4 h-4 sm:w-5 sm:h-5" fill="white" />
              <span>For you darlinggg 🙈</span>
              <Heart className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="white" />
            </Button>
          </div>
        </div>
        
        <div className={`text-center mt-8 sm:mt-16 transition-all duration-1000 transform ${visibleSections.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg sm:text-xl text-love-dark font-medium font-dancing">Made with 💖 for our special day</p>
          <p className="text-love mt-1 sm:mt-2">Forever & Always</p>
        </div>
        
        <div className={`fixed bottom-2 sm:bottom-4 right-2 sm:right-4 z-20 transition-all duration-1000 ${visibleSections.music ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <MusicPlayer />
        </div>
        
        <div className={`fixed top-2 sm:top-4 right-2 sm:right-4 flex flex-col sm:flex-row gap-2 z-20 transition-all duration-1000 ${visibleSections.navigation ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <Button 
            variant="outline" 
            className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-love-dark border-love/20 w-full sm:w-auto"
            onClick={() => navigate("/memories")}
          >
            <Camera size={14} className="mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Memories
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-love-dark border-love/20 w-full sm:w-auto"
            onClick={() => navigate("/love-notes")}
          >
            <PenSquare size={14} className="mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Love Notes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Anniversary;
