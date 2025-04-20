
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SONG_URL = "https://avobmppmlsfxxyeqxksr.supabase.co/storage/v1/object/public/song//Tu%20Hai%20Darshan%20Raval%20320%20Kbps.mp3";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(SONG_URL);
    audioRef.current.loop = true;
    audioRef.current.play().catch(err => console.log("Play error:", err));
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <Card className="w-auto backdrop-blur-sm bg-white/70 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <CardContent className="p-2">
        <Button 
          variant="ghost" 
          size="icon"
          className={cn(
            "transition-all duration-300",
            isMuted ? "text-gray-400" : "text-love hover:text-love-dark"
          )}
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MusicPlayer;
