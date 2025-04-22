
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type PageTransitionProps = {
  to: string;
  message: string;
}

const PageTransition = ({ to, message }: PageTransitionProps) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        navigate(to);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, to]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50 transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <Card className="max-w-md w-full mx-4 bg-white/90 backdrop-blur-md shadow-xl border-love/20">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center mb-4 space-x-2">
            <Heart className="text-love animate-pulse" size={24} />
            <Heart className="text-love animate-pulse" size={32} />
            <Heart className="text-love animate-pulse" size={24} />
          </div>
          <p className="text-xl font-dancing text-gray-700">{message}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PageTransition;
