import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional experience and background of Ron Forbes.",
};

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Company Name",
    period: "2020 - Present",
    description: "Led development of key features and mentored junior developers.",
  },
  {
    title: "Software Engineer",
    company: "Another Company",
    period: "2018 - 2020",
    description: "Developed and maintained web applications using modern technologies.",
  },
  // Add more experiences
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    year: "2018",
  },
  // Add more education
];

const skills = [
  "JavaScript/TypeScript",
  "React & Next.js",
  "Node.js",
  "Python",
  "Cloud Platforms (AWS, Vercel)",
  "Database Design",
  // Add more skills
];

export default function ResumePage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <div className="flex items-start justify-between mb-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Resume</h1>
          <p className="text-xl text-muted-foreground">
            Professional experience and background
          </p>
        </div>
        <Button variant="outline">
          Download PDF
        </Button>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {job.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription>{edu.school}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{edu.year}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> Update this page in{" "}
          <code className="bg-background px-2 py-1 rounded">app/resume/page.tsx</code> with your actual experience and qualifications.
        </p>
      </div>
    </div>
  );
}
