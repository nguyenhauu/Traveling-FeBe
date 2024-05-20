import React from "react"; 
import '../styles/home.css'

import { Container, Row, Col} from 'reactstrap';
import Subtitle from "../shared/Subtitle";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import world from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import worldVideo from "../assets/images/worldVideo.mp4";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

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
    <section>
        <Container>
            <Row>
                <Col lg="3">
                    <h5 className="services__subtitle">What we serve</h5>
                    <h2 className="services__title">We offer our best services</h2>
                </Col>
                <ServiceList />
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg="12" className="="mb-5>
                    <Subtitle subtitle={"Explore"} />
                    <h2 className="featured__tour-title">Our featured tours</h2>
                </Col>
                <FeaturedTourList />
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="experience__content">
                        <Subtitle subtitle={'Experience'}/>

                        <h2>With our all experience <br /> we will serve you</h2>

                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur sit rem voluptatem odio, culpa nulla blanditiis laboriosam magni earum quaerat asperiores voluptatum ab aspernatur, in repudiandae placeat dolore? Eos.</p>
                    </div>

                    <div className="counter__wrapper d-flex align-items-center gap-5">
                        <div className="counter__box">
                            <span>12k+</span>
                            <h6>Successful trip</h6>
                        </div>
                        <div className="counter__box">
                            <span>2k+</span>
                            <h6>Regular clients</h6>
                        </div>
                        <div className="counter__box">
                            <span>15</span>
                            <h6>Year exprience</h6>
                        </div>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="experience__img">
                        <img src={experienceImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'}/>
                    <h2 className="gallery__title">Visit our customer tour gallery</h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery />
                </Col>
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={"Fans love"} />
                    <h2 className="testimonial__title">what our fans say about us</h2>
                </Col>
                <Col lg='12'>
                    <Testimonials />
                </Col>
            </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
};

export default Home;