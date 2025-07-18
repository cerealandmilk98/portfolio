import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 600, once: true });

    // Inject Google Analytics
    const script1 = document.createElement("script");
    script1.setAttribute("async", "");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-12PS3GETXF";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-12PS3GETXF');
    `;
    document.head.appendChild(script2);
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
