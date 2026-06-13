import { FloatingNavbar } from '@/components/FloatingNavbar'
import { ScrollProgress } from '@/components/ScrollProgress'
import { HeroSection } from '@/sections/HeroSection'
import { AboutSection } from '@/sections/AboutSection'
import { SkillsSection } from '@/sections/SkillsSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { ExperienceTimeline } from '@/sections/ExperienceTimeline'
import { ContactSection } from '@/sections/ContactSection'
import { Footer } from '@/sections/Footer'

export function App() {
  return (
    <>
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Navigation */}
      <FloatingNavbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceTimeline />
      </main>

      <ContactSection />
      <Footer />
    </>
  )
}
