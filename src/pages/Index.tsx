
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DodgingButton from "@/components/DodgingButton";
import HeartBackground from "@/components/HeartBackground";

const Index = () => {
  const navigate = useNavigate();
  const [hasClicked, setHasClicked] = useState(false);
  
  const handleYesClick = () => {
    setHasClicked(true);
    setTimeout(() => {
      navigate("/birthday");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-soft-pink relative overflow-hidden">
      <HeartBackground />
      
      <div className={`transition-all duration-1000 ease-in-out transform ${hasClicked ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg flex flex-col items-center max-w-md mx-auto backdrop-blur-sm">
          <h1 className="text-5xl mb-8 text-love font-bold animate-heartbeat">Hey Anushka!</h1>
          
          <p className="text-lg text-gray-700 mb-10 text-center">
            Do you love me?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Button 
              className="bg-love hover:bg-love-dark text-white font-bold px-10 py-6 text-xl shadow-lg transition-all duration-300 hover:scale-110"
              onClick={handleYesClick}
            >
              Yes
            </Button>
            
            <DodgingButton className="bg-gray-400 hover:bg-gray-500 text-white font-bold px-10 py-6 text-xl shadow-lg">
              No
            </DodgingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
