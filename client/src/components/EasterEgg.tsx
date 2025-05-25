import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface EasterEggProps {
  onClose: () => void;
}

export default function EasterEgg({ onClose }: EasterEggProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  
  const deployConfetti = () => {
    setShowConfetti(true);
    
    // Play sound effect
    const audio = new Audio("https://www.myinstants.com/media/sounds/party-horn.mp3");
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio playback prevented:", e));
    
    // Clean up after animation
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-[#2E282A] bg-opacity-90 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  top: "-10%", 
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 15 + 5}px`,
                  height: `${Math.random() * 15 + 5}px`,
                  backgroundColor: [
                    "#FF6B6B", "#4ECDC4", "#FFE66D", "#7B61FF", "#FF9F1C"
                  ][Math.floor(Math.random() * 5)],
                  borderRadius: Math.random() > 0.5 ? "50%" : "0%",
                  opacity: 1,
                  rotate: Math.random() * 360
                }}
                animate={{ 
                  top: "110%",
                  rotate: Math.random() * 720 - 360,
                  opacity: [1, 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
      
      <motion.div 
        className="relative bg-[#F7FFF7] p-8 rounded-xl max-w-md"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl hover:text-[#FF6B6B] transition-colors"
        >
          &times;
        </button>
        <h3 className="font-display text-2xl font-bold mb-4">Achievement Unlocked! 🎉</h3>
        <p className="mb-4">You found a secret! That's exactly how I debug code - click random things until they work.</p>
        <div className="flex justify-center">
          <Button 
            onClick={deployConfetti}
            className="bg-[#FFE66D] text-[#2E282A] py-2 px-6 rounded-full font-bold hover:bg-opacity-80 transition-all transform hover:-rotate-3"
          >
            Deploy Confetti 🎊
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
