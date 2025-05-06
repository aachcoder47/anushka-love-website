import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import MemoryGallery from "@/components/MemoryGallery";
import HeartBackground from "@/components/HeartBackground";
import MusicPlayer from "@/components/MusicPlayer";

const Memories = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPage, setShowPage] = useState(false);
  
  useEffect(() => {
    // Show welcome toast
    toast({
      title: "Our Beautiful Memories",
      description: "Every moment with you is a treasure ❤️",
      duration: 4000,
    });
    
    // Animate in the page
    setTimeout(() => {
      setShowPage(true);
    }, 300);
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-pink-blue py-6 sm:py-12 px-3 sm:px-6 relative overflow-hidden">
      <HeartBackground />
      
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${showPage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {/* Navigation Back */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/50 backdrop-blur-sm hover:bg-white/70 text-love-dark transition-all duration-300"
            onClick={() => navigate("/anniversary")}
          >
            <ArrowLeft size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
        <div className={`fixed top-2 sm:top-4 right-2 sm:right-4 z-50 transition-all duration-500`}>
          <MusicPlayer />
        </div>
        
        <div className="text-center mb-8 sm:mb-12 relative">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-love-dark mb-2 sm:mb-4 animate-float">Our Beautiful Journey</h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">heyyyyy thiss iss mahhh cutieeww little angel🫀✨ mahhhh cutiewwww babyieee🙈🫀✨</p>
          
          <div className="absolute -right-5 sm:-right-10 -top-5 sm:-top-10 opacity-40">
            <Heart size={60} className="w-12 h-12 sm:w-20 sm:h-20 text-love fill-love/20 animate-heartbeat" />
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-3 sm:p-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="aspect-square w-full max-w-2xl mx-auto">
            <MemoryGallery />
          </div>
        </div>
        
        <div className="text-center mt-6 sm:mt-10 bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-love-dark mb-3 sm:mb-4">Mera Rabbit🤭</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
            hehe 🤭 see kita pyara baacha h meraa nazar na lge thu thu thuu🧿🧿🧿🧿 andd babyieee aapkoo pta hoga bt still mai bata detaa ki aap kitee pyaree ho 🙈🙈 ekdammmm Sexieeee ho🤭hotieee bhii ho🤭🤭 andd cutiee to hayyee🙈🫀✨ by nature and behavior too🙈 and thoda aapki bhii tarrif ki jayee🤭 aapke pyare pyare lips k bare mai🤭🤭 pyaare eyess k bare mai🎀✨neck ,boobiee👉👈 hehe and aapka navell bhyy obsessed hu ekdam mai🤭🎀✨ no wrds uske liyee and aapka thighs wo to ekdamm dekh k kuch kuch hota hehe👉👈bss bss ab jada nhii krunga mere baache ko nazar na lag jayeee thu thu thuu🧿🧿 nd I LOVEEEE YOUU SOOO MUCHHHH JANEMANNN🙈🫀 muahhhhhh💋💋💋💋💋💋 or lo bby sharmaoo matt muahhhh smoochiiiii💋💋💋💋💋💋💋💋💋💋 bsss ab mrkoo sharam aane lgaa🤭🤭🤭🎀.
          </p>
          <Button 
            className="bg-love hover:bg-love-dark text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            onClick={() => navigate("/anniversary")}
          >
            <Heart className="mr-2 w-4 h-4 sm:w-5 sm:h-5" size={16} />
            Back to Anniversary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Memories;
