import React from "react";
import "../css/course.css";
import { Container, Row, Col } from "react-bootstrap";

function Course() {
  return (
    <Row>
      <Col sm={4}>
        <div className="side1">
          <div className="s1-title">Key Takeaways </div>
          <hr className="s1-line"></hr>

          <ul>
            <li>
              Digital Marketing need get started 101 is the ultimate primer{" "}
            </li>
            <li>
              Digital Marketing need get started 101 is the ultimate primer{" "}
            </li>
            <li>
              Digital Marketing need get started 101 is the ultimate primer{" "}
            </li>
          </ul>
        </div>
      </Col>
      <Col sm={8}>
        <div className="side2">
        <div className="s2-title">Course Overview </div>
        <hr className="s2-line"></hr>
        <div className = "s2-des">Digital Marketing 101 is the ultimate primer you need to get started with a career in Digital marketing. This course is a Digital Marketing 101 is the ultimate primer you need to get started with a career in Digital marketing. This course isDigital Marketing 101 is the ultimate primer you need to get started.<br /><br />
         1. Digital Marketing 101 is the ultimate primer<br />
         2. Digital Marketing 101 is the ultimate primer <br />
         3. Digital Marketing 101 is the ultimate primer</div>
        </div>
      </Col>
    </Row>
  );
}

export default Course;
