interface NewsletterFormProps {
  variant?: "default" | "compact";
}

export function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
  if (variant === "compact") {
    return (
      <div className="rounded-lg border bg-card p-6">
        <h3 className="font-semibold text-lg mb-2">😈 Subscribe to<b>The Degenerate</b></h3>
        <p className="text-sm text-muted-foreground mb-4">
          I&apos;m building my AI productivity system in public and documenting everything. Join me for weekly experiments with Claude Code, Obsidian, and whatever I&apos;m building next.
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
            😈 Subscribe to<br />
            <span className="text-4xl"><b>The Degenerate</b></span>
          </h2>
          <p className="text-muted-foreground">
            I&apos;m building my AI productivity system in public and documenting everything. Follow along for weekly experiments with Claude Code, Obsidian, and whatever I&apos;m building next.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            📬 Join my weekly(ish) newsletter where I share AI productivity experiments, PKM insights, and lessons from building in public.
          </p>
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
