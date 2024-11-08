import Header from "./content/header"
import About from "./content/about"
import Team from "./content/team"
import Activity from "./content/activity"
import ModusOperandi from "./content/modus-operandi"
import ProjectBanner from "./content/project-banner"
import ProjectDescription from "./content/project-description"
import ProjectJourney from "./content/project-journey"
import Footer from "./content/footer"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Team />
        <Activity />
        <ModusOperandi />
        <ProjectBanner />
        <ProjectDescription />
        <ProjectJourney />
      </main>
      <Footer />
    </>
  )
}
