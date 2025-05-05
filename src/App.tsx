
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Anniversary from "./pages/Anniversary";
import Memories from "./pages/Memories";
import LoveNotes from "./pages/LoveNotes";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import PasswordProtection from "./components/PasswordProtection";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem("loveAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);
  
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {!isAuthenticated ? (
          <PasswordProtection onSuccess={handleAuthSuccess} />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/anniversary" element={<Anniversary />} />
              <Route path="/memories" element={<Memories />} />
              <Route path="/love-notes" element={<LoveNotes />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
