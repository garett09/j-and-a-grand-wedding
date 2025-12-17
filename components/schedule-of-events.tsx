export function ScheduleOfEvents() {
  const events = [
    {
      time: "3:30 PM",
      title: "Ceremony",
      description: "Welcome drinks and a short walk through our memory lane photo exhibit.",
    },
    {
      time: "5:00 PM",
      title: "Cocktails",
      description:
        "A short ceremony where we'll exchange vows again — a little older, a little wiser, and still in love.",
    },
    {
      time: "6:00 PM",
      title: "Dinner",
      description: "A relaxed al fresco dinner. Buffet-style, with local favorites and a few of our family's recipes.",
    },
    {
      time: "9:00 PM",
      title: "Drinks & Dancing",
      description: "No formal speeches, but feel free to grab the mic for a toast or join us on the dance floor.",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f4f0]">
      {/* Background Villa Sketch from PDF schedule section */}
      <div
        className="absolute inset-0 opacity-[0.15] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/images/image.png')`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24 max-w-7xl mx-auto">
          {/* Left - Title */}
          <div className="w-full lg:w-2/5">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-[#1a1a1a] leading-[1.05]">
              <span className="block">SCHEDULE</span>
              <span className="block">OF EVENTS</span>
            </h2>
            <p className="mt-4 md:mt-6 font-serif text-lg sm:text-xl md:text-2xl tracking-[0.1em] text-[#1a1a1a]">
              MARCH 21, 2026
            </p>
          </div>

          {/* Right - Timeline */}
          <div className="w-full lg:w-3/5 space-y-8 md:space-y-10">
            {events.map((event, index) => (
              <div key={index}>
                <p className="font-serif text-xs sm:text-sm tracking-[0.15em] text-[#666] mb-1">{event.time}</p>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] mb-2">{event.title}</h3>
                <p className="font-serif text-sm sm:text-base md:text-lg text-[#555] leading-relaxed max-w-xl">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
