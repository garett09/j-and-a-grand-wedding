import { ScrollAnimation } from "@/components/scroll-animation"

export function Footer() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image - couple photo with "We can't wait to see you!" - matching PDF */}
      <ScrollAnimation preset="fade" className="relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
        <img
          src="/pics/att.5qDuwIdLnbeqanohP8IT5sexZ_dIM4Y3cfRPRlFGZnQ.JPG"
          alt="Joaquin and Aleeza - We can't wait to see you"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'grayscale(100%) contrast(1.1)' }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text overlay - matching PDF positioning */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white tracking-[0.15em] text-center drop-shadow-lg px-4">
            {"WE CAN'T WAIT TO SEE YOU!"}
          </h2>
        </div>
      </ScrollAnimation>

      {/* Simple white footer space */}
      <div className="bg-white py-8 md:py-12" />
    </section>
  )
}
