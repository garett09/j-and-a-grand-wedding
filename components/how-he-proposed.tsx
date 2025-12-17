export function HowHeProposed() {
  return (
    <section className="bg-white">
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex items-center p-8 md:p-12 lg:p-16 xl:p-24 order-2 md:order-1">
          <div className="relative w-full">
            {/* Ghost/Shadow text "PROPOSAL" behind - single layer only */}
            <div className="absolute top-20 sm:top-24 md:top-28 left-0 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide leading-none pointer-events-none select-none text-[#e8e5e0]">
              PROPOSAL
            </div>

            {/* Main title */}
            <div className="relative z-10">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide text-[#1a1a1a] leading-[0.9]">
                <span className="block">HOW HE</span>
                <span className="block">PROPOSED</span>
              </h2>

              <p className="mt-20 sm:mt-24 md:mt-32 lg:mt-40 font-serif text-xs sm:text-sm tracking-[0.3em] uppercase text-[#1a1a1a]">
                Proposal Story
              </p>
            </div>
          </div>
        </div>

        {/* Right Image - Proposal photo */}
        <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-[80vh] order-1 md:order-2">
          <img
            src="/images/image.png"
            alt="The Proposal - Joaquin and Aleeza hugging"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
