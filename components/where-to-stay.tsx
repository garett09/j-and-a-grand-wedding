import { AccommodationCard } from "@/components/accommodation-card"
import { ScrollAnimation, ScrollStagger } from "@/components/scroll-animation"
import { tagaytayAccommodations } from "@/lib/accommodations"

export function WhereToStay() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-white">
      {/* Background Traditional Filipino House Sketch from PDF */}
      <div
        className="absolute inset-0 opacity-[0.12] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/traditional-filipino-house-line-drawing-sketch-arc.jpg')`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-16 py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="text-center">
            <ScrollAnimation preset="fadeUp">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.3em] text-[#1a1a1a] mb-6 md:mb-8">
                WHERE TO STAY
              </h2>
            </ScrollAnimation>

            <ScrollAnimation preset="fadeUp" delay={0.08}>
              <div className="mx-auto max-w-3xl space-y-4 md:space-y-6">
                <p className="font-serif text-base sm:text-lg md:text-xl text-[#444] leading-relaxed">
                  Our venue is only 1-1.5 hours away from Metro Manila. We want you to enjoy the night and be safe as
                  well.
                </p>
                <p className="font-serif text-base sm:text-lg md:text-xl text-[#444] leading-relaxed">
                  Should you wish to stay in Tagaytay, here are a few nearby options. Tap to open directions.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="mt-10 md:mt-12">
            <ScrollStagger
              preset="fadeUp"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              staggerChildren={0.12}
            >
              {tagaytayAccommodations.map((item) => (
                <AccommodationCard key={item.name} item={item} />
              ))}
            </ScrollStagger>

            <ScrollAnimation preset="fade" delay={0.08}>
              <p className="mt-6 text-center font-serif text-sm sm:text-base text-[#666]">
                Drive times are approximate and may vary depending on traffic.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
