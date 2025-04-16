
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

const playlist = [
  { 
    title: "Demon Slayer",
    artist: "Lisa",
    duration: "3:45",
    color: "#FF6B8B",
    url: "https://vzrudezrrthtkmevnwzc.supabase.co/storage/v1/object/public/music//Demon%20Slayer%20OpM5.wav"
  },
  { 
    title: "Perfect", 
    artist: "Ed Sheeran",
    duration: "4:23",
    color: "#FFB1C8",
    url: ""
  },
  { 
    title: "Can't Help Falling in Love", 
    artist: "Elvis Presley",
    duration: "3:02",
    color: "#FFC3D8",
    url: "" 
  },
  { 
    title: "All of Me", 
    artist: "John Legend",
    duration: "4:29",
    color: "#FFD4DC",
    url: ""
  }
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const progressInterval = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume / 100;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    
    const currentSong = playlist[currentTrack];
    if (currentSong.url) {
      audioRef.current.src = currentSong.url;
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log("Play error:", err));
      }
    } else {
      audioRef.current.pause();
    }
  }, [currentTrack]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const currentSong = playlist[currentTrack];
      if (currentSong.url) {
        audioRef.current.play().catch(err => console.log("Play error:", err));
      }
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    setProgress(0);
    
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    setProgress(0);
    
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  useEffect(() => {
    const currentSong = playlist[currentTrack];
    
    if (isPlaying) {
      if (progressInterval.current) {
        window.clearInterval(progressInterval.current);
      }
      
      if (currentSong.url && audioRef.current) {
        progressInterval.current = window.setInterval(() => {
          if (audioRef.current) {
            const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100 || 0;
            setProgress(percent);
            
            if (audioRef.current.ended) {
              nextTrack();
            }
          }
        }, 100);
      } else {
        progressInterval.current = window.setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              nextTrack();
              return 0;
            }
            return prev + 0.5;
          });
        }, 100);
      }
    } else if (progressInterval.current) {
      window.clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
    
    return () => {
      if (progressInterval.current) {
        window.clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, currentTrack]);

  return (
    <Card className="w-64 backdrop-blur-sm bg-white/70 shadow-lg overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Music size={18} className="text-love" />
          <h3 className="text-sm font-semibold">Our Love Songs</h3>
        </div>
        
        <div 
          className="w-full h-28 rounded-md mb-3 flex items-center justify-center transition-all duration-300"
          style={{ 
            backgroundColor: playlist[currentTrack].color,
            transform: isPlaying ? 'scale(1.02)' : 'scale(1)'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="white" 
            className={cn(
              "w-12 h-12 opacity-80 transition-transform duration-300",
              isPlaying ? "animate-[spin_8s_linear_infinite]" : ""
            )}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        
        <div className="text-center mb-2">
          <h4 className="font-medium text-sm">{playlist[currentTrack].title}</h4>
          <p className="text-xs text-gray-600">{playlist[currentTrack].artist}</p>
        </div>
        
        <div className="w-full h-1 bg-gray-200 rounded-full mb-3">
          <div 
            className="h-full bg-love rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Volume2 size={14} className="text-gray-500" />
          <Slider
            defaultValue={[volume]}
            max={100}
            step={1}
            className="w-full"
            onValueChange={handleVolumeChange}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-gray-600 hover:text-love hover:bg-love/10" 
            onClick={prevTrack}
          >
            <SkipBack size={16} />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="h-10 w-10 rounded-full bg-love/10 border-love/20 text-love hover:bg-love/20 hover:text-love-dark" 
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-gray-600 hover:text-love hover:bg-love/10" 
            onClick={nextTrack}
          >
            <SkipForward size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MusicPlayer;
