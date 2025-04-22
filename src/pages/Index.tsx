import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Star, Camera } from "lucide-react";
import DodgingButton from "@/components/DodgingButton";
import HeartBackground from "@/components/HeartBackground";
import LoveTree from "@/components/LoveTree";
import MemoryGallery from "@/components/MemoryGallery";
import MusicPlayer from "@/components/MusicPlayer";
import FallingHearts from "@/components/FallingHearts";
import LoveQuotes from "@/components/LoveQuotes";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [hasClicked, setHasClicked] = useState(false);
  const [showLoveElements, setShowLoveElements] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  
  const handleYesClick = () => {
    setHasClicked(true);
    toast({
      title: "You're Amazing! ✨",
      description: "Let me show you something special...",
      duration: 2000,
    });
    setShowTransition(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoveElements(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50 relative overflow-hidden">
      {showTransition && (
        <PageTransition 
          to="/anniversary"
          message="Every moment with you is a blessing. Let me show you how much you mean to me..."
        />
      )}
      
      <HeartBackground />
      <FallingHearts density={10} />
      
      <div className="fixed top-4 right-4 z-50 transition-all duration-500">
        <MusicPlayer />
      </div>

      {/* Love Quotes Card */}
      <div className="fixed top-4 left-4 z-50 w-64 transition-all duration-500 animate-fade-in">
        <Card className="bg-white/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border-love/20">
          <CardContent className="p-4">
            <LoveQuotes />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-center gap-6 justify-center relative z-10">
        <div className="flex items-center gap-3 justify-center">
          <Heart className="text-love animate-heartbeat" size={32} />
          <h1 className="text-8xl md:text-9xl mb-2 text-love font-bold font-dancing animate-float bg-gradient-to-r from-love to-love-dark bg-clip-text text-transparent">
            Happy Anniversary!
          </h1>
          <Heart className="text-love animate-heartbeat" size={32} />
        </div>
        
        <div className={`transition-all duration-1000 ease-in-out transform
          ${hasClicked ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
          <Card className="bg-white/90 p-8 rounded-2xl shadow-2xl backdrop-blur-md max-w-md mx-auto border-love/20 hover:shadow-love/20 transition-all duration-500">
            <CardContent className="space-y-8">
              <div className="flex items-center gap-3 justify-center">
                <Heart className="text-love animate-heartbeat" size={32} />
                <h1 className="text-6xl mb-2 text-love font-bold font-dancing animate-float">
                  Hey Anushka!
                </h1>
                <Heart className="text-love animate-heartbeat" size={32} />
              </div>
              
              <p className="text-2xl text-gray-700 text-center font-dancing">
                Do you love me?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-4">
                <Button 
                  className="bg-love hover:bg-love-dark text-white font-bold px-10 py-6 text-xl shadow-lg transition-all duration-300 hover:scale-110 rounded-xl relative overflow-hidden group"
                  onClick={handleYesClick}
                >
                  <span className="relative z-10 flex items-center">
                    <Heart className="mr-2" fill="white" /> Yes <Heart className="ml-2" fill="white" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-love-dark to-love opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                
                <DodgingButton className="bg-gray-400 hover:bg-gray-500 text-white font-bold px-10 py-6 text-xl shadow-lg rounded-xl">
                  No
                </DodgingButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {showLoveElements && !hasClicked && (
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute left-5 top-1/4 animate-fade-in opacity-0" style={{animationDelay: "0.5s", animationFillMode: "forwards"}}>
            <LoveTree className="w-72 h-72" />
          </div>
          
          <div className="absolute right-5 top-1/4 animate-fade-in opacity-0" style={{animationDelay: "0.5s", animationFillMode: "forwards"}}>
            <LoveTree className="w-72 h-72" />
          </div>
          
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 animate-fade-in opacity-0" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
            <div className="flex gap-4 items-center">
              <Gift className="text-love animate-bounce-subtle" size={24} />
              <Star className="text-love animate-pulse" size={24} />
              <Camera className="text-love animate-bounce-subtle" size={24} />
              <Star className="text-love animate-pulse" size={24} />
              <Gift className="text-love animate-bounce-subtle" size={24} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
