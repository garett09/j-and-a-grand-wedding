import type { Accommodation } from '@/lib/accommodations'

export function AccommodationCard({ item }: { item: Accommodation }) {
  return (
    <article className="group h-full rounded-xl border border-black/10 bg-white/70 p-5 backdrop-blur-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl tracking-wide text-[#1a1a1a]">{item.name}</h3>
        <div className="flex flex-col items-end gap-2">
          <span className="font-display text-[11px] tracking-[0.22em] uppercase text-[#1a1a1a]">
            {item.type}
          </span>
          {item.priceRange ? (
            <span className="font-display text-[11px] tracking-[0.12em] text-[#666]">{item.priceRange}</span>
          ) : null}
        </div>
      </div>

      <p className="mt-3 font-serif text-base text-[#444] leading-relaxed">{item.highlights}</p>

      <dl className="mt-4 space-y-2">
        <div className="flex flex-col gap-1">
          <dt className="sr-only">Area</dt>
          <dd className="font-display text-xs tracking-[0.18em] uppercase text-[#666]">{item.area}</dd>
        </div>
        {item.approxDrive ? (
          <div className="flex flex-col gap-1">
            <dt className="sr-only">Approximate drive</dt>
            <dd className="font-serif text-sm text-[#555]">{item.approxDrive}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-5 grid grid-cols-1 gap-2">
        <a
          href={item.mapsUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md border border-black/15 bg-white px-4 py-2 font-display text-xs tracking-[0.2em] uppercase text-[#1a1a1a] transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
        >
          View on Maps
        </a>

        {item.websiteUrl ? (
          <a
            href={item.websiteUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-black px-4 py-2 font-display text-xs tracking-[0.2em] uppercase text-white transition-colors hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            Website
          </a>
        ) : null}
      </div>
    </article>
  )
}
