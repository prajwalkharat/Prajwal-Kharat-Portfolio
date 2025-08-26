import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-200/50 rounded-full blur-3xl hero-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-200/50 rounded-full blur-3xl hero-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-orange-500 font-semibold text-lg mb-4">Say Hello 👋</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="card-3d p-8 bg-white/80 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full border-slate-300 focus:border-orange-400 focus:ring-orange-400/20 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full border-slate-300 focus:border-orange-400 focus:ring-orange-400/20 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi!"
                    rows={5}
                    required
                    className="w-full border-slate-300 focus:border-orange-400 focus:ring-orange-400/20 rounded-lg resize-none"
                  />
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full btn-hero"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-4">Let's connect on social</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Mail, href: "mailto:prajwalkharat.skn.comp@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info & Visual */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="card-3d p-8 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "prajwalkharat.skn.comp@gmail.com",
                    description: "Send me an email anytime!"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+91-8856003489",
                    description: "Call for urgent matters"
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Maharashtra, India",
                    description: "Available for remote work"
                  }
                ].map((contact, index) => (
                  <div 
                    key={contact.title}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                      <contact.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{contact.title}</h4>
                      <p className="text-slate-600 font-medium">{contact.value}</p>
                      <p className="text-sm text-slate-500">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="card-3d p-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-4 h-4 bg-green-300 rounded-full animate-pulse" />
                <span className="font-semibold">Available for Work</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
              <p className="text-green-100 leading-relaxed">
                Currently seeking exciting opportunities as a Graduate Engineer Trainee or Junior Developer. 
                Open to full-time positions, internships, and freelance projects.
              </p>
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">24hrs</div>
                  <div className="text-sm text-green-200">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Remote</div>
                  <div className="text-sm text-green-200">Work Ready</div>
                </div>
              </div>
            </div>

            {/* Fun Visual Element */}
            <div className="relative">
              <div className="card-3d p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Let's Build Something Great!</h3>
                  <p className="text-blue-100">
                    Ready to turn your ideas into reality with cutting-edge technology and creative solutions.
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full hero-float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-lg hero-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <div className="text-slate-600">
            <p className="mb-4">© 2024 Prajwal Kharat. All rights reserved.</p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="hover:text-orange-500 transition-colors">Legal Notice</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;