import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyPolicyModal({ open, onOpenChange }: PrivacyPolicyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] w-[95vw] sm:w-full p-4 sm:p-6">
        <DialogHeader className="border-b-2 border-primary pb-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-primary pr-8">Privacy Policy</DialogTitle>
          {/* <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription> */}
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">1. Introduction</h3>
              <p>
                Chess Titans Academy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">2. Information We Collect</h3>
              <p className="mb-3">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address, and any other information you voluntarily provide</li>
                {/* <li><strong>Payment Information:</strong> Credit card details and billing information (processed securely through third-party providers)</li> */}
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, pages visited, and time spent on pages</li>
                {/* <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and track site usage</li> */}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">3. How We Use Your Information</h3>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Respond to your inquiries and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect and prevent fraudulent transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">4. Information Sharing</h3>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may disclose your information when required by law or when we believe in good faith that disclosure is necessary to protect our rights or the safety of others.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">5. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h3>
              <p className="mb-3">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            {/* <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">7. Cookies Policy</h3>
              <p>
                Our website uses cookies to enhance your experience. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section> */}

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">7. Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any website before providing your information.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">8. Changes to This Policy</h3>
              <p>
               We may update this Privacy Policy periodically. We encourage you to review this page regularly to stay informed about any changes.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">9. Contact Us</h3>
              <p>
                If you have questions about our privacy practices, please contact us at:<br />
                <strong>Email:</strong> coach@chesstitans.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
