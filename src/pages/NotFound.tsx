
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Redirect to the main page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-pink">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg max-w-md">
        <h1 className="text-5xl font-bold text-love mb-4">Oops!</h1>
        <p className="text-xl text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
        <p className="text-lg text-love-dark mb-4">Redirecting you to the home page...</p>
        <div className="animate-heartbeat">❤️</div>
      </div>
    </div>
  );
};

export default NotFound;
