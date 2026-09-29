import { Navbar } from "../components/Navbar";
import { ScrollyCanvas } from "../components/ScrollyCanvas";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white pb-0">
      <Navbar />
      <ScrollyCanvas />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
