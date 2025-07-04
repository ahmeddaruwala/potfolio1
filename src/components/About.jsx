import { Code, PenTool } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Web Developer</h3>
            <p className="text-muted-foreground">
              A passionate web developer eager to turn ideas into functional and
              visually appealing websites. With a strong foundation, responsive
              design and a growing understanding of back-end technologies, I
              enjoy crafting clean, user-friendly digital experiences. This
              portfolio showcases my projects, learning journey, and growth as I
              continue to explore new technologies and best practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=923242745032&text&type=phone_number&app_absent=0"
                className="cosmic-button"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Developer</h4>
                  <p className="text-muted-foreground">
                    Creating responsive, interactive, user-friendly websites and
                    web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Graphic Designer</h4>
                  <p className="text-muted-foreground">
                    I design intuitive and engaging designs that enhance digital
                    experiences, captivate audiences and user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
