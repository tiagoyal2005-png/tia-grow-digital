import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { services, site } from "@/data/site";
import { ctaClasses } from "@/components/CTAButtons";

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-mauve";

/** Accessible contact form. Wire to a server function/Brevo when ready. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email.includes("@") || message.length < 10) {
      toast.error("Please complete all required fields.", {
        description: "A short note about your goals helps me reply usefully.",
      });
      return;
    }

    setSent(true);
    e.currentTarget.reset();
    toast.success("Message ready to send", {
      description: `Email delivery connects with Brevo shortly — meanwhile reach me directly at ${site.email}.`,
    });
  }

  return (
    <form onSubmit={onSubmit} className="card-premium p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium">
            Business / Website
          </label>
          <input
            id="company"
            name="company"
            className={fieldClass}
            placeholder="Company or URL"
          />
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium">
            What do you need help with?
          </label>
          <select id="service" name="service" className={fieldClass} defaultValue="">
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium">
          Tell me about your goals <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={fieldClass}
          placeholder="Where you are now, where you want to be, and any deadlines."
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className={ctaClasses({ size: "lg" })}>
          Send message
        </button>
        <p aria-live="polite" className="text-xs text-muted-foreground">
          {sent
            ? "Thanks — I'll get back to you within one business day."
            : "Typical reply time: within one business day."}
        </p>
      </div>
    </form>
  );
}
