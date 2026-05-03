import data from "./data/combined.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar name={data.about?.name} />
      <main>
        <Hero about={data.about} contact={data.contact} />
        <About about={data.about} />
        <Education education={data.education} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Experience experience={data.experience} />
        <Certifications certifications={data.certifications} />
        <Contact contact={data.contact} />
      </main>
      <Footer name={data.about?.name} contact={data.contact} />
    </div>
  );
}

export default App;
