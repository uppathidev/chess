import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Tournament Player",
    rating: "1200 → 1850",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "In just 8 months of coaching, my rating jumped 650 points. The strategic concepts I learned completely transformed how I see the game.",
  },
  {
    name: "Sarah Williams",
    role: "Parent of Junior Player",
    rating: "Son: 800 → 1400",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "My son was struggling to break 1000. Now he's winning local tournaments. The patience and expertise shown in every lesson is remarkable.",
  },
  {
    name: "David Rodriguez",
    role: "Adult Improver",
    rating: "1500 → 2100",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    text: "After years of being stuck, I finally achieved my Candidate Master title. The focused training methodology made all the difference.",
  },
];

export function TestimonialsPreview() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">SUCCESS STORIES</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Results from Real Students
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join hundreds of players who have transformed their chess skills and achieved their rating goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} variant="testimonial" className="relative">
              <CardContent className="pt-8">
                <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="mt-4 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {testimonial.rating}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/testimonials">
            <Button variant="cta" size="lg">
              View More Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
