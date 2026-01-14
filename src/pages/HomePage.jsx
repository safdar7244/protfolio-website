import BioSection from "../components/BioSection";
import Navbar from "../components/Navbar";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BioSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
