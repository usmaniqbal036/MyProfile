import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import usePageMeta from "./hooks/usePageMeta";
import { personalInfo } from "./data";

export default function App() {
  usePageMeta(
    `${personalInfo.name} | ${personalInfo.role}`,
    `${personalInfo.role} based in ${personalInfo.location}. ${personalInfo.heroParagraph}`
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
