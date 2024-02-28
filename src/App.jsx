import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const route = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
  const navbar = (
    // <ul className="nav">
    //   <li>
    //     <NavLink to="/">Home</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/projects">Projects</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/about">About</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/contact">Contact</NavLink>
    //   </li>
    // </ul>

    <div className="navbar">
      <div className="navbar__logo">OJ</div>
      <div className="navbar__hamburger">
        <svg
          width="32"
          height="23"
          viewBox="0 0 32 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="1.5"
            x2="29.75"
            y2="1.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="7.75"
            y1="11.5"
            x2="29.75"
            y2="11.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="14"
            y1="21.5"
            x2="29.75"
            y2="21.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );

  const footer = (
    <div className="footer">
      <ul className="footer__nav">
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <div className="footer__links">
        <div className="email">
          <a href="mailto:akbenngold@gmail.com">akbenngold@gmail.com</a>
        </div>
      </div>
      <div className="footer__logo">OJ</div>
    </div>
  );

  return (
    <>
      {navbar}
      {route}
      {footer}
    </>
  );
}

export default App;
