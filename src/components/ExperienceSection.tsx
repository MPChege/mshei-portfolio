import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Award, Code, Lightbulb } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer & Co-Founder",
      company: "Nexus Swift",
      period: "2025 – Present",
      location: "Nairobi, Kenya",
      type: "Co-Founder",
      description: "Preparing to launch an innovation-driven company focused on AI and sustainability tech. Leading early-stage product strategy, architecture design, and scalable solution development.",
      achievements: [
        "Building solutions that bridge sustainability with real-world enterprise challenges",
        "Leading product strategy and technical architecture design",
        "Developing AI-powered sustainability solutions for enterprises"
      ],
      tech: ["React", "Node.js", "Python", "AI/ML", "Sustainability Tech"],
      color: "from-accent-green to-accent-blue"
    },
    {
      title: "Senior Full-Stack Developer",
      company: "CarbonCorp (Contract Project)",
      period: "2024 – 2025",
      location: "Remote",
      type: "Contract",
      description: "Developed CarbonCorp ESG platform, serving enterprises in carbon tracking and ESG monitoring. Architected scalable systems for sustainability reporting.",
      achievements: [
        "Improved carbon calculation efficiency by 60%",
        "Built scalable ESG monitoring platform for enterprises",
        "Architected systems handling complex sustainability data"
      ],
      tech: ["React", "Node.js", "Python", "AI/ML", "PostgreSQL"],
      color: "from-accent-blue to-accent-purple"
    },
    {
      title: "Full-Stack Developer",
      company: "T-Check Attendance System",
      period: "2025",
      location: "Remote",
      type: "Project",
      description: "Built and deployed T-Check, a real-time mobile-first attendance system for schools and universities. Designed APIs and real-time features for seamless student tracking.",
      achievements: [
        "Deployed across 25+ educational institutions",
        "Built real-time tracking with 99.9% uptime",
        "Implemented mobile-first responsive design"
      ],
      tech: ["React Native", "Supabase", "TypeScript", "Node.js"],
      color: "from-accent-pink to-accent-purple"
    },
    {
      title: "Software Developer",
      company: "Gema Loyalty Program",
      period: "2022 – 2023",
      location: "Hybrid",
      type: "Full-time",
      description: "Developed a loyalty and rewards platform for retail and SMEs. Focused on user engagement, analytics, and scalable backend systems.",
      achievements: [
        "Delivered customer-facing apps and dashboards with optimized performance",
        "Built analytics system processing 100K+ daily transactions",
        "Improved user engagement by 45% through gamification features"
      ],
      tech: ["React", "Node.js", "MongoDB", "Supabase"],
      color: "from-primary to-accent-pink"
    },
    {
      title: "Junior Developer",
      company: "StartupTech",
      period: "2021 – 2022",
      location: "On-site",
      type: "Full-time",
      description: "Delivered 10+ client projects including travel booking and business management platforms. Improved performance and user experience on web applications.",
      achievements: [
        "Delivered 10+ client projects on time",
        "Improved website loading speeds by 50%",
        "Mentored junior interns in React and modern JavaScript"
      ],
      tech: ["React", "Express.js", "JavaScript", "MongoDB"],
      color: "from-accent-blue to-accent-green"
    },
    {
      title: "Trainee Developer",
      company: "Code Academy",
      period: "2020 – 2021",
      location: "Remote",
      type: "Part-time",
      description: "Built educational platforms and early-stage LMS systems. Contributed to open source projects and completed advanced training in React and Node.js.",
      achievements: [
        "Contributed to open source projects",
        "Completed advanced training in React and Node.js",
        "Built personal portfolio attracting first clients"
      ],
      tech: ["HTML", "CSS", "JavaScript", "React", "Git"],
      color: "from-accent-purple to-accent-blue"
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", year: "2023" },
    { name: "React Advanced Patterns", year: "2023" },
    { name: "Node.js Professional", year: "2022" },
    { name: "MongoDB Certified", year: "2022" }
  ];

  return (
    <div className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-gray-100"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A journey of continuous growth in software engineering, sustainability technology, 
            and innovative solution development across diverse industries.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-blue-500 to-purple-500"></div>

            <div className="">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.company}
                  className="relative pl-16 sm:pl-20 pb-8 sm:pb-12"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 sm:left-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${exp.color} border-4 border-white shadow-lg`}></div>

                  <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-2">
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
    </div>
  );
};

export default ExperienceSection;