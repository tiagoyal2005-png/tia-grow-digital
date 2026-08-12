import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

/** Floating WhatsApp client-care button. */
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kota Doria client care on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-quiet transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
