
import HeroSection from "./features/hero/hero"
import ProjectsSection from "./features/projects/projects"
import SkillsSection from "./features/skills/skills"
import CertificatesSection from "./features/certificates/certificates"
import AboutSection from "./features/about/about"
import ContactSection from "./features/contact/contact"

const HomeScreen = () => {

  return (
    <div className="relative min-h-screen bg-background overflow-hidden pt-header">
      {/* Decorative background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Explorer Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Certificates Section */}
      <CertificatesSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

export default HomeScreen
