import { HeroSection } from "@/components/home/hero-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { BestSellersSection } from "@/components/home/best-sellers-section"
import { ColorStripSection } from "@/components/home/color-strip-section"
import { InspirationSection } from "@/components/home/inspiration-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <BestSellersSection />
      <ColorStripSection />
      <InspirationSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
