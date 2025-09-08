import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, User, Briefcase, Mail, Award, Sparkles } from "lucide-react";

const Navigation3D = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'opensource', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Skills", href: "#skills", icon: <Code className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Open Source", href: "#opensource", icon: <Code className="w-4 h-4" /> },
    { name: "Experience", href: "#experience", icon: <Award className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "backdrop-blur-xl bg-white/10 border-b border-white/20 py-3 shadow-2xl" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo with 3D Effect */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("#hero")}
          >
            <motion.div 
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
            >
              MPC
            </motion.div>
            <motion.span 
              className="text-xl font-bold text-white"
              whileHover={{ x: 5 }}
            >
              Mark Paul Chage
            </motion.span>
          </motion.div>

          {/* Desktop Navigation with 3D Effects */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  textShadow: "0 0 20px rgba(255, 107, 107, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium relative overflow-hidden ${
                  activeSection === item.href.slice(1)
                    ? "text-red-400 bg-red-500/20 shadow-lg shadow-red-500/25"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <span className="relative z-10">{item.icon}</span>
                <span className="relative z-10">{item.name}</span>
                
                {/* Active Indicator */}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button with 3D Effect */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-red-500/20 to-purple-500/20 border-red-500/30 text-white hover:from-red-500/30 hover:to-purple-500/30 backdrop-blur-lg shadow-lg"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X /> : <Menu />}
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation with 3D Effects */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/10 border-b border-white/20 py-6"
            >
              <div className="container mx-auto px-6">
                <div className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center gap-3 text-left p-4 rounded-xl transition-all duration-300 font-medium ${
                        activeSection === item.href.slice(1)
                          ? "text-red-400 bg-red-500/20 shadow-lg"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                      {item.name}
                    </motion.button>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="mt-4"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full bg-gradient-to-r from-red-500/20 to-purple-500/20 border-red-500/30 text-white hover:from-red-500/30 hover:to-purple-500/30"
                      onClick={() => scrollToSection("#contact")}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation3D;
