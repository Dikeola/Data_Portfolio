import { motion } from "framer-motion";

type Platform = "linkedin" | "github" | "instagram" | "twitter";

interface SocialLinkProps {
  platform: Platform;
  url: string;
  children?: React.ReactNode;
}

export default function SocialLink({ platform, url, children }: SocialLinkProps) {
  // All platforms now use the same hover animation as LinkedIn
  const movementStyles: Record<Platform, { hover: any; tap?: any }> = {
    linkedin: {
      hover: { x: 10, backgroundColor: 'rgba(0, 119, 181, 0.2)', borderColor: '#0077b5' },
      tap: { scale: 0.9 }
    },
    github: {
      hover: { 
        x: 10, 
        backgroundColor: 'rgba(33, 33, 33, 0.2)',
        borderColor: '#333'
      },
      tap: { scale: 0.9 }
    },
    instagram: {
      hover: {
        x: 10,
        backgroundColor: 'rgba(225, 48, 108, 0.2)',
        borderColor: '#E1306C'
      },
      tap: { scale: 0.9 }
    },
    twitter: {
      hover: {
        x: 10,
        backgroundColor: 'rgba(29, 161, 242, 0.2)',
        borderColor: '#1DA1F2'
      },
      tap: { scale: 0.9 }
    }
  };

  const vibrate = () => {
    if ('vibrate' in navigator && Math.random() > 0.5) {
      navigator.vibrate(200);
    }
  };

  // Get icon color based on platform
  const getIconColor = () => {
    switch(platform) {
      case 'linkedin': return '#0077b5';
      case 'github': return '#333';
      case 'instagram': return '#E1306C';
      case 'twitter': return '#1DA1F2';
      default: return 'currentColor';
    }
  };

  return (
    <motion.a
      href={url}
      className="flex items-center p-5 bg-[#2E282A] bg-opacity-80 rounded-xl border border-gray-700 transition-colors"
      whileHover={movementStyles[platform].hover}
      whileTap={movementStyles[platform].tap || { scale: 0.95 }}
      onHoverStart={vibrate}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || (
        <>
          <div className="w-12 h-12 rounded-full bg-opacity-20 flex items-center justify-center mr-4"
               style={{ backgroundColor: `${getIconColor()}20` }}>
            <i className={`ri-${platform}-fill text-2xl`} style={{ color: getIconColor() }}></i>
          </div>
          <span className="text-xl font-display capitalize">{platform}</span>
        </>
      )}
    </motion.a>
  );
}
