import { DiagonalPattern } from "./diagonal-pattern"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Gifts() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#faf9f7]">
      {/* Diagonal line pattern matching PDF */}
      <DiagonalPattern />

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Left - Content */}
          <ScrollAnimation preset="fadeRight" className="w-full lg:w-1/2 text-center">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] text-[#1a1a1a] mb-6 md:mb-8">
              GIFTS
            </h2>

            <h3 className="font-display text-lg sm:text-xl md:text-2xl tracking-[0.1em] text-[#1a1a1a] mb-4 md:mb-6 uppercase">
              Your presence is the greatest gift of all.
            </h3>

            <p className="font-serif text-sm sm:text-base md:text-lg italic text-[#555] leading-relaxed max-w-lg mx-auto">
              We truly value your presence as the best present. If you wish to bless us further, a monetary gift to help
              build our future would mean so much.
            </p>
          </ScrollAnimation>

          {/* Right - Image from PDF - B&W motion blur photo */}
          <ScrollAnimation preset="fadeLeft" delay={0.06} className="w-full lg:w-1/2">
            <img
              src="/pics/att.UMD9iAGgDnWETt63BrYKXnZ3Xa5accsVh8ujm0L9qCs.JPG"
              alt="Joaquin and Aleeza"
              className="w-full h-auto max-h-[500px] object-contain"
              style={{ filter: 'grayscale(100%) contrast(1.1)' }}
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
