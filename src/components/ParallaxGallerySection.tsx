import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import screenshotInventory from "@/assets/screenshot-inventory.png";
import screenshotMap from "@/assets/screenshot-map.png";
import screenshotTavern from "@/assets/screenshot-tavern.png";
import screenshotTrading from "@/assets/screenshot-trading.png";

const screenshots = [
  {
    src: screenshotInventory,
    title: "The Sanctum",
    subtitle: "Your Personal Vault",
    description:
      "Equip yourself with the finest DeFi tools. Connect wallets, swap tokens, and manage assets—all with intuitive drag-and-drop mechanics. No more hunting through endless menus.",
  },
  {
    src: screenshotMap,
    title: "World Map",
    subtitle: "Explore The Realm",
    description:
      "Navigate through The Valley's vast landscape. Discover new zones, unlock quests, and track your progress across different regions. Every location serves a unique purpose.",
  },
  {
    src: screenshotTavern,
    title: "The Tavern",
    subtitle: "Meet Fellow Adventurers",
    description:
      "Where legends gather. Join guilds, share strategies, and collaborate on quests with fellow adventurers. Social trading, but make it actually social.",
  },
  {
    src: screenshotTrading,
    title: "Trading Post",
    subtitle: "DeFi Made Simple",
    description:
      "Transform complex DeFi operations into simple, game-like interactions. Swap tokens, provide liquidity, and manage your portfolio—all through intuitive gameplay mechanics.",
  },
];

const ParallaxGallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = screenshots[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-surface-darker" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-pixel text-[10px] md:text-xs text-accent text-glow-magenta mb-4 block">
            SNEAK PEEK
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Inside{" "}
            <span className="text-primary text-glow-cyan">The Valley</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Discover the immersive world awaiting you. Each zone offers unique experiences.
          </p>
        </motion.div>

        {/* Main Content: 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column: Main Image with Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Introduction</h3>
            
            {/* Main Image Container */}
            <div className="relative group">
              <div className="card-pixel overflow-hidden rounded-lg">
                <div className="relative aspect-video">
                  <motion.img
                    key={activeIndex}
                    src={activeScreenshot.src}
                    alt={activeScreenshot.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Scanlines Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                      background:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
                    }}
                  />
                </div>
              </div>

              {/* Navigation Arrows - luôn hiển thị */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border-2 border-border hover:bg-background hover:border-primary transition-all flex items-center justify-center z-10 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border-2 border-border hover:bg-background hover:border-primary transition-all flex items-center justify-center z-10 shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h3
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl font-bold"
            >
              {activeScreenshot.title}: {activeScreenshot.subtitle}
            </motion.h3>
            
            <motion.div
              key={`desc-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>{activeScreenshot.description}</p>
              <p>
                The Valley transforms DeFi from a spreadsheet nightmare into an{" "}
                <span className="text-primary font-medium">immersive RPG quest</span>.
                Connect your wallet, build your profile, and begin your adventure—all
                through gameplay.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Horizontal Thumbnail Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.title}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 relative group transition-all duration-300 ${
                  index === activeIndex
                    ? "scale-105 ring-2 ring-primary"
                    : "opacity-60 hover:opacity-100"
                }`}
                style={{
                  marginLeft: index > 0 ? "-20px" : "0",
                  zIndex: screenshots.length - index,
                }}
              >
                <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-lg overflow-hidden border-2 border-border">
                  <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                      background:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
                    }}
                  />
                  {index === activeIndex && (
                    <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxGallerySection;
