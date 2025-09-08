import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Globe, Calculator, Users, Building2, Leaf, Shield, Brain, Code, Rocket, Briefcase, ChevronRight, Eye } from 'lucide-react';

const EnhancedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "TallyCheck",
      url: "https://www.tallycheck.co.ke",
      description: "Attendance automation platform designed for Kenyan universities. Revolutionizes student check-ins using Bluetooth technology and QR codes, eliminating classroom disruptions while providing real-time data and timestamped records for accurate attendance tracking.",
      icon: <Calculator className="w-6 h-6" />,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      category: "EdTech",
      categoryColor: "from-emerald-100 to-emerald-200",
      categoryText: "text-emerald-700"
    },
    {
      title: "Madaraka Schools",
      url: "https://madaraka-hub-54.vercel.app",
      description: "Comprehensive school management system for Nairobi Campus. Features student enrollment, academic records, fee management, and parent-teacher communication tools to streamline educational administration.",
      icon: <Building2 className="w-6 h-6" />,
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      category: "School Management",
      categoryColor: "from-violet-100 to-violet-200",
      categoryText: "text-violet-700"
    },
    {
      title: "Faith Connect",
      url: "https://www.faithconnect.biz",
      description: "Christian business networking platform with community features, service marketplace, and faith-based matching algorithms.",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      category: "Social Platform",
      categoryColor: "from-blue-100 to-blue-200",
      categoryText: "text-blue-700"
    },
    {
      title: "Carbon Corp ESG",
      url: "https://www.carboncorp.cc",
      description: "Enterprise ESG (Environmental, Social, and Governance) platform for sustainable business practices and carbon footprint management.",
      icon: <Leaf className="w-6 h-6" />,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      category: "Sustainability",
      categoryColor: "from-green-100 to-green-200",
      categoryText: "text-green-700"
    },
    {
      title: "Amka Wallet",
      url: "https://amka-wallet.vercel.app",
      description: "Next-generation digital wallet platform with advanced security features and seamless transaction management.",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      category: "FinTech",
      categoryColor: "from-indigo-100 to-indigo-200",
      categoryText: "text-indigo-700"
    },
    {
      title: "DayStar Platform",
      url: "https://daystar-sand.vercel.app",
      description: "Comprehensive educational platform with innovative learning management and student engagement tools.",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-amber-500 via-orange-500 to-red-500",
      category: "Education",
      categoryColor: "from-amber-100 to-amber-200",
      categoryText: "text-amber-700"
    },
    {
      title: "DayStar Beacons",
      url: "https://github.com/Kaesari/DayStar-Beacons",
      description: "Open-source beacon management system for location-based services and IoT device coordination.",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      category: "IoT",
      categoryColor: "from-purple-100 to-purple-200",
      categoryText: "text-purple-700"
    },
    {
      title: "Jirani Community",
      url: "https://jirani-mu.vercel.app",
      description: "Social community platform connecting neighbors and fostering local engagement through digital innovation.",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-red-500 via-pink-500 to-rose-500",
      category: "Social",
      categoryColor: "from-red-100 to-red-200",
      categoryText: "text-red-700"
    },
    {
      title: "Nonamillz Safaris",
      url: "https://nonamillz-safaris.vercel.app",
      description: "Premium safari and tourism platform offering curated African wildlife experiences and adventure booking.",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      category: "Tourism",
      categoryColor: "from-orange-100 to-orange-200",
      categoryText: "text-orange-700"
    },
    {
      title: "Charis Eagle Springs",
      url: "https://www.chariseaglesprings.org",
      description: "Professional organization website showcasing community initiatives and educational programs.",
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-cyan-500 via-teal-500 to-blue-500",
      category: "Organization",
      categoryColor: "from-cyan-100 to-cyan-200",
      categoryText: "text-cyan-700"
    },
    {
      title: "Sirolev VIP Protocol",
      url: "https://www.sirolevvipprotocolltd.co.ke",
      description: "Executive VIP services and protocol management platform for high-profile events and corporate services.",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-rose-500 via-red-500 to-pink-500",
      category: "Executive Services",
      categoryColor: "from-rose-100 to-rose-200",
      categoryText: "text-rose-700"
    }
  ];

  // Display only first 6 projects initially
  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{ y }}
    >
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-red-50/30 via-purple-50/20 to-blue-50/30"></div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Animation */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Innovative solutions spanning education technology, school management systems, sustainability, and community platforms.
          </motion.p>
        </motion.div>

        {/* Projects Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {displayedProjects.map((project, index) => {
            const direction = index % 2 === 0 ? -50 : 50; // Alternate directions
            return (
            <motion.div
              key={project.title}
              className="group h-full"
              initial={{ opacity: 0, x: direction, y: 20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: direction, y: 20 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="h-full bg-white/95 backdrop-blur-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden relative group-hover:scale-[1.02]">
                {/* Animated Gradient Background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  whileHover={{
                    translateX: "100%",
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                />
                
                <CardContent className="p-6 relative z-10">
                  {/* Project Icon with Enhanced Animation */}
                  <motion.div 
                    className="mb-4"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 } 
                    }}
                  >
                    <motion.div 
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                      whileHover={{ 
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                        y: -2
                      }}
                    >
                      {/* Icon Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-2xl"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className="text-white relative z-10"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.icon}
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Category Badge with Modern Design */}
                  <motion.div 
                    className="mb-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <Badge 
                      className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.categoryColor} ${project.categoryText} border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105`}
                    >
                      {project.category}
                    </Badge>
                  </motion.div>

                  {/* Project Title with Gradient Hover */}
                  <motion.h3 
                    className="text-xl font-bold text-gray-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  {/* Description with Better Typography */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Enhanced CTA Button */}
                  <motion.div 
                    className="mt-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-red-500 via-red-600 to-pink-600 hover:from-red-600 hover:via-red-700 hover:to-pink-700 text-white font-semibold py-3 text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 group/btn overflow-hidden relative"
                    >
                      <motion.a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 relative z-10"
                        whileHover={{
                          backgroundImage: "linear-gradient(45deg, #ef4444, #ec4899, #8b5cf6)"
                        }}
                      >
                        {/* Button Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full"
                          whileHover={{
                            translateX: "200%",
                            transition: { duration: 0.6, ease: "easeInOut" }
                          }}
                        />
                        <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                        <span className="group-hover/btn:tracking-wide transition-all duration-200">View Project</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </motion.a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            );
          })}
        </div>

        {/* Enhanced View More Button */}
        {projects.length > 6 && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 via-red-600 to-pink-600 hover:from-red-600 hover:via-red-700 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Button Content */}
              <motion.div className="relative z-10 flex items-center gap-3">
                {showAll ? (
                  <>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-semibold"
                    >
                      Show Less
                    </motion.span>
                    <motion.div
                      animate={{ rotate: showAll ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-lg"
                    >
                      ↑
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.span 
                      className="font-semibold group-hover:tracking-wide transition-all duration-300"
                    >
                      View All Projects ({projects.length})
                    </motion.span>
                    <motion.div
                      animate={{ 
                        x: [0, 5, 0],
                        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="text-lg group-hover:scale-110 transition-transform duration-200"
                    >
                      →
                    </motion.div>
                  </>
                )}
              </motion.div>
              
              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full"
                whileHover={{
                  translateX: "200%",
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default EnhancedProjects;