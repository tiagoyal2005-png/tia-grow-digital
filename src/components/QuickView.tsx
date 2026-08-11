import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import type { Product } from "@/data/catalog";
import { inr } from "@/lib/format";
import { useStore } from "@/lib/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export function QuickView({
  product,
  open,
  onOpenChange,
}: {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { addToCart } = useStore();
  const cover = product.images[0]!;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl gap-0 overflow-hidden rounded-none border-border bg-card p-0">
        <div className="grid gap-0 sm:grid-cols-2">
          <img
            src={cover.src}
            alt={cover.alt}
            width={1024}
            height={1360}
            loading="lazy"
            className="hidden h-full w-full object-cover sm:block"
          />
          <div className="p-7">
            <DialogTitle className="font-serif text-2xl font-light">
              {product.name}
            </DialogTitle>
            <DialogDescription className="mt-3 text-sm text-muted-foreground">
              {product.shortDescription}
            </DialogDescription>
            <p className="mt-5 text-sm">{inr(product.price)}</p>
            <dl className="mt-6 space-y-2 text-xs text-muted-foreground">
              <div className="flex gap-2">
                <dt className="uppercase tracking-[0.16em]">Fabric</dt>
                <dd>{product.fabric}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="uppercase tracking-[0.16em]">Weave</dt>
                <dd>{product.weave}</dd>
              </div>
            </dl>
            <div className="mt-7 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  addToCart(product.slug);
                  toast.success("Added to bag", { description: product.name });
                  onOpenChange(false);
                }}
                className="bg-primary py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Add to bag
              </button>
              <Link
                to="/product/$slug"
                params={{ slug: product.slug }}
                onClick={() => onOpenChange(false)}
                className="border border-foreground/25 py-3 text-center text-xs uppercase tracking-[0.2em] transition-colors hover:border-foreground"
              >
                View full details
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
