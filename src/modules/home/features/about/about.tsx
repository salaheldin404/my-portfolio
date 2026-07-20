import { AboutContent } from "./components/about-content"
import { ABOUT_SECTION_COPY } from "./data"

const AboutSection = () => {
  return (
    <section
      id={"about"}
      className="relative isolate overflow-hidden border-t border-border/40 py-24 scroll-mt-header"
    >
      <div className="main-container">
        <AboutContent copy={ABOUT_SECTION_COPY} />
      </div>
    </section>
  )
}

export default AboutSection
