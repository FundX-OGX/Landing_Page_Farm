import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import valleyDemo from "@/assets/valley-demo.mp4";

const ValleyDemoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-dark to-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-pixel text-[10px] md:text-xs text-glow-gold px-4 py-2 border-2 border-secondary bg-secondary/10 inline-block mb-6">
            PREVIEW // THE VALLEY
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Glimpse Into </span>
            <span className="text-glow-cyan text-primary">Your Destination</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A mystical realm where DeFi becomes an adventure. Watch the world come alive.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Pixel Border Frame */}
          <div className="relative card-pixel p-2 md:p-3 glow-border">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

            {/* Video */}
            <div className="relative aspect-video bg-surface-darker overflow-hidden">
              <video
                ref={videoRef}
                src={valleyDemo}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="w-full h-full" style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                }} />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

              {/* Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 flex items-center justify-center bg-primary/20 backdrop-blur-sm border border-primary/50 hover:bg-primary/40 transition-colors"
                    style={{
                      clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))'
                    }}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-primary" />
                    ) : (
                      <Play className="w-4 h-4 text-primary" />
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 flex items-center justify-center bg-primary/20 backdrop-blur-sm border border-primary/50 hover:bg-primary/40 transition-colors"
                    style={{
                      clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))'
                    }}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-primary" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-primary" />
                    )}
                  </button>
                </div>

                {/* Status Badge */}
                <div className="font-pixel text-[8px] text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  LIVE PREVIEW
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground text-sm mt-6 font-pixel text-[8px] tracking-wider"
          >
            [ THE VALLEY AWAITS YOUR ARRIVAL ]
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValleyDemoSection;
