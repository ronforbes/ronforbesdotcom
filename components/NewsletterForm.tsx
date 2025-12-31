interface NewsletterFormProps {
  variant?: "default" | "compact";
}

export function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
  // For now, using an iframe embed. Can be replaced with custom form + Substack API later
  const embedUrl = "https://substackapi.com/widget.js?widget=subscribe-widget";

  if (variant === "compact") {
    return (
      <div className="rounded-lg border bg-card p-6">
        <h3 className="font-semibold text-lg mb-2">Subscribe to my newsletter</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get the latest posts delivered right to your inbox.
        </p>
        {/* Substack embed will go here */}
        <div className="bg-muted/50 rounded p-4 text-center text-sm text-muted-foreground">
          [Substack Newsletter Form]
          <div className="mt-2 text-xs">
            Add your Substack embed code here
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-8 text-center">
      <h2 className="font-bold text-2xl mb-3">Join the Newsletter</h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Subscribe to get my latest content by email. I share insights on career development,
        AI, health, and more.
      </p>
      {/* Substack embed will go here */}
      <div className="bg-muted/50 rounded p-8 text-center text-sm text-muted-foreground">
        [Substack Newsletter Form]
        <div className="mt-2 text-xs">
          Add your Substack embed code here
        </div>
      </div>
    </div>
  );
}
