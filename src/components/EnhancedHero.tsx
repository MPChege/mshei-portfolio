import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const EnhancedHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 lg:pt-24"
    >
      {/* Executive Background with Animated Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-purple-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-pink-50/50 to-white/80"></div>
      
      {/* Animated Gradient Waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/5 via-purple-500/10 to-blue-500/5"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(239,68,68,0.05), rgba(147,51,234,0.1), rgba(59,130,246,0.05))",
              "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(236,72,153,0.1), rgba(239,68,68,0.05))",
              "linear-gradient(225deg, rgba(147,51,234,0.05), rgba(239,68,68,0.1), rgba(59,130,246,0.05))",
              "linear-gradient(315deg, rgba(239,68,68,0.05), rgba(59,130,246,0.1), rgba(147,51,234,0.05))"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-20 ${
              i % 4 === 0 ? 'bg-red-400' : 
              i % 4 === 1 ? 'bg-purple-400' : 
              i % 4 === 2 ? 'bg-blue-400' : 'bg-pink-400'
            }`}
            style={{
              width: Math.random() * 40 + 20,
              height: Math.random() * 40 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-4 sm:mt-8 lg:mt-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Executive Name Display */}
          <motion.div 
            className="mb-4 sm:mb-6 lg:mb-8"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tight mb-2 sm:mb-4">
              <span className="block bg-gradient-to-r from-gray-900 via-red-600 to-purple-700 bg-clip-text text-transparent">
                Mark Chege
              </span>
            </h1>
          </motion.div>

          {/* Professional Title */}
          <motion.div 
            className="mb-6 sm:mb-8 lg:mb-10"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-700 leading-relaxed px-2 sm:px-4">
              <span className="block sm:inline">Software Engineer</span>
              <span className="hidden sm:inline text-red-500 mx-1 sm:mx-2">|</span>
              <span className="block sm:inline">Fullstack Developer</span>
              <span className="hidden sm:inline text-red-500 mx-1 sm:mx-2">|</span>
              <span className="block sm:inline">AI & Sustainability Tech Enthusiast</span>
            </h2>
          </motion.div>

          {/* Nexus Swift Branding */}
          <motion.div 
            className="mb-6 sm:mb-8 lg:mb-10"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-4">
              <span className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 font-medium">Co-Founder of</span>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gradient-to-r from-red-500 to-red-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="text-white font-bold text-base sm:text-lg lg:text-xl xl:text-2xl tracking-wide">NEXUS SWIFT</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Executive Bio */}
          <motion.div 
            className="mb-10 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4 font-light">
              Building the future through{' '}
              <span className="font-semibold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                Nexus Swift
              </span>{' '}
              — an innovative company where cutting-edge technology meets real-world impact. 
              Co-founding this venture with a vision to create AI-driven solutions and sustainability tech 
              that transforms industries.
            </p>
          </motion.div>

          {/* Executive CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center mb-12 sm:mb-16 lg:mb-20 px-2 sm:px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg xl:text-xl shadow-2xl transition-all duration-500 flex items-center justify-center gap-2 sm:gap-3 min-h-[52px] sm:min-h-[60px] lg:min-h-[70px] w-full sm:w-auto"
              style={{
                boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 font-bold">Explore Projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10 text-lg sm:text-xl font-bold"
              >
                →
              </motion.span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-lg border-2 border-gray-300/50 text-gray-700 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg xl:text-xl transition-all duration-500 flex items-center justify-center gap-2 sm:gap-3 min-h-[52px] sm:min-h-[60px] lg:min-h-[70px] w-full sm:w-auto hover:bg-white/95 hover:border-gray-400/70 hover:shadow-xl"
              style={{
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10" />
              <span className="relative z-10 font-bold">Get In Touch</span>
            </motion.button>
          </motion.div>

          {/* Executive Social Links */}
          <motion.div 
            className="flex justify-center gap-4 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {[
              { 
                icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />, 
                label: "LinkedIn", 
                color: "hover:from-blue-500 hover:to-blue-600",
                url: "https://www.linkedin.com/in/mark-paul-chege-395b01269/"
              },
              { 
                icon: <Github className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />, 
                label: "GitHub", 
                color: "hover:from-gray-600 hover:to-gray-700",
                url: "https://github.com/MPChege"
              },
              { 
                icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />, 
                label: "Email", 
                color: "hover:from-red-500 hover:to-red-600",
                url: "mailto:markpaulchege7@gmail.com"
              }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 180 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.15, y: -5, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.9 }}
                className={`group relative overflow-hidden w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/80 backdrop-blur-lg border-2 border-gray-300/50 rounded-xl sm:rounded-2xl flex items-center justify-center text-gray-600 transition-all duration-500 cursor-pointer ${social.color} hover:text-white hover:border-transparent`}
                title={social.label}
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="relative z-10">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="w-5 h-10 sm:w-6 sm:h-12 lg:w-8 lg:h-14 border-2 border-red-400/70 rounded-full flex justify-center relative overflow-hidden group-hover:border-red-500 transition-colors duration-300">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 sm:w-1.5 sm:h-4 bg-gradient-to-b from-red-500 to-purple-500 rounded-full mt-1.5 sm:mt-2"
              />
            </div>
            <motion.span 
              className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 group-hover:text-red-500 transition-colors duration-300"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EnhancedHero;
