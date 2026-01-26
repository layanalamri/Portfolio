
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      {/* Web & Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Django</div>
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Postman</div>
      </Col>

      {/* Concepts */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Data Structures</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Algorithms</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">OOP</div>
      </Col>

    </Row>
  );
}

export default Techstack;
