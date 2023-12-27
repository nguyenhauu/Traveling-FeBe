import React from "react"; 
import '../styles/home.css'

import { Container, Row, Col} from 'reactstrap';
import Subtitle from "../shared/Subtitle";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import world from "../assets/images/world.png";
import worldVideo from "../assets/images/worldVideo.mp4";

import SearchBar from "../shared/SearchBar";

const Home = () => {
    return <>
    {/* ======= sesssion start ========= */}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                        <div className="hero__subtitle d-flex align-item-center ">
                            <Subtitle subtitle={"know Before You Go"}>
                                <img src={world} alt="" />
                            </Subtitle>
                        </div>
                        <h1>
                            Traveling opens the door to creating {" "}
                            <span className="highlight">memories</span>
                        </h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, eos ut eius autem voluptate neque quasi architecto? Quasi odit praesentium deserunt id provident quaerat tempore in odio illo possimus! Molestias!
                        </p>
                    </div>
                </Col>

                <Col lg="2">
                    <div className="hero__img-box">
                        <img src={img1} alt="" />
                    </div>
                </Col>
                <Col lg="2">
                    <div className="hero__img-box">
                        <video src={worldVideo} alt="" controls/>
                    </div>
                </Col>
                <Col lg="2">
                    <div className="hero__img-box">
                        <img src={img2} alt="" />
                    </div>
                </Col>

                <SearchBar/>
            </Row>
        </Container>
    </section>
            {/* ======= sesssion start ========= */}
    </>
};

export default Home;