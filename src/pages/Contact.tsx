import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Calendar,
  Send,
  Youtube,
  Instagram
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "coach@chesstitans.com",
    description: "Best for detailed questions",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: "+1 (555) 123-4567",
    description: "Quick consultations",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    description: "Usually much faster",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Online Worldwide",
    description: "All sessions via video call",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rating: "",
    goals: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "I'll get back to you within 24 hours to schedule your free consultation.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      rating: "",
      goals: "",
      message: "",
    });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium mb-2 block">GET IN TOUCH</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Talk Chess
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to take your game to the next level? Book a free 30-minute strategy session 
              to discuss your goals and create a personalized improvement plan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <Card key={method.title} variant="feature" className="text-center p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                <p className="text-primary font-medium mb-1">{method.value}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24" id="book-session">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <span className="text-primary font-medium mb-2 block">BOOK YOUR SESSION</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Free Strategy Consultation
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I'll reach out within 24 hours to schedule your 
                complimentary 30-minute session. We'll discuss your chess background, goals, 
                and create a roadmap for your improvement.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone (optional)
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Rating (estimate)
                    </label>
                    <Input
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      placeholder="e.g., 1200 or Beginner"
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What are your chess goals?
                  </label>
                  <Input
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="e.g., Reach 1800, win local tournaments, improve tactics..."
                    className="h-12 bg-secondary border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Anything else you'd like to share?
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your chess journey, current struggles, or questions..."
                    rows={4}
                    className="bg-secondary border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full sm:w-auto"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="lg:pl-12">
              <Card variant="gradient" className="p-8 mb-8">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm text-primary font-bold">1</span>
                    <span>I'll review your submission and reach out via email within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm text-primary font-bold">2</span>
                    <span>We'll schedule a convenient time for your free 30-minute video call</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm text-primary font-bold">3</span>
                    <span>During our call, we'll assess your level and discuss your goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm text-primary font-bold">4</span>
                    <span>I'll recommend a personalized training plan with no obligation</span>
                  </li>
                </ul>
              </Card>

              {/* Social */}
              <Card variant="feature" className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Connect on Social Media</h4>
                <div className="flex gap-4">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
