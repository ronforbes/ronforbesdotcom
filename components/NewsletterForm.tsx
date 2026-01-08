interface NewsletterFormProps {
  variant?: "default" | "compact";
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = "Subscribe to The Degenerate";
const DEFAULT_DESCRIPTION = "I'm building my AI productivity system in public and documenting everything. Follow along for weekly experiments with Claude Code, Obsidian, and whatever I'm building next.";

export function NewsletterForm({
  variant = "default",
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION
}: NewsletterFormProps) {
  if (variant === "compact") {
    return (
      <div className="rounded-lg border bg-card p-6">
        <h3 className="font-semibold text-lg mb-2">😈 {title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <div>
          <iframe src="https://ronforbes.substack.com/embed" width="100%" height="150" scrolling="no" className="border-0"></iframe>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-8">
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
        <div className="space-y-4">
          <h2 className="font-bold text-4xl">
            😈 {title}
          </h2>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="space-y-4">
          <iframe
            src="https://ronforbes.substack.com/embed"
            width="100%"
            height="150"
            scrolling="no"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
