export function InviteDetails() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Villa Sketch - the invite section background from PDF */}
      <div
        className="absolute inset-0 opacity-[0.15] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/image.png')`,
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left - Stylized Names Monogram */}
          <div className="text-[#1a1a1a] flex-shrink-0">
            <div className="relative inline-block">
              {/* JOAQUIN with integrated J */}
              <div className="relative">
                <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.05em] font-light italic">
                  J
                </span>
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.12em] font-light">
                  OAQUIN
                </span>
              </div>

              {/* AND */}
              <p className="font-serif text-sm sm:text-base md:text-lg tracking-[0.5em] my-1 ml-12 sm:ml-16 md:ml-20 text-[#666]">
                AND
              </p>

              {/* ALEEZA with integrated A */}
              <div className="relative">
                <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.05em] font-light italic">
                  A
                </span>
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.12em] font-light">
                  LEEZA
                </span>
              </div>
            </div>
          </div>

          {/* Right - Event Details */}
          <div className="text-center lg:text-left max-w-lg">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#1a1a1a] mb-8 md:mb-12 leading-relaxed">
              {"Let's celebrate love, laughter, and happily ever after!"}
            </p>

            <div className="space-y-1 font-serif text-xs sm:text-sm md:text-base tracking-[0.2em] text-[#1a1a1a] uppercase">
              <p>
                Saturday, 21<sup className="text-[0.6em]">st</sup> of March 2026
              </p>
              <p>3:00 in the afternoon</p>
              <p>Villa de Este, Magallanes Dr., Tagaytay</p>
            </div>

            <div className="mt-8 md:mt-12 space-y-1 font-serif text-xs sm:text-sm md:text-base tracking-[0.15em] text-[#1a1a1a] uppercase">
              <p>Dinner & Dancing to follow at</p>
              <p>The Glasshouse, Villa de Este, Tagaytay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
