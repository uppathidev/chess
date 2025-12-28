import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, BarChart, Play, CheckCircle } from "lucide-react";

const courses = [
  {
    title: "Chess Foundations",
    level: "Beginner",
    rating: "0-1000",
    duration: "8 weeks",
    lessons: 24,
    students: 342,
    price: "$99",
    description: "Master the fundamentals of chess from piece movement to basic tactics and endgames.",
    outcomes: [
      "Understand all piece movements and rules",
      "Execute basic tactical patterns",
      "Play solid opening moves",
      "Convert simple endgames",
    ],
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Tactical Mastery",
    level: "Intermediate",
    rating: "1000-1500",
    duration: "10 weeks",
    lessons: 30,
    students: 256,
    price: "$149",
    description: "Sharpen your tactical vision with advanced patterns, combinations, and calculation training.",
    outcomes: [
      "Recognize advanced tactical motifs",
      "Calculate 5+ moves ahead accurately",
      "Spot combinations in complex positions",
      "Improve time management in tactics",
    ],
    image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Strategic Thinking",
    level: "Intermediate",
    rating: "1200-1800",
    duration: "12 weeks",
    lessons: 36,
    students: 189,
    price: "$179",
    description: "Develop deep positional understanding and long-term planning skills that separate club players from masters.",
    outcomes: [
      "Evaluate positions like a master",
      "Create and execute long-term plans",
      "Understand pawn structures",
      "Master piece coordination",
    ],
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Opening Repertoire Builder",
    level: "All Levels",
    rating: "800-2000",
    duration: "8 weeks",
    lessons: 24,
    students: 421,
    price: "$129",
    description: "Build a complete, tournament-ready opening repertoire for both White and Black.",
    outcomes: [
      "Develop a personalized opening repertoire",
      "Understand opening principles deeply",
      "Prepare against common responses",
      "Study methodology for new openings",
    ],
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Endgame Excellence",
    level: "Intermediate-Advanced",
    rating: "1400-2000",
    duration: "10 weeks",
    lessons: 30,
    students: 178,
    price: "$159",
    description: "Convert more games with deep endgame knowledge from basic to complex positions.",
    outcomes: [
      "Master essential endgame patterns",
      "Calculate endgames precisely",
      "Understand theoretical vs practical endgames",
      "Win won positions consistently",
    ],
    image: "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Path to 2000",
    level: "Advanced",
    rating: "1600-2000",
    duration: "16 weeks",
    lessons: 48,
    students: 94,
    price: "$299",
    description: "Comprehensive program designed to break through to expert level with advanced concepts.",
    outcomes: [
      "Think like a titled player",
      "Master complex middlegames",
      "Prepare professionally for tournaments",
      "Develop your unique playing style",
    ],
    image: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=600&h=400&fit=crop",
    featured: false,
  },
];

export default function CoursesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium mb-2 block">ONLINE COURSES</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Learn Chess Your Way
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Structured, self-paced courses designed to take you from your current level 
              to the next milestone. Learn anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.title}
                variant="elevated"
                className={`overflow-hidden group ${course.featured ? "ring-2 ring-primary" : ""}`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {course.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      Popular
                    </div>
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-secondary/90 backdrop-blur-sm text-foreground text-sm font-medium rounded-full">
                    {course.level}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <BarChart className="w-4 h-4" />
                    <span>Rating: {course.rating}</span>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="w-4 h-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <ul className="space-y-2 mb-6">
                    {course.outcomes.slice(0, 3).map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-display text-2xl font-bold text-foreground">{course.price}</span>
                    <Link to="/contact#book-session">
                      <Button variant={course.featured ? "cta" : "outline"}>
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium mb-2 block">WHAT'S INCLUDED</span>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Every Course Includes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Play, title: "HD Video Lessons", desc: "Crystal clear video content you can watch anytime" },
              { icon: CheckCircle, title: "Interactive Exercises", desc: "Practice puzzles and quizzes after each lesson" },
              { icon: Clock, title: "Lifetime Access", desc: "Learn at your own pace with no time limits" },
              { icon: Users, title: "Community Access", desc: "Join our Discord community of learners" },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Not Sure Which Course Is Right for You?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation and I'll help you choose the perfect program for your level and goals.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Get Personalized Recommendation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
