import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Create a singleton audio instance
let globalAudio: HTMLAudioElement | null = null;

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(() => {
    // Initialize mute state from localStorage
    const savedMute = localStorage.getItem('musicMuted');
    return savedMute ? JSON.parse(savedMute) : false;
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to attempt playing audio
  const attemptPlay = async (audio: HTMLAudioElement) => {
    try {
      await audio.play();
      console.log("Audio started playing successfully");
    } catch (error) {
      console.error("Play attempt failed:", error);
      // Try again after a short delay
      setTimeout(() => attemptPlay(audio), 1000);
    }
  };

  useEffect(() => {
    const initializeAudio = async () => {
      try {
        // Use the global audio instance if it exists, otherwise create a new one
        if (!globalAudio) {
          console.log("Creating new audio instance...");
          globalAudio = new Audio("https://avobmppmlsfxxyeqxksr.supabase.co/storage/v1/object/public/song//Tu%20Hai%20Darshan%20Raval%20320%20Kbps.mp3");
          globalAudio.loop = true;
          
          // Add event listeners
          globalAudio.addEventListener('playing', () => {
            console.log("Audio started playing");
          });
          
          globalAudio.addEventListener('pause', () => {
            console.log("Audio paused - attempting to resume");
            // Try to resume playback if paused
            if (globalAudio) attemptPlay(globalAudio);
          });
          
          globalAudio.addEventListener('error', (e) => {
            console.error("Audio error:", e);
          });

          // Try to play immediately
          attemptPlay(globalAudio);

          // Also try to play on any user interaction
          const playOnInteraction = () => {
            if (globalAudio) attemptPlay(globalAudio);
          };

          // Add listeners for various user interactions
          ['click', 'touchstart', 'keydown'].forEach(event => {
            document.addEventListener(event, playOnInteraction, { once: true });
          });

        } else {
          console.log("Using existing audio instance");
          // Ensure the existing instance is playing
          if (globalAudio.paused) {
            attemptPlay(globalAudio);
          }
        }
        
        // Set the reference to the global audio instance
        audioRef.current = globalAudio;
        
      } catch (error) {
        console.error("Error initializing audio:", error);
      }
    };

    initializeAudio();
    
    return () => {
      // Save playing state before unmounting
      if (audioRef.current) {
        localStorage.setItem('musicPlaying', audioRef.current.paused ? 'false' : 'true');
      }
      // Don't clean up the audio on unmount, just remove the reference
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      // Save mute state to localStorage
      localStorage.setItem('musicMuted', JSON.stringify(isMuted));
    }
  }, [isMuted]);

  const handleClick = () => {
    setIsMuted(!isMuted);
  };

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
          onClick={handleClick}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MusicPlayer;
