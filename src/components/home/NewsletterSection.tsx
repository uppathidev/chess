import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Gift } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to Chess Titans Academy!",
      description: "Check your email for your free tactics puzzle pack.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 chess-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join Chess Titans Academy
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get exclusive chess insights, free tactical puzzles, and strategic tips delivered 
            straight to your inbox. Plus, receive a <span className="text-primary font-semibold">free 50-puzzle tactics pack</span> when you sign up!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-12 h-14 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button
              type="submit"
              variant="cta"
              size="xl"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Get Free Puzzles"}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam. Unsubscribe anytime. Your privacy is protected.
          </p>
        </div>
      </div>
    </section>
  );
}
