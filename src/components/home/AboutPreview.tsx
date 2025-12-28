import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import coachImage from "@/assets/coach-portrait.jpg";

const highlights = [
  "International Master (IM) title holder",
  "15+ years of competitive experience",
  "Trained 500+ students worldwide",
  "Proven rating improvement methods",
  "Multiple national championship wins",
];

export function AboutPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
            <img
              src={coachImage}
              alt="Chess Titans Head Coach"
              className="relative rounded-2xl w-full max-w-md mx-auto lg:mx-0 shadow-card"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:right-6 bg-card border border-border rounded-xl p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">IM</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">International Master</p>
                  <p className="text-sm text-muted-foreground">FIDE Rating 2400+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium mb-2 block">ABOUT THE COACH</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Path to Chess Mastery Starts Here
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              With over 15 years of competitive chess and a decade of coaching experience, 
              I've helped hundreds of players unlock their potential and achieve their chess goals.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              My teaching philosophy combines deep strategic understanding with practical, 
              actionable techniques that produce real results. Whether you're looking to win 
              your first tournament or achieve a title, I'll guide you every step of the way.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/about">
              <Button variant="cta" size="lg">
                Read Full Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
