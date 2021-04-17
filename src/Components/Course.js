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
          </ul>
        </div>
      </Col>
      <Col sm={8}>
        <div className="side2">;</div>
      </Col>
    </Row>
  );
}

export default Course;
