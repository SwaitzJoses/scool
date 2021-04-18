import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import '../css/review.css'

function Review() {
    return (
        <>
        <p className="rev-title">Reviews</p>
        <p className="rev-num">3</p><br />
            <div className="circle">
            <p className="rev-name">Ankit Jain </p>
            <p className="rev-des">The only class you’ll ever need in marketing! </p>
            <i class="fas fa-heart" id="heart"></i>
            <p className="count">500</p>
            </div>
             <br/>

             <div className="circle">
             <p className="rev-name">Ankit Jain </p>
             <p className="rev-des">The only class you’ll ever need in marketing! </p>
             <i class="fas fa-heart" id="heart"></i>
             <p className="count">500</p>
             </div>
             
             <br/>

             <div className="circle">
             <p className="rev-name">Ankit Jain </p>
             <p className="rev-des">The only class you’ll ever need in marketing! </p>
             <i class="fas fa-heart" id="heart"></i>
             <p className="count">500</p>
             </div>

             <div className="all-rev">See all reviews</div>
        </>
    )
}

export default Review
