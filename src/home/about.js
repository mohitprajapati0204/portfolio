import "../Home.css";
import about from "../homeImg/about.jpg";

function About() {
  return (
    <div className="Home">
      <div className="row">
        <div className="col50">
          <h2 className="titleText">
            <span>A</span>bout Me
          </h2>
          <p style={{ textAlign: "justify" }}>
            Self-taught MERN Developer with hands-on experience building
            responsive web applications using React, JavaScript, and modern UI
            libraries. Skilled at translating designs into clean, reusable code
            and creating engaging user experiences. Currently seeking
            opportunities to apply my skills and grow as a frontend developer
            <br />
          </p>
          <center>
            <a
              href="https://drive.google.com/file/d/1mUKlBK069oqkYRshKzD_-lGJbg5hF0t5/view"
              target="_blank"
              rel="noreferrer"
              className="linkcodebtn "
            >
              View My Resume
            </a>
          </center>
        </div>
        <div class="col50">
          <div class="imgBx">
            <img src={about} alt="profile pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
