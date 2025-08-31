import "./Home.css";
import About from "./home/about";
import Skills from "./home/skills";
import Contact from "./home/contact";
import Projects from "./home/projects";
import Links from "./home/links";

//import WhatsNew from "./home/whatsNew";
function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

function Home() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <div className="Home" id="home">
      <header>
        <a href="#home" className="logo">
          LearnTogether<span>.</span>
        </a>
        <div className="menuToggle" onClick={toggleMenu}></div>
        <ul className="navigation">
          <li>
            <a href="#banner" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#links" onClick={toggleMenu}>
              Links
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </header>
      <div className="banner section" id="banner">
        <div className="content">
          <h2>Mohit</h2>
          <p>Software Developer</p>
          <a href="#about" onClick={toggleMenu} className="btnn">
            About Me
          </a>
        </div>
      </div>

      {/*Below are imported from home folder*/}

      <div className="about section" id="about">
        <About />
      </div>

      <div className="projects section" id="projects">
        <Projects />
      </div>

      <div className="skills section" id="skills">
        <Skills />
      </div>

      <div className="links section" id="links">
        <Links />
      </div>

      <div className="contact section" id="contact">
        <Contact />
      </div>

      <div className="copyrightText">
        <p>
          Made with ❤️ by{" "}
          <span style={{ color: "#ff0157", fontSize: "20px" }}> Mohit</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
