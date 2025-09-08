import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background/50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-blue/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-pink/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image with Nexus Swift Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full executive-shadow gradient-card border-4 border-white flex items-center justify-center animate-scale-in">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white text-4xl font-bold">
                MC
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="heading-xl mb-6 bg-gradient-to-r from-primary via-accent-purple to-accent-blue bg-clip-text text-transparent">
              Mark Chege
            </h1>
            <div className="heading-md mb-4 text-muted-foreground">
              Software Engineer | Fullstack Developer | AI & Sustainability Tech Enthusiast
            </div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-lg text-muted-foreground">Co-Founder of</span>
              <span className="text-lg font-bold text-red-500">NEXUS SWIFT</span>
            </div>
          </div>

          {/* Bio */}
          <div className="animate-fade-in mb-12 max-w-2xl mx-auto" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Building the future through <span className="text-primary font-semibold">Nexus Swift</span> - an innovative company 
              where cutting-edge technology meets real-world impact. Co-founding this venture with a vision to create 
              AI-driven solutions and sustainability tech that transforms industries.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="group">
              Explore Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail className="mr-2" />
              Get In Touch
            </Button>
            <Button variant="ghost" size="lg" className="group">
              <Download className="mr-2" />
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in flex justify-center gap-6" style={{ animationDelay: '0.8s' }}>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent-blue hover:text-white">
              <Linkedin />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-foreground hover:text-background">
              <Github />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
              <Mail />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;