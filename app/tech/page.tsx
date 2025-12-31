import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "Tools, apps, and hardware that power my workflow.",
};

const techStack = {
  productivity: [
    { name: "Notion", description: "All-in-one workspace for notes and project management" },
    { name: "Obsidian", description: "Knowledge base and note-taking" },
    { name: "Things 3", description: "Task management and to-do lists" },
  ],
  development: [
    { name: "VS Code", description: "Primary code editor" },
    { name: "GitHub", description: "Version control and collaboration" },
    { name: "Vercel", description: "Deployment and hosting" },
  ],
  hardware: [
    { name: "MacBook Pro", description: "Primary development machine" },
    { name: "iPhone", description: "Mobile device" },
    { name: "AirPods Pro", description: "Wireless earbuds" },
  ],
  other: [
    { name: "1Password", description: "Password management" },
    { name: "Raycast", description: "Productivity launcher for macOS" },
    { name: "Arc Browser", description: "Web browser" },
  ],
};

export default function TechPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <div className="space-y-4 mb-10">
        <h1 className="text-4xl font-bold tracking-tighter">Tech Stack</h1>
        <p className="text-xl text-muted-foreground">
          A curated list of tools, apps, and hardware that power my daily workflow.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Productivity</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {techStack.productivity.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Development</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {techStack.development.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Hardware</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {techStack.hardware.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Other Tools</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {techStack.other.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> This is a sample tech stack. Update the list in{" "}
          <code className="bg-background px-2 py-1 rounded">app/tech/page.tsx</code> with your actual tools and preferences.
        </p>
      </div>
    </div>
  );
}
