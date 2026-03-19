import { RotateCcw, Shield, Sparkles, Tag } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Shield,
    title: "Verified Sellers",
    description:
      "Every seller on ThreadedUp goes through a strict verification process so you only buy from trusted sources.",
    color: "bg-blush-light",
    iconColor: "text-primary",
  },
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    description:
      "All clothes are professionally cleaned and sanitized before shipping. Freshness guaranteed, always.",
    color: "bg-lavender-light",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns & Refunds",
    description:
      "Not happy? No worries. Our hassle-free returns policy ensures you're never stuck with something you don't love.",
    color: "bg-sage-light",
    iconColor: "text-accent-foreground",
  },
  {
    icon: Tag,
    title: "Trendy Vintage & Branded",
    description:
      "From Y2K vintage to big-brand finds — curated picks that are on-trend and totally unique to you.",
    color: "bg-peach-light",
    iconColor: "text-primary",
  },
];

export default function FeaturesSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary/70 mb-3">
            Our Promise
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why We're{" "}
            <span className="font-italic-accent text-primary">Different</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow flex flex-col gap-4"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center`}
              >
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
