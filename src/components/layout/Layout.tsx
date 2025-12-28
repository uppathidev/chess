import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "../ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
