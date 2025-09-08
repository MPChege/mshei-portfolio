import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-accent-blue to-accent-purple",
      skills: [
        { name: "React", level: 95 },
        { name: "React Native", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Backend",
      color: "from-accent-green to-accent-blue",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 80 },
      ]
    },
    {
      title: "Database & Tools",
      color: "from-accent-pink to-accent-purple",
      skills: [
        { name: "Supabase", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Git", level: 95 },
      ]
    },
    {
      title: "Specializations",
      color: "from-primary to-accent-pink",
      skills: [
        { name: "AI Integration", level: 85 },
        { name: "Sustainability Tech", level: 80 },
        { name: "Full-stack Architecture", level: 90 },
        { name: "Mobile Development", level: 85 },
      ]
    },
    {
      title: "Design & CMS",
      color: "from-accent-purple to-accent-pink",
      skills: [
        { name: "Figma", level: 88 }, // Emphasized per user preference
        { name: "WordPress", level: 85 }, // Emphasized per user preference
        { name: "UI/UX Design", level: 82 },
        { name: "Responsive Design", level: 90 },
      ]
    },
  ];

  return (
    <motion.div 
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Modern Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-red-50/30 via-transparent to-blue-50/30"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Proficient in modern technologies and frameworks, with a focus on creating scalable, innovative solutions that drive meaningful impact.
          </p>
        </motion.div>

        {/* Skills Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const direction = categoryIndex % 2 === 0 ? -50 : 50;
            return (
            <motion.div
              key={category.title}
              className="group h-full"
              initial={{ opacity: 0, x: direction, y: 30 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: direction, y: 30 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.15, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="h-full p-6 sm:p-8 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden relative hover:scale-105 hover:-translate-y-2">
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="mb-6 sm:mb-8">
                    <motion.div 
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${category.color} mb-4 sm:mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-xl shadow-inner"></div>
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4 sm:space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skill.name} 
                        className="group/skill"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (categoryIndex * 0.15) + (skillIndex * 0.1)
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2 sm:mb-3">
                          <span className="font-semibold text-gray-700 group-hover/skill:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                            {skill.name}
                          </span>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${category.color} text-white border-0 shadow-sm`}
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden shadow-inner">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-sm relative overflow-hidden`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.2, 
                              delay: (categoryIndex * 0.15) + (skillIndex * 0.1) + 0.3,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Showcase */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
            {[
              "React", "Node.js", "Python", "TypeScript", "Supabase", "Tailwind", 
              "GraphQL", "PostgreSQL", "Docker", "AWS", "Firebase", "Vercel",
              "Figma", "WordPress" // Emphasized per user preference
            ].map((tech, index) => (
              <motion.div 
                key={tech}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + index * 0.05, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold bg-white/80 backdrop-blur-lg border-2 border-gray-200 hover:border-red-300 hover:bg-gradient-to-r hover:from-red-50 hover:to-purple-50 transition-all duration-300 rounded-full shadow-md hover:shadow-lg cursor-pointer hover:scale-110 hover:-translate-y-1"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;