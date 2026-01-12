import AboutSection from "@/components/about/aboutSection";
import AboutUsHero from "@/components/about/aboutUsHero";
import CoreValuesSection from "@/components/about/coreValues";
import TeamSection from "@/components/about/team";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <>
      <main>
        <AboutUsHero />
        <AboutSection />
        <CoreValuesSection />
        <TeamSection />
        <CTA />
      </main>
    </>
  )
}
