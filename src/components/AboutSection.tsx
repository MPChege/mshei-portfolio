import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Code2, GitBranch, Star, Users, Coffee, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { label: "Projects Built", value: "50+", icon: <Code2 className="w-5 h-5" /> },
    { label: "GitHub Stars", value: "1.2K+", icon: <Star className="w-5 h-5" /> },
    { label: "Commits This Year", value: "2.4K+", icon: <GitBranch className="w-5 h-5" /> },
    { label: "Lines of Code", value: "100K+", icon: <Terminal className="w-5 h-5" /> },
  ];

  const codeSnippet = `// Nexus Swift - Innovation in Every Line
const buildTheFuture = async () => {
  const technologies = ['React', 'Node.js', 'AI/ML', 'Sustainability'];
  const impact = await technologies.map(tech => 
    createSolution(tech, { 
      focus: 'real-world-problems',
      approach: 'user-centric' 
    })
  );
  return impact.reduce((acc, solution) => acc + solution.value, 0);
};

// Current mission: Building Nexus Swift into a full company
console.log('🚀 Transforming ideas into reality...');`;

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-accent opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 text-foreground">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming concepts into code, and code into companies. Welcome to my journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - About content */}
            <div className="space-y-8">
              <div>
                <h3 className="heading-sm mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent-purple text-white flex items-center justify-center text-sm font-bold">
                    NS
                  </div>
                  The Nexus Swift Story
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  What started as a personal mission to solve real-world problems through technology has evolved into 
                  <span className="text-primary font-semibold"> Nexus Swift</span> - my innovation hub that's growing into a full company.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every project under the Nexus Swift umbrella is designed with a core philosophy: 
                  <span className="text-accent-blue font-semibold"> technology should create meaningful impact</span>. 
                  From AI-powered sustainability solutions to community-building platforms, we're not just writing code - we're writing the future.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a full-stack developer specializing in AI integration and sustainability tech, I'm passionate about 
                  building scalable solutions that matter. The journey from individual projects to a growing company 
                  represents my commitment to turning innovative ideas into lasting impact.
                </p>
              </div>

              {/* Tech Philosophy */}
              <div className="p-6 rounded-xl gradient-card border border-card-border">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Development Philosophy
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    Clean, maintainable code that scales with business growth
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2"></div>
                    User-first design thinking in every technical decision
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2"></div>
                    AI and sustainability as core pillars of innovation
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2"></div>
                    Continuous learning and adaptation to emerging technologies
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side - Code snippet and stats */}
            <div className="space-y-8">
              {/* Code Editor Mock */}
              <div className="rounded-xl overflow-hidden gradient-card border border-card-border executive-shadow">
                <div className="bg-gradient-to-r from-muted to-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-sm text-muted-foreground ml-4">nexus-swift.js</span>
                </div>
                <div className="p-6 bg-gradient-to-br from-background to-muted/20">
                  <pre className="text-sm text-muted-foreground leading-relaxed font-mono">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Developer Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card 
                    key={stat.label}
                    className="p-4 gradient-card border-card-border hover:border-primary/30 transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{stat.icon}</div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Current Focus */}
              <Card className="p-6 gradient-card border-card-border">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-primary" />
                  Currently Working On
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Scaling Nexus Swift operations</span>
                    <Badge variant="outline" className="text-xs">In Progress</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">AI-powered sustainability platform</span>
                    <Badge variant="outline" className="text-xs">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Open source contributions</span>
                    <Badge variant="outline" className="text-xs">Ongoing</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;