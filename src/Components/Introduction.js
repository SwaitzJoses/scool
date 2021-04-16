import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/introduction.css";

function Introduction() {
  return (
    <Row>
      <Col sm={8}>
        <img className="img1" src="Startup-41-1019x573.webp" alt="img1"></img>
        <div className="above-img1">
          <Row>
            <Col sm={8}>
              <p className="heading">Iphone videography for product</p>
            </Col>
            <Col sm={2}>
              <div className="oldprice">₹999</div>{" "}
            </Col>
            <Col sm={2}>
              <div className="newprice">₹649</div>
            </Col>
            
          </Row>
          <Row>
            <Col sm={9}>
              <div className="promo">Apply Promocode</div>
              <Row>
                <Col sm={4}>
                  <div className="pp1"><i class="far fa-user"></i> By Shashank Mittal</div>
                </Col>
                <Col sm={4}>
                <div className="pp2"><i class="far fa-calendar-alt"></i>05 March 2021</div>
                </Col>
                <Col sm={4}>
                <div className="pp3"><i class="far fa-clock"></i> 09:00 AM to 11:00 AM</div>
                </Col>
              </Row>
            </Col>
            <Col sm={3}>
              <button className="button2">
                <font className="font4">Book Now</font>
              </button>
            </Col>
          </Row>
        </div>
      </Col>

      <Col sm={4}>
        <div className="img2-bg">
          <img
            className="img2"
            src="Maelle-Gavet-Compass.jpg"
            alt="img2"
            fluid
          ></img>
        </div>
      </Col>
    </Row>
  );
}

export default Introduction;
