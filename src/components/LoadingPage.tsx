import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Zap, Rocket, Sparkles, Brain, Building2 } from 'lucide-react';

interface LoadingPageProps {
  onComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  const loadingTexts = [
    "Initializing Nexus Swift Vision...",
    "Loading Innovation Algorithms...",
    "Connecting Future Networks...",
    "Preparing Executive Experience...",
    "Launching Portfolio Interface..."
  ];

  const techIcons = [
    { icon: <Code className="w-8 h-8" />, color: "#3b82f6", delay: 0 },
    { icon: <Brain className="w-8 h-8" />, color: "#8b5cf6", delay: 0.2 },
    { icon: <Zap className="w-8 h-8" />, color: "#f59e0b", delay: 0.4 },
    { icon: <Rocket className="w-8 h-8" />, color: "#ef4444", delay: 0.6 },
    { icon: <Building2 className="w-8 h-8" />, color: "#10b981", delay: 0.8 },
    { icon: <Sparkles className="w-8 h-8" />, color: "#ec4899", delay: 1.0 }
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setShowFinal(true);
          setTimeout(() => onComplete(), 1500);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete, loadingTexts.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-white via-red-50 to-purple-50 flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        {techIcons.map((tech, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + Math.sin(i) * 60}%`,
              color: tech.color
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: [0, 1, 0.7], 
              scale: [0, 1.2, 1], 
              rotate: [180, 0, 360],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              delay: tech.delay,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center"
            >
              <span className="text-white font-bold text-3xl">M</span>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -inset-2 rounded-full border-2 border-red-300 opacity-50"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.4, 1.2] }}
              transition={{ duration: 1.5, delay: 0.7 }}
              className="absolute -inset-4 rounded-full border border-purple-300 opacity-30"
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-6"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-red-600 to-purple-700 bg-clip-text text-transparent mb-2">
            Mark Chege
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-full mx-auto"
          />
        </motion.div>

        {/* Loading Text */}
        <div className="mb-8 h-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 font-medium"
            >
              {loadingTexts[currentText]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p
            key={progress}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-sm text-gray-500 mt-2"
          >
            {progress}%
          </motion.p>
        </div>

        {/* Final Animation */}
        <AnimatePresence>
          {showFinal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 0.6, repeat: 2 }}
                className="text-6xl mb-4"
              >
                🚀
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg font-semibold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"
              >
                Welcome to the Future!
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Matrix-style Code Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-green-500"
            style={{
              left: `${i * 10}%`,
              fontFamily: 'monospace'
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear"
            }}
          >
            {Array.from({ length: 20 }, () => 
              Math.random() > 0.5 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : Math.floor(Math.random() * 10)
            ).join('')}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingPage;