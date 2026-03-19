import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Instagram, Leaf, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  const handleSubscribe = () => {
    if (!email.trim()) return;
    toast.success("You're on the list!", {
      description: "We'll notify you when we launch!",
    });
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Email capture */}
        <div className="bg-primary/20 rounded-3xl p-8 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-background mb-1">
              Get Early Access
            </h3>
            <p className="text-background/70 text-sm">
              Join 10,000+ fashion lovers. Be first for new drops.
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-full min-w-0 w-full sm:w-64"
              data-ocid="footer.input"
            />
            <Button
              onClick={handleSubscribe}
              className="rounded-full bg-primary text-primary-foreground shrink-0"
              data-ocid="footer.submit_button"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-xl">
                Threaded<span className="text-primary">Up</span>
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Fashion forward. Planet first. Making thrift shopping the coolest
              choice for Gen-Z.
            </p>
            <div className="flex items-center gap-2 text-xs text-background/40">
              <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-xs">
                🌿
              </span>
              Certified Eco-Friendly Business
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-background/50">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Home", "Shop", "About Us", "Return Policy"].map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="text-sm text-background/70 hover:text-background transition-colors"
                    data-ocid="footer.link"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-background/50">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-background/70 hover:text-background transition-colors"
                  data-ocid="footer.link"
                >
                  <Instagram className="w-4 h-4" />
                  @threadedup
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@threadedup.com"
                  className="flex items-center gap-2.5 text-sm text-background/70 hover:text-background transition-colors"
                  data-ocid="footer.link"
                >
                  <Mail className="w-4 h-4" />
                  hello@threadedup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/40">
          <p>© {year} ThreadedUp. All rights reserved.</p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-background/70 transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
