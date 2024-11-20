import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300 slec selection:bg-cyan-300 selection:text-cyan-900">
      <div className="top-0 h-full flixed -z-10 w-fulll"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container px-8 mx-auto">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;
