import React from "react";
import './Newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="mewsletter_-content">
                        <h2>Subscribe now to get useful traveling infomation.</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, esse ratione. Laborum porro hic modi eius? Nulla ducimus, autem consequatur, sunt minima eius optio dolorum quia voluptatem, veniam ullam quod!</p>

                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}
export default Newsletter;

