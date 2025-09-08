import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// 3D Animated Sphere Component
const AnimatedSphere = ({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
};

// Floating Code Particles
const CodeParticle = ({ position, text }: { position: [number, number, number], text: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Center position={position}>
        <Text3D
          ref={meshRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.3}
          height={0.02}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial color="#ff6b6b" />
        </Text3D>
      </Center>
    </Float>
  );
};

// Main 3D Scene Component
const Scene3D = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20
      ] as [number, number, number],
      text: ['<div>', '</div>', '{ }', '()', '=>', 'AI', 'ML', 'React', 'Node', 'Swift'][Math.floor(Math.random() * 10)]
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
      
      {/* Main Central Sphere */}
      <AnimatedSphere position={[0, 0, 0]} color="#ff6b6b" speed={0.5} />
      
      {/* Orbiting Spheres */}
      <AnimatedSphere position={[3, 2, 0]} color="#4ecdc4" speed={1} />
      <AnimatedSphere position={[-3, -2, 0]} color="#45b7d1" speed={1.2} />
      <AnimatedSphere position={[0, 3, -2]} color="#96ceb4" speed={0.8} />
      
      {/* Code Particles */}
      {particles.map((particle, index) => (
        <CodeParticle
          key={index}
          position={particle.position}
          text={particle.text}
        />
      ))}
      
      <Environment preset="night" />
    </>
  );
};

// Hero Section with 3D Background
const Hero3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene3D />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile with 3D Effect */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-500">
                MPC
              </div>
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-red-500/50 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-white/30 animate-spin" style={{ animationDuration: '3s' }}></div>
            </div>
          </motion.div>

          {/* Name with 3D Text Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl"
            style={{
              textShadow: '0 0 30px rgba(255, 107, 107, 0.5)',
              transform: 'perspective(1000px) rotateX(10deg)'
            }}
          >
            Mark Paul Chage
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl mb-6 text-white/90 font-semibold"
          >
            Software Engineer | Fullstack Developer | AI & Sustainability Tech Enthusiast
          </motion.div>

          {/* Nexus Swift Branding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="text-xl text-white/80">Co-Founder of</span>
            <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">NEXUS SWIFT</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Building the future through <span className="text-red-400 font-semibold">Nexus Swift</span> - an innovative company 
            where cutting-edge technology meets real-world impact. Co-founding this venture with a vision to create 
            AI-driven solutions and sustainability tech that transforms industries.
          </motion.p>

          {/* 3D CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center gap-3"
            >
              Explore Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
            >
              Get In Touch
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 hover:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
            >
              Resume
            </motion.button>
          </motion.div>

          {/* Social Links with 3D Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center gap-6"
          >
            {['LinkedIn', 'GitHub', 'Email'].map((social, index) => (
              <motion.div
                key={social}
                whileHover={{ scale: 1.2, rotateY: 180 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                {social[0]}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
