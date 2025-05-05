import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import HeartBackground from "@/components/HeartBackground";
import MusicPlayer from "@/components/MusicPlayer";

const images = [
  "/lovable-uploads/IMG-20250502-WA0012.jpg",
  "/lovable-uploads/IMG-20250502-WA0013.jpg",
  "/lovable-uploads/IMG-20250502-WA0014.jpg",
  "/lovable-uploads/IMG-20250502-WA0015.jpg",
  "/lovable-uploads/IMG-20250502-WA0016.jpg"
];

const Gallery = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    toast({
      title: "Welcome to Our Gallery ✨",
      description: "Each picture tells our story",
      duration: 3000,
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-50 py-12 px-4 sm:px-6 relative overflow-hidden">
      <HeartBackground />
      
      <div className="fixed top-4 right-4 z-50">
        <MusicPlayer />
      </div>

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

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-love-dark mb-4 font-dancing animate-float">Our Moments Together</h1>
          <p className="text-xl text-gray-600">Every picture holds a thousand words of our love</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Heart className="text-white w-12 h-12 animate-heartbeat" />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Selected memory"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-love transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <Heart size={32} fill="currentColor" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
