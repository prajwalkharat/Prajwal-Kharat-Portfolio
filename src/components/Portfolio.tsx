import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Ghorpad - Military Institute Kiosk",
      category: "freelance",
      description: "Interactive React kiosk site for Military Institute of Technology History Hall with intuitive navigation for 1,000+ alumni records.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "JavaScript", "CSS", "Responsive"],
      metrics: ["30% ↑ visitor engagement", "25% ↓ maintenance time"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Smart Contact Manager",
      category: "fullstack",
      description: "Full-stack contact management system with Spring Boot, Thymeleaf, and MySQL featuring OAuth integration and modern UI.",
      image: "/api/placeholder/400/300", 
      technologies: ["Spring Boot", "MySQL", "Thymeleaf", "OAuth"],
      metrics: ["20% ↑ user sign-ups", "Tailwind CSS integration"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Tech Blog Platform",
      category: "backend",
      description: "Blogging platform using Java, Servlet, JDBC, and JSP with SEO optimization and performance enhancements.",
      image: "/api/placeholder/400/300",
      technologies: ["Java", "Servlet", "JDBC", "JSP"],
      metrics: ["25% ↑ organic traffic", "35% ↑ response time"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Cross-Platform Mobile App",
      category: "mobile",
      description: "Flutter/Dart mobile application with Firebase backend integration for improved user engagement.",
      image: "/api/placeholder/400/300",
      technologies: ["Flutter", "Dart", "Firebase", "UI/UX"],
      metrics: ["15% ↑ user engagement", "18% ↓ load times"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Responsive Web Portfolio",
      category: "frontend",
      description: "Modern responsive website with interactive components and performance optimization.",
      image: "/api/placeholder/400/300",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      metrics: ["30% ↑ user interaction", "40% ↓ bounce rate"],
      gradient: "from-teal-500 to-blue-500"
    },
    {
      id: 6,
      title: "RESTful API System",
      category: "backend",
      description: "Scalable Java Spring Boot application with MySQL database and RESTful API integration.",
      image: "/api/placeholder/400/300",
      technologies: ["Spring Boot", "MySQL", "REST API", "Git"],
      metrics: ["25% ↑ data retrieval", "30% ↓ integration issues"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" },
    { id: "freelance", label: "Freelance" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-orange-500 font-semibold text-lg mb-4">Portfolio</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Some things I've <span className="text-gradient">worked on</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my development journey and technical expertise across various technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeFilter === filter.id 
                  ? "btn-hero shadow-lg" 
                  : "border-slate-300 hover:border-orange-400 hover:bg-orange-50"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl h-48 bg-gradient-to-br ${project.gradient}">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                    <div className="text-sm opacity-90">Project Preview</div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Eye size={16} className="mr-2" />
                    Preview
                  </Button>
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full hover:bg-orange-100 hover:text-orange-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="space-y-2">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live View
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-slate-300 hover:border-orange-400 hover:bg-orange-50"
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-3d p-8 bg-gradient-to-br from-orange-500 to-red-600 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="mb-6 text-orange-100">
              Check out my GitHub for additional projects and contributions to open source.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-white text-orange-600 hover:bg-orange-50"
              >
                <Github size={20} className="mr-2" />
                View GitHub
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;