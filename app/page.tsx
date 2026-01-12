import Hero from "@/components/hero"
import FeatureCards from "@/components/feature-cards"
import PopularCourses from "@/components/popular-courses"
import StudentStats from "@/components/student-stats"
import MasonryTestimonials from "@/components/masonry-testimonials"
import Partners from "@/components/partners"
import WhatsAppChat from "@/components/whatsapp-chat"
import FAQSection from "@/components/faqSection"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <FeatureCards />
        <PopularCourses />
        <StudentStats />
        <Partners />
        <MasonryTestimonials />
        <FAQSection />
        <WhatsAppChat />
      </main>
    </>
  )
}
