export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - couple photo from provided URL */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/image.png')`,
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Center Content - Names with stylized monogram */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center text-white">
          <div className="relative inline-block">
            {/* JOAQUIN with integrated J */}
            <div className="relative">
              <span className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.08em] font-light italic">
                J
              </span>
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.15em] font-light">
                OAQUIN
              </span>
            </div>

            {/* AND */}
            <p className="font-serif text-base sm:text-lg md:text-xl tracking-[0.5em] my-1 md:my-2 ml-8 sm:ml-12 md:ml-16">
              AND
            </p>

            {/* ALEEZA with integrated A */}
            <div className="relative">
              <span className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.08em] font-light italic">
                A
              </span>
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.15em] font-light">
                LEEZA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom left - Date */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 md:left-16 z-10">
        <p className="font-serif text-white text-xs sm:text-sm md:text-base tracking-[0.3em]">MARCH 21, 2026</p>
      </div>

      {/* Bottom right - Hashtag */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 md:right-16 z-10">
        <p className="font-serif text-white text-xs sm:text-sm md:text-base tracking-[0.2em]">#THEANARETAS</p>
      </div>
    </section>
  )
}
