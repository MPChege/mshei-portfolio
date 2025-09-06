import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork, Coffee, TrendingUp, Award, Zap } from "lucide-react";

const OpenSourceSection = () => {
  const contributions = [
    {
      name: "nexus-ui-kit",
      description: "Comprehensive React component library with 50+ modern components, built for Nexus Swift projects and open-sourced for the community.",
      stars: 247,
      forks: 34,
      language: "TypeScript",
      status: "Active",
      color: "from-accent-blue to-accent-purple"
    },
    {
      name: "sustainability-calculator",
      description: "Open-source carbon footprint calculation engine with ML models for accurate environmental impact assessment.",
      stars: 189,
      forks: 28,
      language: "Python",
      status: "Maintained",
      color: "from-accent-green to-accent-blue"
    },
    {
      name: "react-native-attendance",
      description: "Expo-compatible attendance tracking solution with biometric integration and offline support.",
      stars: 156,
      forks: 22,
      language: "JavaScript",
      status: "Active",
      color: "from-accent-pink to-accent-purple"
    },
    {
      name: "ai-travel-optimizer",
      description: "Machine learning algorithms for travel route optimization and cost prediction, extracted from Magnolia Travels.",
      stars: 134,
      forks: 19,
      language: "Python",
      status: "Beta",
      color: "from-primary to-accent-pink"
    }
  ];

  const achievements = [
    { icon: <Star className="w-5 h-5" />, label: "GitHub Stars", value: "1.2K+", color: "text-yellow-500" },
    { icon: <GitFork className="w-5 h-5" />, label: "Forks", value: "180+", color: "text-blue-500" },
    { icon: <Coffee className="w-5 h-5" />, label: "Contributors", value: "45+", color: "text-green-500" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Weekly Downloads", value: "2.5K+", color: "text-purple-500" }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-accent opacity-15"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-foreground">Open Source Contributions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Giving back to the developer community with tools and libraries that power modern applications. 
            Building in public, sharing knowledge, and fostering innovation.
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.label}
              className="p-4 gradient-card border-card-border hover:border-primary/30 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className={`${achievement.color} mb-2 flex justify-center`}>
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-foreground">{achievement.value}</div>
                <div className="text-xs text-muted-foreground">{achievement.label}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Open Source Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contributions.map((project, index) => (
            <Card 
              key={project.name}
              className="group gradient-card border-card-border interactive-card hover:border-primary/30 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Github className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                      {project.status}
                    </Badge>
                    <div className="text-xs text-muted-foreground">{project.language}</div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors font-mono">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <GitFork className="w-4 h-4 text-blue-500" />
                      {project.forks}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Documentation
                  </Button>
                </div>
              </CardContent>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="p-8 rounded-2xl gradient-accent border border-card-border">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="heading-sm">Join the Community</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in contributing to Nexus Swift's open source ecosystem? 
              We welcome developers, designers, and innovators to help shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                <Github className="mr-2" />
                View GitHub Profile
              </Button>
              <Button variant="outline" size="lg">
                Contribution Guidelines
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;