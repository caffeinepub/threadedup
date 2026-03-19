import { DollarSign, Layers, Leaf, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: DollarSign,
    title: "Affordable Fashion",
    description:
      "Save up to 80% on retail prices. Look amazing without breaking the bank.",
    color: "bg-blush-light",
  },
  {
    icon: Leaf,
    title: "Sustainable Shopping",
    description:
      "Reduce fashion waste. Every purchase extends a garment's life and protects the planet.",
    color: "bg-sage-light",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Clean Clothes",
    description:
      "Every item is professionally sanitized and quality-checked before it reaches you.",
    color: "bg-lavender-light",
  },
  {
    icon: Layers,
    title: "Huge Variety",
    description:
      "Thousands of styles — vintage, branded, casual, and more. Something for every taste.",
    color: "bg-peach-light",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-primary/8 blur-2xl scale-95" />
            <img
              src="/assets/generated/product-flatlay.dim_600x600.jpg"
              alt="Curated thrift fashion flatlay"
              className="relative w-full h-auto rounded-3xl shadow-soft object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
              <div className="text-3xl">🌱</div>
              <div>
                <p className="font-bold text-sm text-foreground">
                  1,000+ items
                </p>
                <p className="text-xs text-muted-foreground">
                  added every week
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary/70 mb-3">
                Why Choose Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Fashion That Feels Good.{" "}
                <span className="font-italic-accent text-primary">
                  For Your Wallet & The World.
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-3"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${val.color} flex-shrink-0 flex items-center justify-center mt-0.5`}
                  >
                    <val.icon className="w-5 h-5 text-foreground/70" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-foreground mb-1">
                      {val.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
