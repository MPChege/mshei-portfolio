import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
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
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-accent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-foreground">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks, with a focus on creating scalable, innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="p-6 gradient-card border-card-border interactive-card animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="heading-sm text-card-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-card-foreground">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs">{skill.level}%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div className="mt-16 text-center">
          <h3 className="heading-sm mb-8 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Node.js", "Python", "TypeScript", "Supabase", "Tailwind", 
              "GraphQL", "PostgreSQL", "Docker", "AWS", "Firebase", "Vercel"
            ].map((tech, index) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="px-4 py-2 text-sm font-medium skill-hover animate-fade-in border-card-border hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;