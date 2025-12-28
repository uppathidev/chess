import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Star, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-chess.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Chess board with golden king piece"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6 animate-fade-in">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">International Chess Master & Coach</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Master the Game.
            <br />
            <span className="text-gradient-gold">Dominate the Board.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up stagger-2 max-w-2xl">
            Unlock your chess potential with personalized coaching from a titled master. 
            Whether you're a beginner or advanced player, elevate your game to championship level.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up stagger-3">
            <Link to="/contact#book-session">
              <Button variant="hero" size="xl" className="group">
                Book a Free Strategy Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="heroOutline" size="xl">
                Explore Courses
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up stagger-4">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-foreground">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Students Trained</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-foreground">2400+</span>
              </div>
              <p className="text-sm text-muted-foreground">Peak FIDE Rating</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <Star className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-foreground">15+</span>
              </div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-foreground">50+</span>
              </div>
              <p className="text-sm text-muted-foreground">Titles Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
