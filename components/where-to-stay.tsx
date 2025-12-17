export function WhereToStay() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-white">
      {/* Background House Sketch from PDF */}
      <div
        className="absolute inset-0 opacity-[0.12] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/images/image.png')`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-16 py-16 md:py-24 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.3em] text-[#1a1a1a] mb-8 md:mb-10">
          WHERE TO STAY
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          <p className="font-serif text-base sm:text-lg md:text-xl text-[#444] leading-relaxed">
            Our venue is only 1-1.5 hours away from Metro Manila. We want you to enjoy the night and be safe as well.
          </p>

          <p className="font-serif text-base sm:text-lg md:text-xl text-[#444] leading-relaxed">
            Should you wish to stay in Tagaytay, here are some places nearby:
          </p>
        </div>
      </div>
    </section>
  )
}
