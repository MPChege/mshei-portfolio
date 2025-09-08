import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, User, Briefcase, Mail, Award, Home } from "lucide-react";
import logoImage from "../assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "Home", href: "#hero", icon: <Home className="w-4 h-4" /> },
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Skills", href: "#skills", icon: <Code className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Experience", href: "#experience", icon: <Award className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
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

  const scrollToSection = (href: string) => {
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "backdrop-blur-xl bg-white/10 border-b border-white/20 py-4 shadow-2xl" 
          : "bg-transparent py-6"
      }`}
      style={{
        background: scrolled 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(239,68,68,0.05), rgba(147,51,234,0.05))'
          : 'transparent'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Executive Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection("#hero")}
          >
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Mark Chege Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-8 mx-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 ${
                      isActive 
                        ? "text-red-600" 
                        : "text-gray-700 hover:text-red-600"
                    }`}
                  >
                    {item.name}
                    
                    {/* Animated Underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 via-pink-500 via-purple-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "100%" : 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Executive CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Get In Touch</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-gray-700 hover:text-red-600 transition-colors duration-300 flex-shrink-0"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Side Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] backdrop-blur-xl bg-white/10 border-l border-white/20 z-50 lg:hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(239,68,68,0.05), rgba(147,51,234,0.05))'
              }}
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <img 
                      src={logoImage} 
                      alt="Mark Chege Logo" 
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-lg font-bold text-gray-800">Menu</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.slice(1);
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="relative group"
                      >
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                            isActive 
                              ? "bg-gradient-to-r from-red-500/20 to-purple-500/20 text-red-600 border border-red-500/30" 
                              : "text-gray-700 hover:bg-white/10 hover:text-red-600"
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${
                            isActive 
                              ? "bg-gradient-to-br from-red-500 to-purple-600 text-white" 
                              : "bg-white/10 text-gray-600 group-hover:text-red-600"
                          }`}>
                            {item.icon}
                          </div>
                          <span className="font-medium">{item.name}</span>
                          
                          {/* Mobile Animated Indicator */}
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-purple-600"
                            />
                          )}
                        </button>
                        
                        {/* Mobile Underline Effect */}
                        <motion.div
                          className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isActive ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("#contact")}
                  className="w-full mt-8 bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;