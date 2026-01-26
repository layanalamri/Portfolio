
import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Windows</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">PyCharm</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Jupyter Notebook</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">GitHub</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Postman</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
