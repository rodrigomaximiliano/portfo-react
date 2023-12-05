import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Skills from "./containers/skills";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./utils/particles";

import Navbar from "./components/navBar";

function App() {
  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      {/* particles js */}
      <Particles id="particles" options={particles} init={handleInit} />

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App_main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
