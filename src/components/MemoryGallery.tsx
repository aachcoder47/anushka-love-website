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
    image: "/lovable-uploads/IMG-20250502-WA0012.jpg",
    caption: "Uffffffff kiti pyarrii lagg rhiii traditional mai baachha 🙈❤️"
  },
  {
    image: "/lovable-uploads/IMG-20250502-WA0013.jpg",
    caption: "Mahhh cutieew little angryy birddd🙈✨"
  },
  {
    image: "/lovable-uploads/IMG-20250502-WA0014.jpg",
    caption: "Cutiesttt thing on earth🙈🫀✨"
  },
  {
    image: "/lovable-uploads/IMG-20250502-WA0015.jpg",
    caption: "sigmaa sigmaaa gurll sigmaa gurl 😎🫀"
  },
  {
    image: "/lovable-uploads/IMG-20250502-WA0016.jpg",
    caption: "Obsessedddd withhhh thiis bhy🫀🙈❤️"
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
    <div className="w-full h-full">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {memories.map((memory, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="p-1 h-full">
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0 relative h-full aspect-square">
                    <div className="relative w-full h-full">
                      <img 
                        src={memory.image} 
                        alt={memory.caption} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-center font-medium">{memory.caption}</p>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Heart className="text-white fill-love animate-heartbeat" size={32} />
                      </div>
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
