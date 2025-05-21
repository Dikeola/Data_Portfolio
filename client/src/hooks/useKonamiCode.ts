import { useState, useEffect } from "react";

// Konami Code sequence: Up, Up, Down, Down, Left, Right, Left, Right, B, A
const konamiCode = [
  "ArrowUp", 
  "ArrowUp", 
  "ArrowDown", 
  "ArrowDown", 
  "ArrowLeft", 
  "ArrowRight", 
  "ArrowLeft", 
  "ArrowRight", 
  "b", 
  "a"
];

export function useKonamiCode() {
  const [konamiDetected, setKonamiDetected] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      // Get current key
      const key = e.key.toLowerCase();
      
      // Update sequence with new key
      const updatedSequence = [...sequence, key];
      
      // Keep only the last n keys, where n is the length of the Konami code
      if (updatedSequence.length > konamiCode.length) {
        updatedSequence.shift();
      }
      
      setSequence(updatedSequence);
      
      // Check if sequence matches Konami code
      const isKonamiCode = updatedSequence.join(",").toLowerCase() === 
                           konamiCode.join(",").toLowerCase();
      
      if (isKonamiCode) {
        setKonamiDetected(true);
        
        // Reset after detection
        setTimeout(() => {
          setKonamiDetected(false);
          setSequence([]);
        }, 5000);
      }
    };

    window.addEventListener("keydown", keydownHandler);
    
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [sequence]);

  return konamiDetected;
}
