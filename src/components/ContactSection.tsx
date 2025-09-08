import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('subject', formData.subject);
      form.append('message', formData.message);
      form.append('_to', 'markpaulchege7@gmail.com');
      form.append('_subject', `Portfolio Contact: ${formData.subject}`);
      form.append('_captcha', 'false');
      form.append('_template', 'table');
      
      const response = await fetch('https://formsubmit.co/markpaulchege7@gmail.com', {
        method: 'POST',
        body: form
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "markpaulchege7@gmail.com",
      href: "mailto:markpaulchege7@gmail.com",
      color: "from-accent-blue to-accent-purple"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+254 711 947 327",
      href: "tel:+254711947327",
      color: "from-accent-green to-accent-blue"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Nairobi, Kenya",
      href: "#",
      color: "from-accent-pink to-accent-purple"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mark-paul-chege-395b01269/",
      color: "hover:bg-[#0077b5] hover:text-white"
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      href: "https://github.com/MPChege",
      color: "hover:bg-[#333] hover:text-white"
    }
  ];

  return (
    <div className="py-16 sm:py-20 lg:py-24 relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-red-50/30 via-transparent to-blue-50/30"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-red-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can create innovative solutions 
            that drive real impact for your business or project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Get In Touch</h3>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always excited to discuss new opportunities, innovative projects, 
                and ways to leverage technology for positive impact.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="p-4 sm:p-5 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer rounded-2xl"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-md`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{info.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">Connect With Me</h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    asChild
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-lg transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="p-6 sm:p-8">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-800">Send a Message</CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600">
                  Share your project details and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 pt-0">
                <form action="https://formsubmit.co/markpaulchege7@gmail.com" method="POST" className="space-y-4 sm:space-y-6">
                  {/* Hidden FormSubmit Configuration */}
                  <input type="hidden" name="_to" value="markpaulchege7@gmail.com" />
                  <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="#" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base font-semibold text-gray-700">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12 sm:h-14 text-sm sm:text-base bg-white/70 border-2 border-gray-200 rounded-xl focus:border-red-400 transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base font-semibold text-gray-700">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="h-12 sm:h-14 text-sm sm:text-base bg-white/70 border-2 border-gray-200 rounded-xl focus:border-red-400 transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm sm:text-base font-semibold text-gray-700">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion / Collaboration Opportunity"
                      required
                      className="h-12 sm:h-14 text-sm sm:text-base bg-white/70 border-2 border-gray-200 rounded-xl focus:border-red-400 transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base font-semibold text-gray-700">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and how I can help..."
                      rows={6}
                      required
                      className="text-sm sm:text-base bg-white/70 border-2 border-gray-200 rounded-xl focus:border-red-400 transition-all duration-300 focus:scale-[1.02] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 sm:h-14 group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold text-sm sm:text-base rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200/50 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you need a full-stack application, AI integration, or want to discuss Nexus Swift partnerships, 
              I'm here to turn innovative ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
              <Button 
                size="lg" 
                className="h-12 sm:h-14 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 sm:px-8 text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105"
              >
                Schedule a Call
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 sm:h-14 border-2 border-gray-300 text-gray-700 hover:border-red-300 hover:text-red-600 font-semibold px-6 sm:px-8 text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105"
              >
                View Nexus Swift
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;