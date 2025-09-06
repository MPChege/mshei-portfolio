import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Award, Code, Lightbulb } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Ltd",
      period: "2023 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading development of AI-powered sustainability solutions and carbon tracking platforms. Architecting scalable systems for ESG monitoring and environmental impact analysis.",
      achievements: [
        "Built CarbonCorp platform serving 50+ enterprises",
        "Reduced carbon calculation processing time by 60%",
        "Led team of 4 developers in agile environment"
      ],
      tech: ["React", "Node.js", "Python", "AI/ML", "PostgreSQL"],
      color: "from-accent-green to-accent-blue"
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Co",
      period: "2022 - 2023",
      location: "Hybrid",
      type: "Full-time",
      description: "Developed mobile-first applications for education and business sectors. Specialized in React Native development and real-time data synchronization.",
      achievements: [
        "Launched T-Check attendance system for 20+ schools",
        "Improved mobile app performance by 40%",
        "Implemented real-time features using WebSocket"
      ],
      tech: ["React Native", "Supabase", "TypeScript", "Node.js"],
      color: "from-accent-blue to-accent-purple"
    },
    {
      title: "Software Developer",
      company: "StartupTech",
      period: "2021 - 2022",
      location: "On-site",
      type: "Full-time",
      description: "Developed web applications for various clients including travel booking systems and business management platforms. Focused on user experience and performance optimization.",
      achievements: [
        "Delivered 10+ client projects on time",
        "Improved website loading speeds by 50%",
        "Mentored 2 junior developers"
      ],
      tech: ["React", "JavaScript", "Express.js", "MongoDB"],
      color: "from-accent-pink to-accent-purple"
    },
    {
      title: "Junior Developer",
      company: "Code Academy",
      period: "2020 - 2021",
      location: "Remote",
      type: "Part-time",
      description: "Started career building educational platforms and learning management systems. Gained experience in modern web technologies and agile development practices.",
      achievements: [
        "Contributed to 5+ open source projects",
        "Completed advanced React and Node.js certifications",
        "Built personal portfolio attracting first clients"
      ],
      tech: ["HTML", "CSS", "JavaScript", "React", "Git"],
      color: "from-primary to-accent-pink"
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", year: "2023" },
    { name: "React Advanced Patterns", year: "2023" },
    { name: "Node.js Professional", year: "2022" },
    { name: "MongoDB Certified", year: "2022" }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-blue via-accent-purple to-accent-green"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-foreground">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous growth in software engineering, sustainability technology, 
            and innovative solution development across diverse industries.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-blue to-accent-purple"></div>

            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className="relative pl-20 pb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} border-4 border-background shadow-lg`}></div>

                <Card className="gradient-card border-card-border interactive-card">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {exp.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-2xl mx-auto">
          <h3 className="heading-sm text-center mb-8 flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name}
                className="p-4 gradient-card border-card-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{cert.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {cert.year}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;