export function OurLoveStory() {
  return (
    <section className="bg-white">
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-[80vh]">
          <img src="/images/image.png" alt="Joaquin and Aleeza" className="w-full h-full object-cover" />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="relative max-w-md">
            {/* Ghost/Shadow text behind - single layer only */}
            <div className="absolute -top-2 right-0 md:-top-4 md:-right-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide leading-[0.95] pointer-events-none select-none text-[#e8e5e0]">
              <span className="block text-right">OUR</span>
              <span className="block text-right">LOVE</span>
              <span className="block text-right">STORY</span>
            </div>

            {/* Main title - positioned on top */}
            <div className="relative z-10">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-[#1a1a1a] leading-[0.95] text-right">
                <span className="block">OUR</span>
                <span className="block">LOVE</span>
                <span className="block">STORY</span>
              </h2>

              <div className="font-serif text-sm sm:text-base md:text-lg text-[#444] leading-relaxed mt-6 md:mt-8 space-y-4 text-left">
                <p>
                  Write a paragraph that tells your story as a couple. You can include details like how you met, your
                  journey together, and what makes your relationship unique.
                </p>
                <p>
                  This is your chance to share your personality and connect with your guests, giving them a glimpse into
                  your love story and what this special day means to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
