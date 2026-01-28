
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Layan Al Amri</span>.
            <br />
            I'm a <span className="purple">Management Information Systems</span> student at
            <span className="purple"> Imam Abdulrahman Bin Faisal University</span> (College of Business Administration).
            <br />
            <br />
            I’m interested in <span className="purple">Business Intelligence</span>,
            <span className="purple"> Data & Analytics</span>, and
            <span className="purple"> Information Systems</span>—especially areas like databases, systems analysis, and decision support.
          </p>


          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on personal projects 📊
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring data and business insights 📈
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Layan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
