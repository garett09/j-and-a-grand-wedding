import { ScrollAnimation, ScrollStagger } from "@/components/scroll-animation"

export function FAQ() {
  const faqs = [
    {
      question: "What time should I arrive?",
      answer: "We recommend coming by 10:00 AM so you have time to settle in before the ceremony starts.",
    },
    {
      question: "Can I bring my kids or a +1?",
      answer:
        "As this is a small and intimate gathering, we kindly ask that only those listed in the invitation attend. While we absolutely adore your little ones, we're keeping the event adults-only to maintain a calm and comfortable atmosphere during the ceremony and reception. We appreciate your understanding.",
    },
    {
      question: "Where should I park?",
      answer:
        "There is paid parking near the venue and a few free street parking slots available. As the date approaches, we'll send the exact location and parking details via SMS. PWD-friendly parking is available. If you need assistance or special arrangements, please don't hesitate to let us know.",
    },
  ]

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#f5f4f0]">
      {/* Background decoration - right side from PDF */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.1] bg-right bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url('/garden-path-vines-floral-line-drawing-sketch-verti.jpg')`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Left - Questions */}
          <ScrollStagger
            preset="fadeUp"
            className="w-full lg:w-2/3 space-y-8 md:space-y-10 order-2 lg:order-1"
            staggerChildren={0.12}
          >
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#d5d5d5] pb-6 md:pb-8">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1a1a1a] mb-3 md:mb-4 text-center">
                  {faq.question}
                </h3>
                <p className="font-serif text-sm sm:text-base md:text-lg text-[#555] leading-relaxed text-center">
                  {faq.answer}
                </p>
              </div>
            ))}
          </ScrollStagger>

          {/* Right - Title */}
          <ScrollAnimation
            preset="fadeLeft"
            delay={0.06}
            className="w-full lg:w-1/3 flex items-start justify-center lg:justify-end order-1 lg:order-2"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-[#1a1a1a] leading-[1.1] text-center lg:text-right">
              <span className="block">FREQUENTLY</span>
              <span className="block">ASKED</span>
              <span className="block">QUESTIONS</span>
            </h2>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
