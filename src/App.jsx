import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <section className="flex flex-col items-center justify-center pt-20 pb-10">
          <h1 className="text-5xl font-bold mb-4">Brody Clark</h1>
          <p className="text-xl text-gray-300">Front-End Developer</p>
        </section>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
