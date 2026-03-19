import { Star } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Priya S.",
    initials: "PS",
    rating: 5,
    text: "Got a branded jacket for just $20! It was super clean and exactly as described. Obsessed with ThreadedUp!",
    color: "bg-blush-light",
    textColor: "text-primary",
  },
  {
    name: "Aisha K.",
    initials: "AK",
    rating: 5,
    text: "Love how sustainable and affordable this is. My whole outfit cost less than $40 and I got so many compliments!",
    color: "bg-lavender-light",
    textColor: "text-secondary-foreground",
  },
  {
    name: "Zoe M.",
    initials: "ZM",
    rating: 5,
    text: "Returns were super easy and the quality check really shows. Will definitely shop here again and again!",
    color: "bg-sage-light",
    textColor: "text-accent-foreground",
  },
];

const STARS = [1, 2, 3, 4, 5] as const;

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary/70 mb-3">
            Happy Shoppers
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Shoppers{" "}
            <span className="font-italic-accent text-primary">Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card rounded-3xl p-6 shadow-card hover:shadow-soft transition-shadow flex flex-col gap-4"
            >
              <div className="flex">
                {STARS.slice(0, review.rating).map((n) => (
                  <Star
                    key={n}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed flex-1 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center`}
                >
                  <span className={`text-xs font-bold ${review.textColor}`}>
                    {review.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Verified Buyer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-primary/8 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div>
            <p className="font-display font-bold text-3xl text-foreground">
              10,000+
            </p>
            <p className="text-sm text-muted-foreground">Happy Shoppers</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div>
            <p className="font-display font-bold text-3xl text-foreground">
              4.9 ⭐
            </p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div>
            <p className="font-display font-bold text-3xl text-foreground">
              98%
            </p>
            <p className="text-sm text-muted-foreground">Would Recommend</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
