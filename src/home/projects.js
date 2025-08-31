import "../Home.css";
//import about from "../homeImg/about.jpg";
import { Container, Row, Col } from "reactstrap";

function Projects() {
  return (
    <div className="Home">
      <div className="title">
        <center>
          <h2 className="titleText">
            <span>P</span>rojects
          </h2>
        </center>
      </div>

      <Container>
        <Row>
          <Col>
            <div className="Projectbox">
              <center>
                <h3> Customer Engage</h3>
              </center>
              <p style={{ lineHeight: "100%" }}>
                <span style={{ color: "#ff0157", fontSize: "50px" }}>.</span>{" "}
                Developed an interactive{" "}
                <strong>RFM Analysis web application</strong> with React, Ant
                Design, and ECharts, resulting in dynamic customer segmentation.
                <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                Created <strong>visual dashboards and charts</strong> by
                integrating RFM metrics, enabling businesses to identify
                high-value customers and optimize marketing strategies. <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                Enhanced <strong>customer engagement and retention</strong> by
                implementing RFM scoring and segmentation, helping businesses
                target campaigns more effectively. <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                <strong>Tools Used:</strong> HTML, CSS, JavaScript, React.JS,
                Ant Design, ECharts, Git
                <br />
              </p>
              <div
                className="inputBox"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <a
                  href="https://github.com/mohitprajapati0204/customer-engage"
                  target="_blank"
                  rel="noreferrer"
                  className="codebtn "
                >
                  Code
                </a>
                <a
                  href="https://mohitprajapati0204.github.io/customer-engage/"
                  target="_blank"
                  rel="noreferrer"
                  className="btnn "
                >
                  Live
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="Projectbox">
              <center>
                <h3> Rapid Quiz</h3>
              </center>
              <p style={{ lineHeight: "100%" }}>
                <span style={{ color: "#ff0157", fontSize: "50px" }}>.</span>{" "}
                Built a quiz app in<strong> React</strong> with category
                selection, progress tracking, and result evaluation. <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                Integrated <strong>Open Trivia DB API</strong> to fetch quiz
                questions dynamically.
                <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                Implemented result evaluation with score display and answer
                checking.
                <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                <strong>Tools Used:</strong> HTML, CSS, JavaScript, ReactJS, Ant
                Design, Git
                <br />
              </p>
              <div
                className="inputBox"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <a
                  href="https://github.com/mohitprajapati0204/rapid-quiz"
                  target="_blank"
                  rel="noreferrer"
                  className="codebtn "
                >
                  Code
                </a>
                <a
                  href="https://mohitprajapati0204.github.io/rapid-quiz/"
                  target="_blank"
                  rel="noreferrer"
                  className="btnn "
                >
                  Live
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
