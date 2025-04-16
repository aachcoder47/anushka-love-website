
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from 'lucide-react';

interface MemoryGalleryProps {
  smallPreview?: boolean;
}

const memories = [
  {
    image: "/lovable-uploads/54eba057-e1ad-4e36-acfb-a3ca0866d6cb.png",
    caption: "Our first trip together ❤️"
  },
  {
    image: "/lovable-uploads/8816d58a-7dfb-439b-a4dd-30853f2b17e6.png",
    caption: "That beautiful sunset we watched"
  },
  {
    image: "/lovable-uploads/9848dd2d-9a71-4b43-8687-2097a89c1ac2.png",
    caption: "Remember this amazing day?"
  },
  {
    image: "/lovable-uploads/9901f9a5-e8bc-4ba0-ad93-35d1fbe95d26.png",
    caption: "One of my favorite moments"
  },
  {
    image: "/lovable-uploads/f4f25058-883a-4207-a74e-c0e7594f50eb.png",
    caption: "Just you and me"
  }
];

const MemoryGallery = ({ smallPreview = false }: MemoryGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (smallPreview) {
    // Simple preview version for the Index page
    return (
      <div className="overflow-hidden rounded-md relative">
        <img 
          src={memories[activeIndex].image} 
          alt={memories[activeIndex].caption} 
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
          <p className="text-white text-xs text-center">{memories[activeIndex].caption}</p>
        </div>
        <div className="absolute top-2 right-2">
          <Heart className="text-love fill-love" size={24} />
        </div>
        <div className="flex justify-center mt-2 gap-1">
          {memories.map((_, i) => (
            <button 
              key={i} 
              className={`w-2 h-2 rounded-full ${i === activeIndex ? 'bg-love' : 'bg-gray-300'}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Full gallery for detailed view
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {memories.map((memory, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0 relative">
                    <img 
                      src={memory.image} 
                      alt={memory.caption} 
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-center font-medium">{memory.caption}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Heart className="text-white fill-love animate-heartbeat" size={32} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      <div className="flex justify-center mt-4 gap-2">
        {memories.map((_, i) => (
          <button 
            key={i} 
            className={`w-3 h-3 rounded-full transition-colors ${i === activeIndex ? 'bg-love' : 'bg-gray-300 hover:bg-love/50'}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryGallery;
