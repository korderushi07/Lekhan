import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import FeaturesSection from "@/components/sections/features-section"
import PlaygroundSection from "@/components/sections/playground-section"
import SyntaxSection from "@/components/sections/syntax-section"
import RoadmapSection from "@/components/sections/roadmap-section"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PlaygroundSection />
      <SyntaxSection />
      <RoadmapSection />
      <Footer />
    </div>
  )
}
