import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Text, Environment, Float, Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Github, Zap, Brain, Leaf, Shield, Rocket } from 'lucide-react';

// 3D Project Card Component
const ProjectCard3D = ({ 
  position, 
  project, 
  isActive, 
  onClick 
}: { 
  position: [number, number, number], 
  project: any, 
  isActive: boolean, 
  onClick: () => void 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      if (isActive) {
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <Box
          ref={meshRef}
          args={[3, 2, 0.2]}
          onClick={onClick}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'auto';
          }}
        >
          <meshStandardMaterial
            color={isActive ? project.color : project.color + '80'}
            transparent
            opacity={isActive ? 1 : 0.7}
          />
        </Box>
        
        {/* Project Info Overlay */}
        <Html
          position={[0, 0, 0.2]}
          center
          distanceFactor={8}
          occlude
        >
          <div className="bg-black/80 backdrop-blur-lg rounded-lg p-4 text-white min-w-[200px]">
            <h3 className="font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.tech.slice(0, 3).map((tech: string) => (
                <span key={tech} className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
};

// 3D Scene for Projects
const ProjectsScene3D = ({ activeProject, setActiveProject }: { activeProject: number, setActiveProject: (index: number) => void }) => {
  const projects = [
    {
      title: "AI Sustainability Platform",
      description: "Machine learning platform for environmental impact analysis",
      tech: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      color: "#4ecdc4",
      icon: <Brain className="w-6 h-6" />,
      features: ["Real-time Analytics", "Predictive Modeling", "Carbon Footprint Tracking"],
      status: "In Development"
    },
    {
      title: "Nexus Swift Cloud",
      description: "Enterprise cloud infrastructure and deployment platform",
      tech: ["Docker", "Kubernetes", "AWS", "Terraform", "Go"],
      color: "#45b7d1",
      icon: <Shield className="w-6 h-6" />,
      features: ["Auto-scaling", "Multi-region", "99.9% Uptime"],
      status: "Beta"
    },
    {
      title: "GreenTech Dashboard",
      description: "Real-time monitoring for sustainable technology solutions",
      tech: ["React", "D3.js", "WebSocket", "PostgreSQL", "Redis"],
      color: "#96ceb4",
      icon: <Leaf className="w-6 h-6" />,
      features: ["Live Monitoring", "Data Visualization", "Alert System"],
      status: "Production"
    },
    {
      title: "SwiftLaunch",
      description: "Rapid prototyping and MVP development platform",
      tech: ["Next.js", "Prisma", "Vercel", "Stripe", "TypeScript"],
      color: "#feca57",
      icon: <Rocket className="w-6 h-6" />,
      features: ["Template Library", "One-click Deploy", "Team Collaboration"],
      status: "Planning"
    }
  ];

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
      
      {projects.map((project, index) => (
        <ProjectCard3D
          key={index}
          position={[
            (index - 1.5) * 4,
            Math.sin(index) * 2,
            Math.cos(index) * 2
          ]}
          project={project}
          isActive={activeProject === index}
          onClick={() => setActiveProject(index)}
        />
      ))}
      
      <Environment preset="night" />
    </>
  );
};

// Main Projects Section
const Projects3D = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const projects = [
    {
      title: "AI Sustainability Platform",
      description: "Revolutionary machine learning platform that analyzes environmental impact data in real-time, helping organizations make data-driven decisions for a sustainable future.",
      tech: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "Docker"],
      color: "#4ecdc4",
      icon: <Brain className="w-8 h-8" />,
      features: ["Real-time Analytics", "Predictive Modeling", "Carbon Footprint Tracking", "API Integration"],
      status: "In Development",
      progress: 75,
      team: "5 developers",
      timeline: "Q2 2025"
    },
    {
      title: "Nexus Swift Cloud",
      description: "Enterprise-grade cloud infrastructure platform providing scalable, secure, and cost-effective solutions for modern applications with global reach.",
      tech: ["Docker", "Kubernetes", "AWS", "Terraform", "Go", "Prometheus"],
      color: "#45b7d1",
      icon: <Shield className="w-8 h-8" />,
      features: ["Auto-scaling", "Multi-region", "99.9% Uptime", "Security Compliance"],
      status: "Beta",
      progress: 90,
      team: "8 developers",
      timeline: "Q1 2025"
    },
    {
      title: "GreenTech Dashboard",
      description: "Comprehensive real-time monitoring dashboard for sustainable technology solutions, providing insights and analytics for environmental impact reduction.",
      tech: ["React", "D3.js", "WebSocket", "PostgreSQL", "Redis", "Grafana"],
      color: "#96ceb4",
      icon: <Leaf className="w-8 h-8" />,
      features: ["Live Monitoring", "Data Visualization", "Alert System", "Custom Reports"],
      status: "Production",
      progress: 100,
      team: "6 developers",
      timeline: "Live"
    },
    {
      title: "SwiftLaunch",
      description: "Next-generation rapid prototyping and MVP development platform that accelerates time-to-market for innovative ideas and startups.",
      tech: ["Next.js", "Prisma", "Vercel", "Stripe", "TypeScript", "Tailwind"],
      color: "#feca57",
      icon: <Rocket className="w-8 h-8" />,
      features: ["Template Library", "One-click Deploy", "Team Collaboration", "Analytics"],
      status: "Planning",
      progress: 25,
      team: "4 developers",
      timeline: "Q3 2025"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,107,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Nexus Swift Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge solutions that redefine the future of technology. 
            Each project represents our commitment to innovation, sustainability, and excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Projects Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[600px] relative"
          >
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
              <ProjectsScene3D activeProject={activeProject} setActiveProject={setActiveProject} />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-white">
                  <CardContent className="p-8">
                    {/* Project Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: projects[activeProject].color + '20' }}
                      >
                        {projects[activeProject].icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{projects[activeProject].title}</h3>
                        <Badge 
                          variant="outline" 
                          className="text-xs"
                          style={{ borderColor: projects[activeProject].color, color: projects[activeProject].color }}
                        >
                          {projects[activeProject].status}
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {projects[activeProject].description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white">{projects[activeProject].progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${projects[activeProject].progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-2 rounded-full"
                          style={{ backgroundColor: projects[activeProject].color }}
                        />
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {projects[activeProject].features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: projects[activeProject].color }}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject].tech.map((tech, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="bg-white/10 text-white border-white/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-400">Team Size:</span>
                        <span className="text-white ml-2">{projects[activeProject].team}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Timeline:</span>
                        <span className="text-white ml-2">{projects[activeProject].timeline}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                        onClick={() => setIsExpanded(!isExpanded)}
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        {isExpanded ? 'Less Details' : 'More Details'}
                      </Button>
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Project Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  title={`View project ${index + 1}`}
                  aria-label={`View project ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeProject === index 
                      ? 'bg-red-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expanded Project Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Project Deep Dive</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Architecture Overview</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {projects[activeProject].title} is built using a modern, scalable architecture that ensures 
                        high performance, reliability, and maintainability. The system leverages microservices 
                        architecture with containerized deployment for optimal resource utilization.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Innovation Highlights</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-1 text-red-500" />
                          Advanced AI/ML integration for predictive analytics
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-1 text-red-500" />
                          Real-time data processing and visualization
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-1 text-red-500" />
                          Scalable cloud infrastructure with auto-scaling
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-1 text-red-500" />
                          Security-first approach with enterprise compliance
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects3D;
