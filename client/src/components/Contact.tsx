import { motion } from "framer-motion";
import { useState } from "react";
import SocialLink from "./SocialLink";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:Dikeola62@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(
      `Name: ${formState.name}\n\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Clear form after opening email client
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 bg-[#2E282A] text-[#F7FFF7] relative">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#FF6B6B] rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#FFE66D] rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
            <motion.span 
              className="inline-block"
              animate={{
                rotate: [-3, 3, -3],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              Get
            </motion.span> In Touch
          </h2>
          <p className="text-lg text-center mb-12 text-gray-300">
            Want to collaborate or just say hi? My inbox is always open!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Social Media Links */}
            <div className="md:col-span-1">
              <h3 className="font-display font-bold text-2xl mb-8">Find Me On</h3>
              
              <div className="space-y-6">
                <SocialLink platform="linkedin" url="https://www.linkedin.com/in/dikeola/" />
                <SocialLink platform="github" url="https://github.com/Dikeola" />
                <SocialLink platform="instagram" url="https://www.instagram.com/_d_i_e_k_k_y_/" />
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2 bg-[#2E282A] bg-opacity-50 p-6 rounded-xl border border-gray-700">
              <h3 className="font-display font-bold text-xl mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <Input 
                      type="text" 
                      id="name" 
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-[#2E282A] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#4ECDC4] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input 
                      type="email" 
                      id="email" 
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-[#2E282A] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#4ECDC4] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <Input 
                    type="text" 
                    id="subject" 
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-[#2E282A] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#4ECDC4] transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea 
                    id="message" 
                    rows={5} 
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-[#2E282A] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-[#4ECDC4] transition-colors"
                    placeholder="Tell me all the details..."
                  />
                </div>
                
                <motion.div whileHover={{ rotate: -1 }} whileTap={{ rotate: 1 }}>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#FF6B6B] hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-opacity-50"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
