import "../Home.css";
//import about from "../homeImg/about.jpg";
import { Container, Row, Col } from "reactstrap";

function Skills() {
  return (
    <div className="Home">
      <div className="title">
        <h2 className="titleText">
          <span>S</span>kills
        </h2>
      </div>
      <Container>
        <Row>
          <Col>
            <center>
              <div className="skillsbox">
                <h3>Javascript</h3>
              </div>
            </center>
          </Col>
          <Col>
            <center>
              <div className="skillsbox">
                <h3>ReactJS </h3>
              </div>
            </center>
          </Col>

          <center>
            <div className="skillsbox">
              <h3>Web Development</h3>
            </div>
          </center>

          <Col>
            <center>
              <div className="skillsbox">
                <h3>NodeJS</h3>
              </div>
            </center>
          </Col>
          <Col>
            <center>
              <div className="skillsbox">
                <h3>ExpressJS </h3>
              </div>
            </center>
          </Col>

          <center>
            <div>
              <h3> </h3>
            </div>
          </center>

          <Col>
            <center>
              <div className="skillsbox">
                <h3>HTML</h3>
              </div>
            </center>
          </Col>
          <Col>
            <center>
              <div className="skillsbox">
                <h3>CSS</h3>
              </div>
            </center>
          </Col>
          <Col>
            <center>
              <div className="skillsbox">
                <h3>Bootstrap</h3>
              </div>
            </center>
          </Col>
          <Col>
            <center>
              <div className="skillsbox">
                <h3>MaterialUI</h3>
              </div>
            </center>
          </Col>
          <Col>
            <center>
              <div className="skillsbox">
                <h3>AntD</h3>
              </div>
            </center>
          </Col>

          <Col>
            <center>
              <div className="skillsbox">
                <h3>MongoDB</h3>
              </div>
            </center>
          </Col>
          <Col>
            <center>
              <div className="skillsbox">
                <h3>MySQL</h3>
              </div>
            </center>
          </Col>
          <Col>
            <center>
              <div className="skillsbox">
                <h3>Git</h3>
              </div>
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
