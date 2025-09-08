import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Code2, GitBranch, Star, Users, Coffee, Zap, Building2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const stats = [
    { label: "Projects Built", value: "15+", icon: <Code2 className="w-5 h-5" /> },
    { label: "Years Experience", value: "4+", icon: <Star className="w-5 h-5" /> },
    { label: "Commits This Year", value: "500+", icon: <GitBranch className="w-5 h-5" /> },
    { label: "Lines of Code", value: "25K+", icon: <Terminal className="w-5 h-5" /> },
  ];

  const codeSnippet = `// Mark Chege - Future Nexus Swift Co-Founder
const buildTheFuture = async () => {
  const technologies = ['React', 'Node.js', 'AI/ML', 'Sustainability'];
  const vision = await technologies.map(tech => 
    prepareSolution(tech, { 
      focus: 'real-world-problems',
      approach: 'user-centric',
      company: 'Nexus Swift (Coming Soon)'
    })
  );
  return vision.reduce((acc, solution) => acc + solution.potential, 0);
};

// Current mission: Preparing to launch Nexus Swift
console.log('🚀 Building the future of innovation...');`;

  return (
    <motion.div 
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-red-50/30 via-transparent to-blue-50/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transforming concepts into code, and code into companies. Welcome to my journey as a software engineer and co-founder.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left side - About content */}
            <motion.div 
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    <span className="text-red-500 font-bold text-base sm:text-lg lg:text-xl">NEXUS SWIFT</span>
                  </div>
                </h3>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">Nexus Swift — Coming Soon</h4>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  Nexus Swift is preparing to launch soon! What began as a vision to solve real-world problems through technology 
                  is evolving into an innovative company dedicated to transforming ideas into scalable business solutions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  Our mission centers on a core philosophy: 
                  <span className="text-red-600 font-semibold"> technology should create meaningful impact</span>. 
                  From AI-powered sustainability solutions to enterprise-grade platforms, Nexus Swift is positioned to deliver 
                  innovation that shapes the future.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  This marks a new chapter — moving from individual projects to a company committed to 
                  building sustainable, impactful, and scalable solutions for industries worldwide.
                </p>
              </div>

              {/* Tech Philosophy */}
              <div className="p-4 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-200/50 shadow-lg">
                <h4 className="font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  Development Philosophy
                </h4>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 sm:mt-2"></div>
                    Clean, maintainable code that scales with business growth
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2"></div>
                    User-first design thinking in every technical decision
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 sm:mt-2"></div>
                    AI and sustainability as core pillars of innovation
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 sm:mt-2"></div>
                    Continuous learning and adaptation to emerging technologies
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right side - Code snippet and stats */}
            <motion.div 
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Code Editor Mock */}
              <div className="rounded-2xl overflow-hidden bg-white/80 backdrop-blur-lg border border-gray-200/50 shadow-xl">
                <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 ml-2 sm:ml-4">mark-chege.js</span>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white">
                  <pre className="text-xs sm:text-sm text-gray-600 leading-relaxed font-mono overflow-x-auto">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Developer Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <Card 
                    key={stat.label}
                    className="p-3 sm:p-4 bg-white/80 backdrop-blur-lg border border-gray-200/50 hover:border-red-300 transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl hover:scale-105"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="text-red-500">{stat.icon}</div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-800">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Current Focus */}
              <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-lg border border-gray-200/50 shadow-lg rounded-2xl">
                <h4 className="font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  Currently Working On
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-600">Preparing to co-found Nexus Swift</span>
                    <Badge variant="outline" className="text-xs border-red-200 text-red-600 bg-red-50">Coming Soon</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-600">Nexus Swift AI sustainability platform</span>
                    <Badge variant="outline" className="text-xs border-blue-200 text-blue-600 bg-blue-50">Vision Phase</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-600">Enterprise software solutions</span>
                    <Badge variant="outline" className="text-xs border-purple-200 text-purple-600 bg-purple-50">Planning</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;