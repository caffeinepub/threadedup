import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const badges = [
  { label: "Quality Checked", sub: "Every item inspected" },
  { label: "Hygienic", sub: "Professionally sanitized" },
  { label: "Affordable", sub: "50–80% off retail" },
  { label: "Eco-Friendly", sub: "Reduce fashion waste" },
];

export default function TrustSection() {
  return (
    <section className="py-16 gradient-trust">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            You Can Trust Us
          </h2>
          <p className="text-muted-foreground mt-2">
            We put quality and safety first. Always.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-xs hover:shadow-soft transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/12 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-base text-foreground">
                  {badge.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {badge.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
