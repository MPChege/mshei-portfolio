import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Leaf, Users, GraduationCap, Building2, Plane, Car, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tally Check (T-Check)",
      description: "Advanced student class attendance system with mobile sign-in, real-time tracking, and automated reporting for educational institutions.",
      icon: <GraduationCap className="w-8 h-8" />,
      tech: ["React Native", "Node.js", "Supabase", "TypeScript"],
      color: "from-accent-blue to-accent-purple",
      category: "Education Tech"
    },
    {
      title: "Polestar AutoCare",
      description: "Comprehensive auto garage management system for truck servicing, inventory tracking, and automated customer notifications.",
      icon: <Car className="w-8 h-8" />,
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      color: "from-accent-green to-accent-blue",
      category: "Business Solutions"
    },
    {
      title: "Magnolia Travels",
      description: "Full-featured travel and tour booking platform with airport pickups, hotel reservations, and safari trip management.",
      icon: <Plane className="w-8 h-8" />,
      tech: ["React", "Supabase", "Stripe", "Tailwind CSS"],
      color: "from-accent-pink to-accent-purple",
      category: "Travel & Tourism"
    },
    {
      title: "CarbonCorp",
      description: "ESG monitoring platform for carbon credit issuance, sustainability tracking, and environmental impact reporting.",
      icon: <Leaf className="w-8 h-8" />,
      tech: ["React", "Python", "AI/ML", "PostgreSQL"],
      color: "from-accent-green to-primary",
      category: "Sustainability Tech"
    },
    {
      title: "Faith Connect",
      description: "Christian business networking platform connecting faith-based services and fostering community business relationships.",
      icon: <Users className="w-8 h-8" />,
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      color: "from-accent-purple to-accent-blue",
      category: "Social Networking"
    },
    {
      title: "Jirani Community",
      description: "Neighborhood-based community platform for local services, events, and social connections among residents.",
      icon: <Building2 className="w-8 h-8" />,
      tech: ["React", "Supabase", "TypeScript", "PWA"],
      color: "from-accent-blue to-accent-green",
      category: "Community Platform"
    },
    {
      title: "School Management Pro",
      description: "Complete school administration system managing students, classes, grades, attendance, and parent communication.",
      icon: <GraduationCap className="w-8 h-8" />,
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      color: "from-primary to-accent-pink",
      category: "Education Management"
    },
    {
      title: "EcoTrack Analytics",
      description: "Environmental data analytics platform for carbon footprint tracking and sustainability reporting for enterprises.",
      icon: <Leaf className="w-8 h-8" />,
      tech: ["React", "Python", "D3.js", "TensorFlow"],
      color: "from-accent-green to-accent-purple",
      category: "Analytics & AI"
    },
    {
      title: "MediConnect",
      description: "Telemedicine platform connecting patients with healthcare providers, featuring appointment scheduling and video consultations.",
      icon: <Building2 className="w-8 h-8" />,
      tech: ["React", "WebRTC", "Node.js", "MongoDB"],
      color: "from-accent-blue to-primary",
      category: "Healthcare Tech"
    },
    {
      title: "Smart Logistics Hub",
      description: "AI-powered logistics management system for route optimization, delivery tracking, and supply chain analytics.",
      icon: <Car className="w-8 h-8" />,
      tech: ["React", "AI/ML", "Node.js", "PostgreSQL"],
      color: "from-accent-purple to-accent-green",
      category: "Logistics & AI"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent-blue to-accent-purple"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions across various industries, demonstrating expertise in 
            full-stack development, AI integration, and sustainability technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group gradient-card border-card-border interactive-card hover:border-primary/30 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </Card>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center mt-16">
          <Button variant="executive" size="lg" className="group">
            View All Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-muted-foreground mt-4">
            Explore more projects and case studies on GitHub
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;