
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Gift, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import HeartBackground from "@/components/HeartBackground";
import FallingHearts from "@/components/FallingHearts";
import LoveQuotes from "@/components/LoveQuotes";
import MusicPlayer from "@/components/MusicPlayer";

const loveNotes = [
  {
    title: "When I First Saw You",
    content: "The moment our eyes met, I knew my heart would never be the same. Your smile lit up the room and I couldn't look away.",
    color: "#FF6B8B"
  },
  {
    title: "My Favorite Memory",
    content: "Remember that night under the stars? You pointed at constellations and I was just looking at you, thinking how lucky I am to have found someone so perfect.",
    color: "#FF8E9E"
  },
  {
    title: "What You Mean To Me",
    content: "You're my best friend, my confidant, my partner in everything. You make every day brighter just by being in it. Your laugh is my favorite sound.",
    color: "#FFA6B5"
  },
  {
    title: "My Promise",
    content: "I promise to stand by you through every storm, to hold your hand when you need strength, and to love you with all my heart for all of my days.",
    color: "#FFB8C5"
  },
  {
    title: "Our Future",
    content: "I dream of growing old with you, of building a life filled with adventures, laughter, and unconditional love. Every day with you is a gift I cherish.",
    color: "#FFD4DC"
  }
];

const LoveNotes = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [visibleNotes, setVisibleNotes] = useState<number[]>([]);
  
  useEffect(() => {
    // Show welcome toast
    toast({
      title: "My Love Notes to You ❤️",
      description: "Words from my heart to yours",
      duration: 4000,
    });
    
    // Animate in the notes one by one
    const timers = loveNotes.map((_, index) => {
      return setTimeout(() => {
        setVisibleNotes(prev => [...prev, index]);
      }, 600 * index + 500);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50 py-12 px-4 sm:px-6 relative overflow-hidden">
      <HeartBackground />
      <FallingHearts density={5} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="absolute top-4 left-4 z-20">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/50 backdrop-blur-sm hover:bg-white/70 text-love-dark transition-all duration-300"
            onClick={() => navigate("/anniversary")}
          >
            <ArrowLeft size={20} />
          </Button>
        </div>
        
        <div className="fixed top-4 right-4 z-50">
          <MusicPlayer />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-love mb-4 font-dancing animate-float">Love Notes for You</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-dancing">These little notes carry big feelings - all the ways you make my heart flutter.</p>
        </div>
        
        <div className="space-y-6">
          {loveNotes.map((note, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 transform ${
                visibleNotes.includes(index) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
                <div style={{ backgroundColor: note.color }} className="h-2"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="text-love" size={18} fill={note.color} />
                    <h3 className="text-xl font-semibold text-love-dark font-dancing">{note.title}</h3>
                  </div>
                  <p className="text-gray-700 italic font-dancing">{note.content}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="w-full md:w-1/2">
            <Card className="bg-white/90 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <LoveQuotes />
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full md:w-1/2 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Gift className="mx-auto text-love mb-4" size={30} />
              <h3 className="text-xl font-semibold mb-2 text-love-dark font-dancing">My Gift To You</h3>
              <p className="text-gray-700 mb-4 font-dancing">All my love, wrapped in these words and memories. Happy Anniversary, my love!</p>
              <Button 
                className="bg-love hover:bg-love-dark text-white transition-all duration-300 hover:scale-105"
                onClick={() => navigate("/anniversary")}
              >
                <Star className="mr-2" size={16} />
                Back to Anniversary
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveNotes;
