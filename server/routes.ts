import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'Dikeola62@gmail.com',
    pass: 'hogcaq-Xisjem-8vepti' // App Password for Gmail
  },
  tls: {
    rejectUnauthorized: false // Only use this in development
  }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
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
    console.log('Received email request:', req.body); // Log the incoming request

    try {
      const { name, email, subject, message } = req.body;

      // Validate required fields
      if (!name || !email || !subject || !message) {
        console.log('Missing fields:', { name, email, subject, message });
        return res.status(400).json({ 
          error: 'Missing required fields',
          details: {
            name: !name,
            email: !email,
            subject: !subject,
            message: !message
          }
        });
      }

      // Validate email format
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        console.log('Invalid email format:', email);
        return res.status(400).json({ 
          error: 'Invalid email format',
          details: 'Please enter a valid email address (e.g., name@example.com)'
        });
      }

      console.log('Attempting to send email...');

      // Send email
      const info = await transporter.sendMail({
        from: `"Portfolio Contact" <${email}>`,
        to: 'Dikeola62@gmail.com',
        subject: `Portfolio Contact: ${subject}`,
        text: `From: ${name} (${email})\n\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: #fff; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
              <h3 style="color: #666; margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `
      });

      console.log('Message sent successfully:', info.messageId);
      res.json({ 
        success: true, 
        messageId: info.messageId 
      });
    } catch (error) {
      console.error('Detailed email error:', {
        error: error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      
      res.status(500).json({ 
        error: 'Failed to send email',
        details: 'Unable to send email. Please try again later or contact me directly at Dikeola62@gmail.com'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
