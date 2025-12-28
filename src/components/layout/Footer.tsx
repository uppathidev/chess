import { useState } from "react";
import { Link } from "react-router-dom";
import { Crown, Mail, Phone, MapPin, Youtube, Instagram } from "lucide-react";
import { PrivacyPolicyModal } from "./PrivacyPolicyModal";
import { TermsOfServiceModal } from "./TermsOfServiceModal";

const footerLinks = {
  coaching: [
    { label: "Private Lessons", href: "/services" },
    { label: "Group Classes", href: "/services" },
    { label: "Online Courses", href: "/courses" },
    { label: "Tournament Prep", href: "/services" },
  ],
  // resources: [
  //   { label: "Free Downloads", href: "/resources" },
  //   { label: "Chess Blog", href: "/resources" },
  //   { label: "Video Tutorials", href: "/resources" },
  //   { label: "Academy", href: "/resources" },
  // ],
  company: [
    { label: "About", href: "/about" },
    { label: "Success Stories", href: "/testimonials" },
    { label: "Contact", href: "/contact#book-session" },
    { label: "Book Session", href: "/contact#book-session" },
  ],
};

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Crown className="w-8 h-8 text-primary" />
              <span className="font-display text-xl font-bold text-foreground">
                CHESS <span className="text-primary">TITANS</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transform your chess game with personalized coaching from a titled master. 
              Join hundreds of students who have elevated their rating and strategic thinking.
            </p>
            <div className="flex gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Coaching</h4>
            <ul className="space-y-3">
              {footerLinks.coaching.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                coach@chesstitans.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Online Worldwide
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Chess Titans Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setTermsOpen(true)}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>

      <PrivacyPolicyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
      <TermsOfServiceModal open={termsOpen} onOpenChange={setTermsOpen} />
    </>
  );
}
