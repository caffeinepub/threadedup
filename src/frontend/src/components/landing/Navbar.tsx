import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleShopNow = () => {
    toast("Coming soon — join our waitlist!", {
      description: "Be the first to know when we launch!",
      action: { label: "Notify me", onClick: () => {} },
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
              <Leaf className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-bold text-xl text-foreground tracking-tight">
              Threaded<span className="text-primary">Up</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Shop", "About", "Reviews"].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="nav.link"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handleShopNow}
              className="hidden md:flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 shadow-soft transition-all hover:shadow-glow"
              data-ocid="nav.primary_button"
            >
              Shop Now
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-border px-4 pb-4"
          >
            <nav className="flex flex-col gap-2 pt-2">
              {["Home", "Shop", "About", "Reviews"].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left py-2 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={handleShopNow}
                className="mt-2 rounded-full bg-primary text-primary-foreground"
                data-ocid="nav.primary_button"
              >
                Shop Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
