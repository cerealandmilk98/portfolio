import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <section
          className="flex flex-col items-center justify-center pt-20 pb-10"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold mb-4">Brody Clark</h1>
          <p className="text-xl text-gray-300">Front-End Developer</p>
        </section>

        <div data-aos="fade-up">
          <About />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Projects />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
