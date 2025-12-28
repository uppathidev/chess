import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Monitor, Trophy, ArrowRight } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Private Coaching",
    description: "One-on-one personalized lessons tailored to your skill level and goals. Deep analysis of your games with actionable improvement plans.",
    href: "/services",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Learn alongside peers in small group settings. Perfect for competitive training and developing your tournament mindset.",
    href: "/services",
  },
  {
    icon: Monitor,
    title: "Online Courses",
    description: "Structured self-paced programs covering openings, middlegame strategies, and endgame techniques for all levels.",
    href: "/courses",
  },
  {
    icon: Trophy,
    title: "Tournament Prep",
    description: "Intensive preparation for competitions. Opening repertoire building, opponent analysis, and peak performance strategies.",
    href: "/services",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">SERVICES</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Elevate Your Chess Game
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive coaching programs designed to transform beginners into competitors 
            and advanced players into champions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={service.title} variant="feature" className="group">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="cta" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
