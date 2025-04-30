
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Heart, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import HeartBackground from "@/components/HeartBackground";
import FallingHearts from "@/components/FallingHearts";

// The correct password - in a real app, this would be stored securely
const CORRECT_PASSWORD = "anushka";

interface PasswordFormValues {
  password: string;
}

const PasswordProtection = ({ onSuccess }: { onSuccess: () => void }) => {
  const [attempts, setAttempts] = useState(0);
  const [hintVisible, setHintVisible] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<PasswordFormValues>({
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = ({ password }: PasswordFormValues) => {
    if (password.toLowerCase() === CORRECT_PASSWORD) {
      // Password is correct
      toast({
        title: "Welcome to our love story! ❤️",
        description: "Enjoy this anniversary celebration, my love.",
        duration: 5000,
      });
      
      // Store in localStorage to remember user has authenticated
      localStorage.setItem("loveAuthenticated", "true");
      
      // Call the success callback
      onSuccess();
    } else {
      // Password is incorrect
      setAttempts(prev => prev + 1);
      
      toast({
        title: "Incorrect password",
        description: "Please try again, my love.",
        variant: "destructive",
        duration: 3000,
      });
      
      // Show hint after 3 attempts
      if (attempts >= 2 && !hintVisible) {
        setHintVisible(true);
      }
      
      form.reset();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50 p-4">
      <HeartBackground />
      <FallingHearts density={8} />
      
      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-white/80 backdrop-blur-md border-love/20 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-love rounded-full opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-love-dark rounded-full opacity-10"></div>
          
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-love to-love-dark flex items-center justify-center shadow-lg">
                <Lock className="text-white" size={28} />
              </div>
            </div>
            <CardTitle className="text-3xl font-dancing text-love-dark">
              Our Anniversary Space
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <p className="text-center text-gray-600 mb-6">
              Enter the password to access our special anniversary celebration
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Enter our special word..."
                            className="bg-white/70 border-love/30 pl-10 transition-all focus:border-love focus:ring-love"
                            type="password"
                            {...field}
                            autoFocus
                          />
                          <Heart className="absolute left-3 top-3 text-love/50" size={16} />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-love to-love-dark hover:from-love-dark hover:to-love text-white transition-all duration-300"
                >
                  <Heart className="mr-2" size={16} fill="white" /> Unlock Our Memories
                </Button>
              </form>
            </Form>
            
            {hintVisible && (
              <div className="mt-6 text-center text-sm animate-fade-in opacity-0" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
                <p className="text-gray-600">
                  <span className="font-medium">Hint:</span> My name 😊
                </p>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-center pt-0">
            <p className="text-xs text-center text-gray-500">
              Made with love for our special day ❤️
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PasswordProtection;
