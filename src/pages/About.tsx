import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Target, Heart, Users, Trophy, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";
import coachImage from "@/assets/coach-portrait.jpg";
import coachingSession from "@/assets/coaching-session.jpg";

const achievements = [
  { label: "FIDE Title", value: "International Master (IM)" },
  { label: "Peak Rating", value: "2456 FIDE" },
  { label: "National Titles", value: "3x Champion" },
  { label: "Coaching Experience", value: "15+ Years" },
  { label: "Students Trained", value: "500+" },
  { label: "Average Rating Gain", value: "+300 Points" },
];

const philosophy = [
  {
    icon: Target,
    title: "Strategic Thinking First",
    description: "I believe chess mastery comes from understanding the 'why' behind every move, not just memorizing variations.",
  },
  {
    icon: Heart,
    title: "Personalized Approach",
    description: "Every student is unique. I tailor my teaching methods to your learning style, strengths, and areas for improvement.",
  },
  {
    icon: Users,
    title: "Practical Application",
    description: "Theory is only valuable when applied. We work with your real games to build skills that translate to tournament success.",
  },
  {
    icon: BookOpen,
    title: "Continuous Growth",
    description: "Chess is a lifelong journey. I focus on building your analytical skills so you can continue improving independently.",
  },
];

const milestones = [
  { year: "2005", event: "Achieved FIDE Master title at age 18" },
  { year: "2008", event: "Won first National Championship" },
  { year: "2010", event: "Earned International Master title" },
  { year: "2012", event: "Started professional coaching career" },
  { year: "2015", event: "Founded Chess Titans Academy" },
  { year: "2018", event: "Coached first titled player to FM" },
  { year: "2022", event: "Reached 500 students milestone" },
  { year: "2024", event: "Launched comprehensive online program" },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium mb-2 block">ABOUT</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Meet Your Coach
            </h1>
            <p className="text-xl text-muted-foreground">
              Dedicated to helping chess players of all levels unlock their full potential 
              and achieve their competitive goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
              <img
                src={coachImage}
                alt="Chess Titans Head Coach"
                className="relative rounded-2xl w-full max-w-lg mx-auto shadow-card"
              />
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                From Competitive Player to Dedicated Coach
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  My chess journey began at age 7 when my grandfather taught me the basics on a 
                  worn wooden board. By 12, I was competing in national junior championships. 
                  By 18, I had earned my FIDE Master title.
                </p>
                <p>
                  But it was teaching my younger brother that revealed my true calling. Watching 
                  him grow from a complete beginner to winning his first tournament ignited a 
                  passion for coaching that has defined my career.
                </p>
                <p>
                  Today, I've helped over 500 students improve their game—from absolute beginners 
                  to aspiring masters. My approach combines rigorous positional understanding with 
                  practical tactics training, always tailored to each student's unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium mb-2 block">CREDENTIALS</span>
            <h2 className="font-display text-4xl font-bold text-foreground">
              Achievements & Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((item) => (
              <div key={item.label} className="text-center p-6 rounded-xl bg-card border border-border">
                <p className="font-display text-2xl font-bold text-primary mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium mb-2 block">PHILOSOPHY</span>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                My Teaching Philosophy
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Great chess coaches don't just teach moves—they develop thinkers. My methodology 
                is built on four core principles that have proven effective across hundreds of students.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {philosophy.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={coachingSession}
                alt="Chess coaching session"
                className="rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium mb-2 block">JOURNEY</span>
            <h2 className="font-display text-4xl font-bold text-foreground">
              Career Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {/* Events */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-6 relative">
                    <div className="w-16 flex-shrink-0 text-right">
                      <span className="font-display font-bold text-primary">{milestone.year}</span>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background absolute left-6 top-1" />
                    <div className="flex-1 pb-2">
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Chess Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let's discuss your chess goals and create a personalized plan to achieve them.
          </p>
          <Link to="/contact#book-session">
            <Button variant="hero" size="xl">
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
