import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text, Float, OrbitControls, Environment } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// 3D Skill Sphere Component
const SkillSphere = ({ 
  position, 
  skill, 
  isActive, 
  onClick 
}: { 
  position: [number, number, number], 
  skill: any, 
  isActive: boolean, 
  onClick: () => void 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      if (isActive) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <Sphere
          ref={meshRef}
          args={[1, 32, 32]}
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
            color={isActive ? skill.color : skill.color + '80'}
            transparent
            opacity={isActive ? 1 : 0.7}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        
        {/* Skill Name */}
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
};

// 3D Skills Scene
const SkillsScene3D = ({ activeSkill, setActiveSkill }: { activeSkill: number, setActiveSkill: (index: number) => void }) => {
  const skills = [
    { name: "React", color: "#61dafb", level: 95 },
    { name: "Node.js", color: "#68a063", level: 90 },
    { name: "Python", color: "#3776ab", level: 85 },
    { name: "AI/ML", color: "#ff6b6b", level: 80 },
    { name: "TypeScript", color: "#3178c6", level: 88 },
    { name: "Docker", color: "#2496ed", level: 75 }
  ];

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
      
      {skills.map((skill, index) => (
        <SkillSphere
          key={index}
          position={[
            Math.cos((index / skills.length) * Math.PI * 2) * 3,
            Math.sin((index / skills.length) * Math.PI * 2) * 2,
            Math.sin((index / skills.length) * Math.PI * 2) * 1
          ]}
          skill={skill}
          isActive={activeSkill === index}
          onClick={() => setActiveSkill(index)}
        />
      ))}
      
      <Environment preset="night" />
    </>
  );
};

// Main Skills Section
const Skills3D = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    {
      name: "React & Frontend",
      description: "Advanced React development with modern hooks, context, and performance optimization techniques.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      level: 95,
      color: "#61dafb",
      projects: ["Nexus Swift Dashboard", "AI Platform UI", "GreenTech Interface"],
      experience: "4+ years"
    },
    {
      name: "Node.js & Backend",
      description: "Full-stack development with Node.js, building scalable APIs and microservices architecture.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "GraphQL"],
      level: 90,
      color: "#68a063",
      projects: ["Nexus Swift API", "Real-time Analytics", "Cloud Infrastructure"],
      experience: "3+ years"
    },
    {
      name: "Python & AI/ML",
      description: "Machine learning and artificial intelligence development for sustainability and automation solutions.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn"],
      level: 85,
      color: "#ff6b6b",
      projects: ["AI Sustainability Platform", "Predictive Analytics", "ML Models"],
      experience: "2+ years"
    },
    {
      name: "Cloud & DevOps",
      description: "Cloud infrastructure management and DevOps practices for scalable, reliable applications.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
      level: 80,
      color: "#feca57",
      projects: ["Nexus Swift Cloud", "Auto-scaling Systems", "Infrastructure as Code"],
      experience: "2+ years"
    },
    {
      name: "TypeScript & Modern JS",
      description: "Type-safe JavaScript development with modern ES6+ features and advanced TypeScript patterns.",
      technologies: ["TypeScript", "ES6+", "Webpack", "Vite", "Jest", "Testing"],
      level: 88,
      color: "#3178c6",
      projects: ["Type-safe APIs", "Modern Frontend", "Testing Suites"],
      experience: "3+ years"
    },
    {
      name: "Database & Storage",
      description: "Database design and optimization for high-performance applications and data analytics.",
      technologies: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Data Modeling"],
      level: 75,
      color: "#a8e6cf",
      projects: ["Data Analytics", "Real-time Systems", "Database Optimization"],
      experience: "3+ years"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,107,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(97,218,251,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build innovative solutions that drive the future of technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[600px] relative"
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
              <SkillsScene3D activeSkill={activeSkill} setActiveSkill={setActiveSkill} />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </motion.div>

          {/* Skill Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-white">
                  <CardContent className="p-8">
                    {/* Skill Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-white"
                        style={{ backgroundColor: skills[activeSkill].color }}
                      >
                        {skills[activeSkill].name[0]}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{skills[activeSkill].name}</h3>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className="text-xs"
                            style={{ borderColor: skills[activeSkill].color, color: skills[activeSkill].color }}
                          >
                            {skills[activeSkill].experience}
                          </Badge>
                          <span className="text-sm text-gray-400">
                            {skills[activeSkill].level}% Proficiency
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {skills[activeSkill].description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Proficiency Level</span>
                        <span className="text-white">{skills[activeSkill].level}%</span>
                      </div>
                      <Progress 
                        value={skills[activeSkill].level} 
                        className="h-2 bg-gray-700"
                        style={{
                          background: `linear-gradient(to right, ${skills[activeSkill].color}, ${skills[activeSkill].color}80)`
                        }}
                      />
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills[activeSkill].technologies.map((tech, index) => (
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

                    {/* Projects */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Recent Projects</h4>
                      <div className="space-y-2">
                        {skills[activeSkill].projects.map((project, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: skills[activeSkill].color }}
                            />
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Skill Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSkill(index)}
                  title={`View skill ${index + 1}`}
                  aria-label={`View skill ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSkill === index 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Additional Expertise
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Git & Version Control", level: 90 },
              { name: "Testing & QA", level: 85 },
              { name: "Performance Optimization", level: 80 },
              { name: "Security Best Practices", level: 75 },
              { name: "Agile & Scrum", level: 88 },
              { name: "Code Review", level: 92 },
              { name: "Documentation", level: 85 },
              { name: "Mentoring", level: 80 }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <h4 className="font-semibold text-white mb-3">{skill.name}</h4>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills3D;
