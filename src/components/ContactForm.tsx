import { useState } from "react";
import { toast } from "sonner";

const topics = [
  "Choosing a saree",
  "An existing order",
  "Made to order & bridal",
  "Care & repair",
  "Wholesale or press",
] as const;

/** Client care enquiry form. Wire to an email service when the backend is ready. */
export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      className="grid gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitting(true);
        const form = e.currentTarget;
        window.setTimeout(() => {
          setSubmitting(false);
          form.reset();
          toast.success("Message received", {
            description: "Our client care team replies within one working day.",
          });
        }, 400);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name">
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </Field>
        <Field id="email" label="Email">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
      </div>

      <Field id="topic" label="What is this about?">
        <select id="topic" name="topic" className={inputClass} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message">
        <textarea id="message" name="message" required rows={5} className={inputClass} />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="justify-self-start bg-primary px-10 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full border-b border-border bg-transparent py-2.5 text-sm outline-none transition-colors focus:border-foreground";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
