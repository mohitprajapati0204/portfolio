import "../Home.css";
//import about from "../homeImg/about.jpg";
import { Container, Row, Col } from "reactstrap";

function Links() {
  return (
    <div className="Home">
      <div className="title">
        <h2 className="titleText">
          <span>L</span>inks
        </h2>
      </div>
      <center>
        <Container>
          <Row>
            <Col>
              <a
                href="https://www.linkedin.com/in/mohitprajapati0204/"
                target="_blank"
                rel="noreferrer"
                className="linkcodebtn "
              >
                LinkedIn
              </a>
            </Col>

            <Col>
              <a
                href="https://www.hackerrank.com/profile/mohitprajapati02"
                target="_blank"
                rel="noreferrer"
                className="linkcodebtn "
              >
                Hackerrank
              </a>
            </Col>
            <Col>
              <a
                href="https://github.com/mohitprajapati0204"
                target="_blank"
                rel="noreferrer"
                className="linkcodebtn "
              >
                GitHub
              </a>
            </Col>
          </Row>
        </Container>
      </center>
    </div>
  );
}

export default Links;
