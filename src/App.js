import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/homepage";
import JSDOM from "./pages/JSDOM";
import About from "./pages/about";
import Projects from "./pages/projects";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/jsdom">JS DOM</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jsdom" element={<JSDOM />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
