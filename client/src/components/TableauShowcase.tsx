import React, { useRef, useState, useEffect } from "react";
import "./TableauShowcase.css";

// Import local thumbnails
import tripadvisorThumb from "../assets/images/tripadvisor_dashboard.png";
import kingCountyThumb from "../assets/images/King County House Sales-2.png";
import breakingBadThumb from "../assets/images/Breaking Bad.png";
import europeanSalesThumb from "../assets/images/European_sales_Dashboard.png";
import amazonThumb from "../assets/images/Amazon_Dashboard.png";
import hollywoodThumb from "../assets/images/Hollywood_Dashboard.png";
import airbnbThumb from "../assets/images/Airbnb_Dashboard.png";
import goodreadsThumb from "../assets/images/Goodreads_Dashboard.png";
import friendsThumb from "../assets/images/friends.png";
import ibmThumb from "../assets/images/IBM_Dashboard.png";

const thumbnails = [
  tripadvisorThumb,
  kingCountyThumb,
  breakingBadThumb,
  europeanSalesThumb,
  amazonThumb,
  hollywoodThumb,
  airbnbThumb,
  goodreadsThumb,
  friendsThumb,
  ibmThumb
];

const tableauProjects = [
  { 
    title: "Tripadvisor", 
    url: "https://public.tableau.com/app/profile/dikeola.ogunmola/viz/Tripadvisor_17067904282680/Dashboard1", 
    thumbnail: thumbnails[0]
  },
  { 
    title: "King County House Sales", 
    url: "https://public.tableau.com/app/profile/dikeola.ogunmola/viz/KingCountyHouseSales_17063212030950/KingCountyHouseSales", 
    thumbnail: thumbnails[1]
  },
  { 
    title: "Breaking Bad", 
    url: "https://public.tableau.com/app/profile/dikeola.ogunmola/viz/BreakingBad_17067773944740/BreakingBad", 
    thumbnail: thumbnails[2]
  },
  { 
    title: "European Sales Dashboard", 
    url: "https://public.tableau.com/app/profile/dikeola.ogunmola/viz/EuropeanSalesDashboard_17062648803140/Dashboard1", 
    thumbnail: thumbnails[3]
  },
  { 
    title: "Amazon Sales in India", 
    url: "https://public.tableau.com/app/profile/dikeola.ogunmola/viz/AmazonSalesinIndia_17068706908910/Dashboard1", 
    thumbnail: thumbnails[4]
  },
  { 
    title: "Hollywood Stories", 
    url: "https://public.tableau.com/app/profile/dikeola.ogunmola/viz/HollywoodStories_17068655355070/Dashboard1", 
    thumbnail: thumbnails[5]
  },
  { 
    title: "Airbnb", 
    url: "https://public.tableau.com/app/profile/dikeola.ogunmola/viz/Airbnb_17067060869390/Dashboard1", 
    thumbnail: thumbnails[6]
  },
  { 
    title: "Goodreads", 
    url: "https://public.tableau.com/app/profile/dikeola.ogunmola/viz/Goodreads_17068371470980/Dashboard1", 
    thumbnail: thumbnails[7]
  },
  { 
    title: "Friends", 
    url: "https://public.tableau.com/app/profile/dikeola.ogunmola/viz/Friends_17067816714310/Dashboard1", 
    thumbnail: thumbnails[8]
  },
  { 
    title: "IBM HR Dashboard", 
    url: "https://public.tableau.com/app/profile/dikeola.ogunmola/viz/IBMHRdashboard_17067946629540/Dashboard1", 
    thumbnail: thumbnails[9]
  },
];

// Create a doubled array for seamless infinite scroll
export default function TableauShowcase() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [hoveredBubble, setHoveredBubble] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState<number | null>(null);
  const [visibleBubbles, setVisibleBubbles] = useState<boolean[]>([]);
  
  // Pause animation on hover
  const handleBubbleHover = (idx: number) => {
    setHoveredBubble(idx);
    setIsPaused(true);
  };

  const handleBubbleLeave = () => {
    setHoveredBubble(null);
    setIsPaused(false);
  };

  // Initialize random visibility for bubbles
  useEffect(() => {
    // Start with all bubbles visible
    const initialVisibility = Array(tableauProjects.length * 2).fill(true);
    setVisibleBubbles(initialVisibility);
    
    // Randomly toggle bubble visibility every 500-1500ms
    const interval = setInterval(() => {
      setVisibleBubbles(prev => {
        const newVisibility = [...prev];
        // Toggle 1-3 random bubbles each time
        const bubblesToToggle = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < bubblesToToggle; i++) {
          const randomIndex = Math.floor(Math.random() * newVisibility.length);
          newVisibility[randomIndex] = !newVisibility[randomIndex];
        }
        return newVisibility;
      });
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  // Handle animation play state
  useEffect(() => {
    if (rowRef.current) {
      rowRef.current.style.animationPlayState = isPaused ? 'paused' : 'running';
    }
  }, [isPaused]);

  // Create a single row of bubbles with the project data
  const renderBubbleRow = (rowClass: string) => (
    <div 
      className={`tableau-bubbles-row ${rowClass}`}
      style={{
        animationPlayState: isPaused ? 'paused' : 'running',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => !hoveredBubble && setIsPaused(false)}
    >
      {[...tableauProjects, ...tableauProjects].map((project, idx) => (
        <div 
          key={`${project.title}-${idx}`} 
          className="relative flex flex-col items-center"
          style={{
            height: '100%',
            padding: '0 10px',
            visibility: visibleBubbles[idx] ? 'visible' : 'hidden',
            transition: 'visibility 0.3s ease',
          }}
        >
          {/* Bubble */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`bubble ${visibleBubbles[idx] ? 'visible' : ''} ${hoveredBubble === idx ? 'bubble-glow' : ''}`}
            onMouseEnter={() => handleBubbleHover(idx)}
            onMouseLeave={handleBubbleLeave}
            onFocus={() => handleBubbleHover(idx)}
            onBlur={handleBubbleLeave}
            aria-label={`View ${project.title} Tableau Dashboard`}
            style={{
              opacity: visibleBubbles[idx] ? 1 : 0,
              transition: 'all 0.3s ease',
            }}
          />
          
          {/* Thumbnail Container */}
          <div className="thumbnail-container">
            <div className="thumbnail" data-title={project.title}>
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%25" height="100%25" fill="%23f0f0f0"/%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-visible" style={{ height: '200px' }}>
      <div className="tableau-bubbles-container">
        {renderBubbleRow('primary')}
        {renderBubbleRow('secondary')}
      </div>
    </div>
  );
}