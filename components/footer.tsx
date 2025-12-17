export function Footer() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image - couple photo with "We can't wait to see you!" */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
        <img
          src="/images/image.png"
          alt="Joaquin and Aleeza - We can't wait to see you"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-[0.15em] text-center drop-shadow-lg px-4">
            {"WE CAN'T WAIT TO SEE YOU!"}
          </h2>
        </div>
      </div>

      {/* Simple white footer space */}
      <div className="bg-white py-8 md:py-12" />
    </section>
  )
}
