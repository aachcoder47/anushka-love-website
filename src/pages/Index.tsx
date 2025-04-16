
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Star, Music, Camera } from "lucide-react";
import DodgingButton from "@/components/DodgingButton";
import HeartBackground from "@/components/HeartBackground";
import LoveTree from "@/components/LoveTree";
import MemoryGallery from "@/components/MemoryGallery";
import MusicPlayer from "@/components/MusicPlayer";
import FallingHearts from "@/components/FallingHearts";
import LoveQuotes from "@/components/LoveQuotes";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();
  const [hasClicked, setHasClicked] = useState(false);
  const [showLoveElements, setShowLoveElements] = useState(false);
  
  const handleYesClick = () => {
    setHasClicked(true);
    setTimeout(() => {
      navigate("/birthday");
    }, 2000);
  };

  useEffect(() => {
    // Show additional elements after a delay for a nice entrance
    const timer = setTimeout(() => {
      setShowLoveElements(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-soft-pink relative overflow-hidden">
      <HeartBackground />
      <FallingHearts />
      
      {/* Main question card with transition */}
      <div className={`transition-all duration-1000 ease-in-out transform ${hasClicked ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} z-10`}>
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg flex flex-col items-center max-w-md mx-auto backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Heart className="text-love animate-heartbeat" size={32} />
            <h1 className="text-5xl mb-8 text-love font-bold animate-heartbeat">Hey Anushka!</h1>
            <Heart className="text-love animate-heartbeat" size={32} />
          </div>
          
          <p className="text-lg text-gray-700 mb-10 text-center">
            Do you love me?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Button 
              className="bg-love hover:bg-love-dark text-white font-bold px-10 py-6 text-xl shadow-lg transition-all duration-300 hover:scale-110"
              onClick={handleYesClick}
            >
              <Heart className="mr-2" /> Yes <Heart className="ml-2" />
            </Button>
            
            <DodgingButton className="bg-gray-400 hover:bg-gray-500 text-white font-bold px-10 py-6 text-xl shadow-lg">
              No
            </DodgingButton>
          </div>
        </div>
      </div>
      
      {/* Surrounding elements that appear after a delay */}
      {showLoveElements && !hasClicked && (
        <>
          <div className="absolute left-5 top-1/4 animate-fade-in opacity-0" style={{animationDelay: "0.5s", animationFillMode: "forwards"}}>
            <LoveTree className="w-72 h-72" />
          </div>
          
          <div className="absolute right-5 bottom-10 animate-fade-in opacity-0" style={{animationDelay: "0.8s", animationFillMode: "forwards"}}>
            <Card className="w-64 backdrop-blur-sm bg-white/70 shadow-lg">
              <CardContent className="pt-6">
                <LoveQuotes />
              </CardContent>
            </Card>
          </div>
          
          <div className="absolute right-10 top-20 animate-fade-in opacity-0" style={{animationDelay: "1.2s", animationFillMode: "forwards"}}>
            <Card className="w-64 backdrop-blur-sm bg-white/70 shadow-lg overflow-hidden">
              <CardContent className="p-2">
                <MemoryGallery smallPreview={true} />
              </CardContent>
            </Card>
          </div>
          
          <div className="absolute left-10 bottom-20 animate-fade-in opacity-0" style={{animationDelay: "1.5s", animationFillMode: "forwards"}}>
            <MusicPlayer />
          </div>
          
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 animate-fade-in opacity-0" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
            <div className="flex gap-4 items-center">
              <Gift className="text-love" size={24} />
              <Star className="text-love" size={24} />
              <Camera className="text-love" size={24} />
              <Music className="text-love" size={24} />
              <Gift className="text-love" size={24} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
