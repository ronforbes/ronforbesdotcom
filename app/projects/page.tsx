import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of past work and side projects by Ron Forbes.",
};

const projects = [
  {
    title: "RonForbes.com",
    description: "Personal website built with Next.js, Tailwind CSS, and MDX",
    link: "https://ronforbes.com",
    github: "https://github.com/ronforbes/ronforbes.com",
    tags: ["Next.js", "Tailwind CSS", "MDX", "Vercel"],
  },
  // Add more projects
];

export default function ProjectsPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <div className="space-y-4 mb-10">
        <h1 className="text-4xl font-bold tracking-tighter">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A showcase of my work, side projects, and experiments.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.link && (
                  <Button asChild variant="default" size="sm">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> Add your projects in{" "}
          <code className="bg-background px-2 py-1 rounded">app/projects/page.tsx</code>. You can include screenshots, links, and descriptions of your work.
        </p>
      </div>
    </div>
  );
}
