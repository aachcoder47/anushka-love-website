
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Confetti from "@/components/Confetti";
import HeartBackground from "@/components/HeartBackground";

const Birthday = () => {
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    heading: false,
    message: false,
    gallery: false,
    wishes: false,
    footer: false
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
    
    // Animated entrance for sections
    const timers = [
      setTimeout(() => setVisibleSections(prev => ({ ...prev, heading: true })), 300),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, message: true })), 800),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, gallery: true })), 1300),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, wishes: true })), 1800),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, footer: true })), 2300),
    ];
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-soft-pink py-12 px-4 sm:px-6 relative overflow-hidden">
      {showConfetti && <Confetti />}
      <HeartBackground />
      
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 transform ${visibleSections.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16 relative">
            <div className="ribbon">
              <span className="ribbon-content">With Love</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-love-dark mb-4">Happy Birthday Anushka!</h1>
            <p className="text-xl text-gray-600">Today is all about celebrating the amazing person you are!</p>
          </div>
        </div>
        
        <div className={`bg-white rounded-xl shadow-xl p-8 mb-12 relative transition-all duration-1000 transform ${visibleSections.message ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-love-dark mb-6">My Love For You</h2>
          <p className="text-lg text-gray-700 mb-4">
            Every moment with you feels like a dream come true. Your smile brightens my darkest days, and your love gives me strength I never knew I had.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            On your special day, I want you to know that you are the most precious person in my life. The way you care, the way you laugh, and the way you love - everything about you is perfect.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Thank you for being you, for loving me, and for bringing endless joy into my life.
          </p>
          <div className="text-2xl font-bold text-love mt-8 text-center">💖 I Love You To The Moon And Back 💖</div>
        </div>
        
        <div className={`mb-12 transition-all duration-1000 transform ${visibleSections.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-love-dark mb-6 text-center">Our Precious Moments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gallery">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img src="/lovable-uploads/9901f9a5-e8bc-4ba0-ad93-35d1fbe95d26.png" alt="Our Memory" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img src="/lovable-uploads/f4f25058-883a-4207-a74e-c0e7594f50eb.png" alt="Our Memory" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img src="/lovable-uploads/9848dd2d-9a71-4b43-8687-2097a89c1ac2.png" alt="Our Memory" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg md:col-span-2">
              <img src="/lovable-uploads/54eba057-e1ad-4e36-acfb-a3ca0866d6cb.png" alt="Our Memory" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img src="/lovable-uploads/8816d58a-7dfb-439b-a4dd-30853f2b17e6.png" alt="Our Memory" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        <div className={`bg-white rounded-xl shadow-xl p-8 mb-12 transition-all duration-1000 transform ${visibleSections.wishes ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-love-dark mb-6">Birthday Wishes</h2>
          <div className="space-y-6">
            <div className="p-4 bg-love-light rounded-lg">
              <p className="text-lg font-medium mb-2">My wish for you today:</p>
              <p className="text-gray-700">May your day be as beautiful as your smile, as warm as your heart, and as amazing as you are. May this year bring you endless joy, success in all you do, and love that grows stronger each day.</p>
            </div>
            
            <div className="p-4 bg-love-light rounded-lg">
              <p className="text-lg font-medium mb-2">My promise to you:</p>
              <p className="text-gray-700">I promise to be there for you in good times and bad, to hold your hand through every journey, and to love you more with each passing day. You are my today and all of my tomorrows.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button className="bg-love hover:bg-love-dark text-white font-bold px-8 py-4 text-lg animate-heartbeat">
              ❤️ I Love You Anushka ❤️
            </Button>
          </div>
        </div>
        
        <div className={`text-center mt-16 transition-all duration-1000 transform ${visibleSections.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl text-love-dark font-medium">Made with ❤️ just for you</p>
          <p className="text-love mt-2">Forever Yours</p>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
