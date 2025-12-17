'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

import { useIsMobile } from '@/hooks/use-mobile'

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 700], [0, 80])

  const contentTransition = {
    duration: isMobile ? 0.6 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - B&W couple photo matching PDF */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/pics/att.INs28NQaLVxqGsbpFEGo05ZIbKZ5NHXOUGdSn58EmJA.JPG')`,
          filter: 'grayscale(100%) contrast(1.1)',
          y: reduceMotion || isMobile ? 0 : parallaxY,
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Center Content - Names with stylized monogram */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center px-4"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={contentTransition}
      >
        <div className="text-center text-white">
          <div className="relative inline-block">
            {/* JOAQUIN with integrated J */}
            <div className="relative">
              <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.08em] italic">
                J
              </span>
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.15em]">
                OAQUIN
              </span>
            </div>

            {/* AND */}
            <p className="font-display text-base sm:text-lg md:text-xl tracking-[0.5em] my-1 md:my-2 ml-8 sm:ml-12 md:ml-16">
              AND
            </p>

            {/* ALEEZA with integrated A */}
            <div className="relative">
              <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.08em] italic">
                A
              </span>
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.15em]">
                LEEZA
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom left - Date */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 md:left-16 z-10"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ ...contentTransition, delay: 0.12 }}
      >
        <p className="font-display text-white text-xs sm:text-sm md:text-base tracking-[0.3em]">MARCH 21, 2026</p>
      </motion.div>

      {/* Bottom right - Hashtag */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 md:right-16 z-10"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ ...contentTransition, delay: 0.12 }}
      >
        <p className="font-display text-white text-xs sm:text-sm md:text-base tracking-[0.2em]">#THEANARETAS</p>
      </motion.div>
    </section>
  )
}
