import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    price: 18,
    original: 85,
    image: "/assets/generated/product-1.dim_400x500.jpg",
    tag: "HOT 🔥",
  },
  {
    id: 2,
    name: "Floral Midi Dress",
    price: 12,
    original: 60,
    image: "/assets/generated/product-2.dim_400x500.jpg",
    tag: "NEW",
  },
  {
    id: 3,
    name: "Branded Sneakers",
    price: 22,
    original: 110,
    image: "/assets/generated/product-3.dim_400x500.jpg",
    tag: "RARE",
  },
  {
    id: 4,
    name: "Pastel Cardigan",
    price: 9,
    original: 45,
    image: "/assets/generated/product-4.dim_400x500.jpg",
    tag: "COZY",
  },
];

export default function ProductsSection() {
  const handleWishlist = (name: string) => {
    toast.success("Added to wishlist!", {
      description: `${name} saved to your wishlist.`,
    });
  };

  return (
    <section id="shop" className="py-20 sm:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary/70 mb-3">
            Trending Now
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Hand-Picked{" "}
            <span className="font-italic-accent text-primary">Thrift Gems</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Curated at unbeatable prices — verified, cleaned, and ready to wear.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => {
            const ocid = `products.item.${product.id}`;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={ocid}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all"
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="bg-primary text-primary-foreground text-xs rounded-full px-2 font-semibold">
                      VERIFIED ✓
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="outline"
                      className="bg-white/90 text-foreground text-xs rounded-full px-2 font-semibold border-0"
                    >
                      {product.tag}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-primary">
                      ${product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.original}
                    </span>
                    <span className="text-xs font-semibold text-accent-foreground bg-sage-light rounded-full px-2 py-0.5">
                      {Math.round(
                        ((product.original - product.price) /
                          product.original) *
                          100,
                      )}
                      % off
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleWishlist(product.name)}
                    className="w-full rounded-full border-primary/30 hover:bg-primary/8 hover:border-primary text-sm transition-colors group/btn"
                    data-ocid={ocid}
                  >
                    <Heart className="w-3.5 h-3.5 mr-2 group-hover/btn:fill-primary group-hover/btn:text-primary transition-colors" />
                    Add to Wishlist
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-primary/30 hover:bg-primary/8 px-8 font-semibold"
            onClick={() =>
              toast("Coming soon!", {
                description: "Full shop launching very soon.",
              })
            }
          >
            View All Items →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
