export function TheAttire() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#faf9f7]">
      {/* Background Villa Sketch - very faint */}
      <div
        className="absolute inset-0 opacity-[0.08] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/images/image.png')`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-16">
        {/* Title */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.3em] text-center text-[#1a1a1a] mb-12 md:mb-16">
          THE ATTIRE
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
            {/* For the Gentlemen */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.15em] text-[#1a1a1a] mb-3 md:mb-4">
                FOR THE GENTLEMEN
              </h3>
              <p className="font-serif text-sm sm:text-base md:text-lg text-[#555] leading-relaxed tracking-wide">
                Please come in formal suits and dress shoes. Avoid wearing colorful suits and sneakers
              </p>
            </div>

            {/* For the Ladies */}
            <div className="text-center lg:text-right">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.15em] text-[#1a1a1a] mb-3 md:mb-4">
                FOR THE LADIES
              </h3>
              <p className="font-serif text-sm sm:text-base md:text-lg text-[#555] leading-relaxed tracking-wide">
                We would love to see you in formal wear and long dresses. Kindly refrain from wearing black and/or white
              </p>
            </div>

            {/* Colors */}
            <div className="pt-2">
              <p className="font-serif text-sm sm:text-base md:text-lg italic text-[#555] leading-relaxed">
                Colors: Think of a European Summer Wedding with muted summer or spring colors.
              </p>
            </div>
          </div>

          {/* Right Images - Polaroid Style with envelope - using attire section image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md h-[350px] md:h-[400px]">
              {/* Envelope background element */}
              <div className="absolute top-4 right-4 md:right-8 w-48 md:w-56 h-32 md:h-40 bg-[#e8e4dc] transform rotate-12 rounded-sm shadow-sm" />

              {/* Top polaroid - bridesmaids */}
              <div className="absolute top-0 right-0 md:right-4 z-10 bg-white p-2 md:p-3 shadow-lg transform -rotate-3 w-52 md:w-64">
                <div className="w-full h-36 md:h-44 overflow-hidden bg-gray-100">
                  <img
                    src="/bridesmaids-elegant-dresses-walking-outdoors-summe.jpg"
                    alt="Bridesmaids in elegant dresses"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-5 md:h-6 bg-white" />
              </div>

              {/* Bottom polaroid - groomsmen */}
              <div className="absolute bottom-0 left-0 md:left-4 z-20 bg-white p-2 md:p-3 shadow-lg transform rotate-6 w-44 md:w-56">
                <div className="w-full h-28 md:h-36 overflow-hidden bg-gray-100">
                  <img
                    src="/groomsmen-formal-suits-outdoor-garden-wedding.jpg"
                    alt="Groomsmen in formal attire"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-5 md:h-6 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
