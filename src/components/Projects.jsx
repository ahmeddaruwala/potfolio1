const projects = [
  {
    id: 1,
    title: "e-commerce website",
    description: "under construction e-commerce website.",
    image: "/projects-images/project1.png",
    demoURL: "https://extra-small-hand.surge.sh/",
    githubURL: "https://github.com/ahmeddaruwala",
  },
  {
    id: 2,
    title: "#",
    description: "#",
    image: "#",
    demoURL: "#",
    githubURL: "https://github.com/ahmeddaruwala",
  },
  {
    id: 3,
    title: "#",
    description: "#",
    image: "#",
    demoURL: "#",
    githubURL: "https://github.com/ahmeddaruwala",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
        </div>
      </div>
    </section>
  );
};
