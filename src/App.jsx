import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ParticleEffect, PageTransition } from "./components/ParticleEffects";
import Background3D from "./components/Background3D.jsx";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Background3D />

        <PageTransition>
          <div className="min-h-screen flex flex-col bg-transparent transition-colors duration-300">
            <ParticleEffect>
              <Navbar />
            </ParticleEffect>

            <main className="flex-grow">
              <Hero />
              <Skills />
              <Projects />
              <Contact />
            </main>

            <Footer />
          </div>
        </PageTransition>
      </Router>
    </ThemeProvider>
  );
}

export default App;
