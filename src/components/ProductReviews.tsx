import { reviewsFor } from "@/data/catalog";
import { StarRating } from "@/components/StarRating";

/**
 * Reviews block. Renders real reviews when present, including verified-purchase
 * labelling, customer photos, written stories and video testimonials.
 */
export function ProductReviews({ slug }: { slug: string }) {
  const list = reviewsFor(slug);
  const average =
    list.length > 0 ? list.reduce((s, r) => s + r.rating, 0) / list.length : 0;

  return (
    <section aria-labelledby="reviews-heading" className="border-t border-border pt-12">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="reviews-heading" className="font-serif text-3xl font-light">
          Reviews
        </h2>
        <StarRating rating={average} count={list.length} />
      </div>

      {list.length === 0 ? (
        <p className="mt-6 max-w-xl text-sm text-muted-foreground">
          This piece has no reviews yet. We publish only verified reviews from
          customers who have received their saree — written notes, photographs
          and video, exactly as they send them.
        </p>
      ) : (
        <ul className="mt-10 grid gap-10 md:grid-cols-2">
          {list.map((review) => (
            <li key={review.id} className="border-t border-border pt-6">
              <StarRating rating={review.rating} />
              <h3 className="mt-3 font-serif text-xl font-light">{review.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{review.body}</p>
              {review.story ? (
                <p className="mt-3 border-l border-border pl-4 font-serif text-lg font-light italic">
                  {review.story}
                </p>
              ) : null}
              {review.photos?.length ? (
                <ul className="mt-4 flex gap-3">
                  {review.photos.map((src) => (
                    <li key={src}>
                      <img
                        src={src}
                        alt={`Customer photograph from ${review.author}`}
                        loading="lazy"
                        className="h-24 w-20 object-cover"
                      />
                    </li>
                  ))}
                </ul>
              ) : null}
              {review.videoUrl ? (
                <video
                  src={review.videoUrl}
                  controls
                  preload="none"
                  className="mt-4 w-full"
                  aria-label={`Video review from ${review.author}`}
                />
              ) : null}
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {review.author}
                {review.verifiedPurchase ? " · Verified purchase" : ""} ·{" "}
                {new Date(review.date).toLocaleDateString("en-IN", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
