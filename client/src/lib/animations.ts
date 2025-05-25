import { Variants } from "framer-motion";

// Shared animation variants
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
};

export const popIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

// Motion tag animations
export const tagFloat = {
  animate: {
    x: [0, 40, -30, 0],
    y: [0, -20, 15, 0],
    rotate: [0, 25, -15, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "anticipate",
    }
  }
};

export const tagHover = {
  scale: 1.2,
  rotate: Math.random() * 30 - 15,
  transition: { type: "spring", bounce: 0.8 }
};

// For badge animations
export const badgeFloat = {
  animate: {
    y: [0, -15, 10, 0],
    x: [0, 10, -8, 0],
    rotate: [0, 5, -3, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// For profile picture
export const wiggle = {
  animate: {
    rotate: [-3, 3, -3],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// For horizontal bounce animation
export const bounceHorizontal = {
  animate: {
    x: [0, 25, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// For floating animation
export const float = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// For social links hover effects
export const socialHoverEffects = {
  linkedin: {
    hover: { x: 10, backgroundColor: 'rgba(0, 119, 181, 0.2)', borderColor: '#0077b5' },
    tap: { scale: 0.9 }
  },
  github: {
    hover: { 
      rotate: 360, 
      backgroundColor: 'rgba(33, 33, 33, 0.2)',
      borderColor: '#333'
    }
  },
  instagram: {
    hover: {
      scale: 1.2,
      backgroundColor: 'rgba(225, 48, 108, 0.2)',
      borderColor: '#E1306C'
    }
  },
  twitter: {
    hover: {
      y: -10,
      backgroundColor: 'rgba(29, 161, 242, 0.2)',
      borderColor: '#1DA1F2'
    }
  }
};
