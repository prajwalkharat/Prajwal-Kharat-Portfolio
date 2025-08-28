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
    <section id="portfolio" className="py-12 md:py-24 bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="text-orange-500 font-semibold text-base md:text-lg mb-4">Portfolio</div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6 px-4">
            Some things I've <span className="text-gradient">worked on</span>
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            A collection of projects that showcase my development journey and technical expertise across various technologies.
          </p>
        </div>

        {/* Filter Buttons with smooth scroll */}
        <div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4"
          role="tablist"
          aria-label="Project categories"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`rounded-full px-3 md:px-6 py-1 md:py-2 text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                activeFilter === filter.id 
                  ? "btn-hero shadow-lg text-white" 
                  : "border-slate-300 hover:border-orange-400 hover:bg-orange-50 focus:ring-offset-slate-50 text-black"
              }`}
              role="tab"
              aria-selected={activeFilter === filter.id}
              tabIndex={activeFilter === filter.id ? 0 : -1}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card group relative transition-all duration-500 hover:z-10"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                perspective: '1000px',
                willChange: 'transform, opacity',
                contentVisibility: 'auto',
                contain: 'paint layout style'
              }}
              aria-label={`Project: ${project.title}`}
            >
              {/* Project Image with 3D effect */}
              <div 
                className="relative overflow-hidden rounded-xl md:rounded-2xl h-32 md:h-48 transition-transform duration-500 group-hover:shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0)',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  WebkitTransform: 'translate3d(0,0,0)'
                }}
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl transition-transform duration-500 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{project.title.split(' ')[0]}</div>
                    <div className="text-xs md:text-sm opacity-90">Project Preview</div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {/* <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Eye size={16} className="mr-2" />
                    Preview
                  </Button> 
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button> */}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-3 md:p-6 space-y-2 md:space-y-4 bg-white rounded-b-xl md:rounded-b-2xl shadow-md transition-all duration-500 group-hover:shadow-xl">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 md:px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full hover:bg-orange-100 hover:text-orange-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="space-y-1 md:space-y-2">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center text-xs md:text-sm text-slate-600">
                      <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-green-500 rounded-full mr-2 md:mr-3" />
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}

              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-16 px-4">
          <div className="card-3d p-4 md:p-8 bg-gradient-to-br from-orange-500 to-red-600 text-white max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Want to see more?</h3>
            <p className="mb-4 md:mb-6 text-orange-100 text-sm md:text-base">
              Check out my GitHub for additional projects and contributions to open source.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Button 
                className="bg-white text-orange-600 hover:bg-orange-50 text-sm md:text-base"
              >
                <Github size={16} className="mr-2" />
                View GitHub
              </Button>
              <Button 
                variant="outline"
                className="border-white text-black hover:bg-white/10 text-sm md:text-base"
                onClick={() => {
                  // Direct download link - user needs to replace with actual resume URL
                  const resumeUrl = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE";
                  const link = document.createElement('a');
                  link.href = resumeUrl;
                  link.download = 'Prajwal_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
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