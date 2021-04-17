import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/introduction.css";

function Introduction() {
  return (
    <Row p-0 m-0>
      <Col sm={8} p-0 m-0>
        <img className="img1" src="Startup-41-1019x573.webp" alt="img1"></img>
        <div className="above-img1">
          <Row p-0 m-0>
            <Col sm={8} p-0 m-0>
            
              <p className="heading">Iphone videography for product</p>
              <hr className='line'></hr>
            </Col>
            <Col sm={2} p-0 m-0>
              <div className="oldprice">₹999</div>{" "}
            </Col>
            <Col sm={2}>
              <div className="newprice">₹649</div>
            </Col>
            
          </Row>
          <Row>
            <Col sm={9}>
           
              <a href="#" className="promo">Apply Promocode</a>
              <Row>
                <Col sm={4}>
                  <div className="pp1"><i class="far fa-user"></i> By Shashank Mittal</div>
                </Col>
                <Col sm={4}>
                <div className="pp2"><i class="far fa-calendar-alt"></i> 05 March 2021</div>
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
        <Row p-0 m-0>
        <Col sm={8} p-0 m-0>
        <div className="above-img2">
        <p className="a-i2">Brief Description</p>
        <hr className='line2'></hr>
        <p className="a-i3">The framework that allowed her to overcome self-doubt and carve her own path as an author, broadcaster, and podcast host. The secret to her success? Digital Marketing 101 is the ultimate primer you need to get started with a career</p>
        </div>
        </Col>
        </Row>
      </Col>

      <Col sm={4}>
        <div className="img2-bg">
          <img
            className="img2"
            src="Maelle-Gavet-Compass.jpg"
            alt="img2"
            fluid
          ></img>
          <p className="p-name">Deepika Shapeti</p>
          <p className="p-name2">Obsessive Serial Entrepreneur</p>
          <hr className='p-name3'></hr>
          <p className='p-name4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="p-name5">BIOGRAPHY</p>
          <p className="p-name6">THRILLER</p>
          <p className="p-name7">HORROR</p>
        </div>
      </Col>
    </Row>
  );
}

export default Introduction;
