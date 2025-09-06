import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Leaf, Users, GraduationCap, Building2, Plane, Car, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tally Check (T-Check)",
      description: "Revolutionary student attendance system with AI-powered facial recognition, real-time analytics, and mobile-first design. Deployed across 25+ educational institutions.",
      icon: <GraduationCap className="w-8 h-8" />,
      tech: ["React Native", "Node.js", "Supabase", "AI/ML", "TypeScript"],
      color: "from-accent-blue to-accent-purple",
      category: "Education Tech",
      status: "Production",
      users: "15K+ students"
    },
    {
      title: "Polestar AutoCare",
      description: "Enterprise-grade auto garage management with IoT integration, predictive maintenance algorithms, and real-time customer communication system.",
      icon: <Car className="w-8 h-8" />,
      tech: ["React", "Node.js", "PostgreSQL", "IoT", "Express"],
      color: "from-accent-green to-accent-blue",
      category: "Enterprise Solutions",
      status: "Live",
      users: "500+ garages"
    },
    {
      title: "Magnolia Travels",
      description: "AI-optimized travel booking platform with dynamic pricing, smart recommendations, and integrated payment processing. Full safari and hotel management.",
      icon: <Plane className="w-8 h-8" />,
      tech: ["React", "Supabase", "Stripe", "AI/ML", "Tailwind CSS"],
      color: "from-accent-pink to-accent-purple",
      category: "Travel Tech",
      status: "Production",
      users: "2K+ travelers"
    },
    {
      title: "CarbonCorp",
      description: "Blockchain-enabled ESG monitoring platform with automated carbon credit issuance, satellite data integration, and enterprise sustainability reporting.",
      icon: <Leaf className="w-8 h-8" />,
      tech: ["React", "Python", "Blockchain", "AI/ML", "PostgreSQL"],
      color: "from-accent-green to-primary",
      category: "Sustainability Tech",
      status: "Enterprise",
      users: "50+ corporations"
    },
    {
      title: "Faith Connect",
      description: "Christian business networking super-app with community features, service marketplace, and faith-based matching algorithms for meaningful connections.",
      icon: <Users className="w-8 h-8" />,
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "Redis"],
      color: "from-accent-purple to-accent-blue",
      category: "Social Platform",
      status: "Beta",
      users: "5K+ members"
    },
    {
      title: "Jirani Community",
      description: "Hyperlocal community platform with geofencing, local business discovery, neighborhood safety features, and real-time event coordination.",
      icon: <Building2 className="w-8 h-8" />,
      tech: ["React", "Supabase", "TypeScript", "PWA", "Geolocation"],
      color: "from-accent-blue to-accent-green",
      category: "Community Tech",
      status: "Live",
      users: "8K+ residents"
    },
    {
      title: "EduManager Pro",
      description: "Complete school administration ecosystem with AI-powered analytics, automated grading, parent communication, and performance tracking.",
      icon: <GraduationCap className="w-8 h-8" />,
      tech: ["React", "Node.js", "PostgreSQL", "AI/ML", "Redis"],
      color: "from-primary to-accent-pink",
      category: "Education Management",
      status: "Production",
      users: "100+ schools"
    },
    {
      title: "EcoTrack Analytics",
      description: "Environmental data analytics platform with satellite imagery processing, carbon footprint modeling, and predictive climate impact assessment.",
      icon: <Leaf className="w-8 h-8" />,
      tech: ["React", "Python", "TensorFlow", "D3.js", "AWS"],
      color: "from-accent-green to-accent-purple",
      category: "Climate Tech",
      status: "Enterprise",
      users: "25+ organizations"
    },
    {
      title: "MediConnect Pro",
      description: "Telemedicine platform with AI symptom checker, blockchain health records, video consultations, and prescription management system.",
      icon: <Building2 className="w-8 h-8" />,
      tech: ["React", "WebRTC", "Blockchain", "AI/ML", "MongoDB"],
      color: "from-accent-blue to-primary",
      category: "HealthTech",
      status: "FDA Review",
      users: "1K+ patients"
    },
    {
      title: "LogiFlow AI",
      description: "Smart logistics optimization platform with machine learning route planning, demand forecasting, and real-time supply chain analytics.",
      icon: <Car className="w-8 h-8" />,
      tech: ["React", "Python", "TensorFlow", "Node.js", "PostgreSQL"],
      color: "from-accent-purple to-accent-green",
      category: "Logistics AI",
      status: "Production",
      users: "50+ companies"
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-purple text-white flex items-center justify-center font-bold text-lg">
              NS
            </div>
            <div>
              <h2 className="heading-lg text-foreground">Nexus Swift Projects</h2>
              <p className="text-sm text-primary font-semibold">Innovation Hub Portfolio</p>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming industries through technology. Each project represents a milestone in our journey 
            from individual solutions to enterprise-grade platforms.
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
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div className="text-xs bg-gradient-to-r from-primary to-accent-blue text-white px-2 py-1 rounded-full font-semibold">
                      NEXUS SWIFT
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                      {project.category}
                    </Badge>
                    <div className="text-xs text-muted-foreground">{project.users}</div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      project.status === 'Production' ? 'bg-green-400' :
                      project.status === 'Live' ? 'bg-blue-400' :
                      project.status === 'Beta' ? 'bg-yellow-400' :
                      'bg-orange-400'
                    }`}></div>
                    <span className="text-xs text-muted-foreground">{project.status}</span>
                  </div>
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
                    Live Demo
                  </Button>
                </div>
              </CardContent>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </Card>
          ))}
        </div>

        {/* Company Evolution */}
        <div className="text-center mt-16">
          <div className="p-8 rounded-2xl gradient-accent border border-card-border mb-8">
            <h3 className="heading-sm mb-4">From Projects to Platform</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nexus Swift is evolving from a project collection into a full technology company. 
              Each solution we build strengthens our ecosystem and serves as a foundation for sustainable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="executive" size="lg" className="group">
                View All Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                GitHub Organization
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;