import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Hero,
  Navbar,
  Tech,
} from "./components";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
