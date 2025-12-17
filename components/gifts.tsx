export function Gifts() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#faf9f7]">
      {/* Background garden sketch - very faint */}
      <div
        className="absolute inset-0 opacity-[0.08] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/images/image.png')`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Left - Content */}
          <div className="w-full lg:w-1/2 text-center">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] text-[#1a1a1a] mb-6 md:mb-8">
              GIFTS
            </h2>

            <h3 className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.1em] text-[#1a1a1a] mb-4 md:mb-6 uppercase">
              Your presence is the greatest gift of all.
            </h3>

            <p className="font-serif text-sm sm:text-base md:text-lg italic text-[#555] leading-relaxed max-w-lg mx-auto">
              We truly value your presence as the best present. If you wish to bless us further, a monetary gift to help
              build our future would mean so much.
            </p>
          </div>

          {/* Right - Image from PDF */}
          <div className="w-full lg:w-1/2">
            <img
              src="/images/image.png"
              alt="Joaquin and Aleeza"
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
