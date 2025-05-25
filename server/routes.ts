
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Dikeola62@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the portfolio
  app.get('/api/portfolio-data', (req, res) => {
    const portfolioData = {
      owner: {
        name: "Alex",
        title: "Front-end Developer",
        tagline: "A front-end developer with a flair for the dramatically chaotic"
      },
      skills: [
        {
          category: "Front-end Magic",
          icon: "ri-code-s-slash-line",
          color: "#FF6B6B",
          items: ["React & Next.js", "JavaScript/TypeScript", "CSS/SASS/Tailwind", "Framer Motion & GSAP"]
        },
        {
          category: "UI/UX Design",
          icon: "ri-palette-line",
          color: "#4ECDC4",
          items: ["Figma & Adobe XD", "Interactive Prototyping", "Responsive Design", "Animation & Microinteractions"]
        },
        {
          category: "ADHD Superpowers",
          icon: "ri-focus-3-line",
          color: "#FFE66D",
          items: ["Hyperfocus when interested", "Creative problem-solving", "Thinking outside the box", "Highly adaptable workflow"]
        }
      ],
      projects: [
        {
          title: "Motion Dashboard",
          description: "An animated dashboard that reacts to your cursor movement and features chaotic but intuitive navigation.",
          image: "https://pixabay.com/get/gb73b2f12c0beaa02bbc32671e2bd04fccfd4081eaf54ae666f675a50ca427a4e85c6499c38cbbf47f4966c0fcd5fa3ff235bfd8b7e2faff7471775b5d260bae6_1280.jpg",
          tag: "React",
          tagColor: "#FF6B6B",
          links: {
            demo: "#",
            github: "#"
          }
        },
        {
          title: "Audio Visualizer",
          description: "A chaotic audio experience that visualizes music with particle effects that respond to beat and frequency.",
          image: "https://images.unsplash.com/photo-1614850523011-8f49ffc73908",
          tag: "JavaScript",
          tagColor: "#4ECDC4",
          links: {
            demo: "#",
            github: "#"
          }
        },
        {
          title: "Portfolio Generator",
          description: "Create your own chaotic portfolio with this drag-and-drop builder featuring random animations.",
          image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
          tag: "Next.js",
          tagColor: "#FFE66D",
          links: {
            demo: "#",
            github: "#"
          }
        }
      ],
      achievements: [
        {
          title: "React Expert",
          description: "Advanced React & Redux Certification",
          issuer: "Issued by Frontend Masters",
          icon: "ri-reactjs-line",
          iconColor: "#FF6B6B"
        },
        {
          title: "JavaScript Ninja",
          description: "Modern JavaScript Deep Dive",
          issuer: "Issued by Udemy",
          icon: "ri-javascript-line",
          iconColor: "#4ECDC4"
        },
        {
          title: "UI/UX Master",
          description: "Advanced Design Principles",
          issuer: "Issued by Interaction Design Foundation",
          icon: "ri-palette-line",
          iconColor: "#FFE66D"
        },
        {
          title: "Hackathon Winner",
          description: "Best UI/UX Design Award",
          issuer: "Web Dev Conference 2023",
          icon: "ri-award-line",
          iconColor: "#FF9F1C"
        }
      ],
      social: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "github", url: "https://github.com" },
        { platform: "instagram", url: "https://instagram.com" },
        { platform: "twitter", url: "https://twitter.com" }
      ]
    };
    
    res.json(portfolioData);
  });

  app.post('/api/send-email', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      await transporter.sendMail({
        from: email,
        to: 'Dikeola62@gmail.com',
        subject: `Portfolio Contact: ${subject}`,
        text: `From: ${name} (${email})\n\n${message}`,
        html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
      });
      
      res.json({ success: true });
    } catch (error) {
      console.error('Email error:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
