import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, ShieldCheck, Users } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

const stats = [
  { icon: ShieldCheck, label: "50–80% off retail", color: "bg-blush-light" },
  { icon: Users, label: "10K+ happy shoppers", color: "bg-lavender-light" },
  { icon: Leaf, label: "Eco certified", color: "bg-sage-light" },
];

export default function HeroSection() {
  const handleShop = () => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBrowse = () => {
    toast("Coming soon — join our waitlist!", {
      description: "Categories launching very soon!",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen gradient-hero pt-16 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="rounded-full px-3 py-1 border-primary/30 bg-primary/8 text-primary font-medium text-xs"
              >
                <Leaf className="w-3 h-3 mr-1" /> Sustainable Fashion
              </Badge>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Shop Fashion That{" "}
              <span className="font-italic-accent text-primary">
                Saves Money
              </span>
              {" & The Planet"}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Buy trendy thrift fashion at 50–80% lower prices. Verified,
              cleaned, and eco-friendly. Your wardrobe. Your values.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                onClick={handleShop}
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base font-semibold shadow-soft hover:shadow-glow transition-all group"
                data-ocid="hero.primary_button"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleBrowse}
                className="rounded-full px-8 text-base font-semibold border-foreground/20 hover:bg-muted transition-all"
                data-ocid="hero.secondary_button"
              >
                Browse Categories
              </Button>
            </div>

            {/* Stat badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className={`flex items-center gap-2 ${stat.color} rounded-full px-4 py-2 shadow-xs`}
                >
                  <stat.icon className="w-4 h-4 text-foreground/70" />
                  <span className="text-sm font-semibold text-foreground/80">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative ring */}
              <div className="absolute inset-4 rounded-3xl bg-primary/10 blur-xl" />
              <img
                src="/assets/generated/hero-fashion.dim_800x900.jpg"
                alt="Stylish thrift fashion"
                className="relative w-full h-auto rounded-3xl shadow-soft object-cover aspect-[4/5]"
              />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">CO₂ Saved</p>
                  <p className="font-display font-bold text-lg">2.1 tons</p>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -top-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-card px-4 py-3"
              >
                <p className="text-xs text-muted-foreground">Avg. Savings</p>
                <p className="font-display font-bold text-2xl text-primary">
                  72%
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
