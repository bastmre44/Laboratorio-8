import Navbar from "@/components/layout/Navbar"

import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"

export default function HomePage() {

  return (
    <>
      <Navbar />

      <main>

        <HeroSection />

        <AboutSection />

      </main>
    </>
  )
}