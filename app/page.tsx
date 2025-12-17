import { HeroSection } from "@/components/hero-section"
import { InviteDetails } from "@/components/invite-details"
import { OurLoveStory } from "@/components/our-love-story"
import { HowHeProposed } from "@/components/how-he-proposed"
import { ScheduleOfEvents } from "@/components/schedule-of-events"
import { TheAttire } from "@/components/the-attire"
import { WhereToStay } from "@/components/where-to-stay"
import { Gifts } from "@/components/gifts"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <HeroSection />
      <InviteDetails />
      <OurLoveStory />
      <HowHeProposed />
      <ScheduleOfEvents />
      <TheAttire />
      <WhereToStay />
      <Gifts />
      <FAQ />
      <Footer />
    </main>
  )
}
