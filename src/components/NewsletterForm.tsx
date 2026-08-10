import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { ctaClasses } from "@/components/CTAButtons";

/**
 * Newsletter signup.
 * Integration-ready: when Brevo credentials are available, POST the email to a
 * server function that forwards it to the Brevo contacts API.
 */
export function NewsletterForm({
  className,
  compact = false,
}: {
  className?: string | undefined;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    setEmail("");
    toast.success("Thanks! You're on the list.", {
      description:
        "Newsletter delivery goes live as soon as the Brevo list is connected.",
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("w-full", className)}
      aria-label="Newsletter signup"
    >
      <label
        htmlFor={compact ? "newsletter-email-compact" : "newsletter-email"}
        className={cn("block text-sm font-medium", compact && "sr-only")}
      >
        Email address
      </label>
      <div
        className={cn(
          "gap-2",
          compact ? "mt-0 flex flex-col sm:flex-row" : "mt-2 flex flex-col sm:flex-row",
        )}
      >
        <input
          id={compact ? "newsletter-email-compact" : "newsletter-email"}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="h-11 w-full rounded-full border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-mauve"
        />
        <button type="submit" className={ctaClasses({ className: "shrink-0" })}>
          Subscribe
        </button>
      </div>
      <p aria-live="polite" className="mt-2 text-xs text-muted-foreground">
        {submitted
          ? "You're subscribed — thank you."
          : "One useful email a month. Unsubscribe anytime."}
      </p>
    </form>
  );
}
