import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsOfServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsOfServiceModal({ open, onOpenChange }: TermsOfServiceModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] w-[95vw] sm:w-full p-4 sm:p-6">
        <DialogHeader className="border-b-2 border-primary pb-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-primary pr-8">Terms of Service</DialogTitle>
          {/* <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription> */}
        </DialogHeader>
        <ScrollArea className="h-[50vh] sm:h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">1. Agreement to Terms</h3>
              <p>
                By accessing and using the Chess Titans Academy website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">2. Use License</h3>
              <p className="mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on Chess Titans Academy's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">3. Disclaimer</h3>
              <p>
                The materials on Chess Titans Academy's website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">4. Limitations</h3>
              <p>
                In no event shall Chess Titans Academy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">5. Accuracy of Materials</h3>
              <p>
                The materials appearing on Chess Titans Academy's website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on the website are accurate, complete, or current. We may make changes to the materials contained on the website at any time without notice.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">6. Links</h3>
              <p>
                We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">7. Modifications</h3>
              <p>
                We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">8. Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where Chess Titans Academy is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">9. User Responsibilities</h3>
              <p className="mb-3">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not engage in any unlawful or unauthorized activity</li>
                <li>Not harass, abuse, or harm other users or staff</li>
                <li>Respect intellectual property rights</li>
                <li>Follow all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">10. Payment Terms</h3>
              <p>
                All fees and charges are exclusive of applicable taxes. You are responsible for paying all applicable taxes. We reserve the right to change our pricing at any time. Refund policies are provided with the specific course or service at the time of purchase.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">11. Intellectual Property Rights</h3>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is the property of Chess Titans Academy or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">12. Limitation of Liability</h3>
              <p>
                To the fullest extent permissible by law, Chess Titans Academy and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of revenue, profits, or data, arising from your use of the website or services, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">13. Contact Information</h3>
              <p>
                If you have questions about these Terms of Service, please contact us at:<br />
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
