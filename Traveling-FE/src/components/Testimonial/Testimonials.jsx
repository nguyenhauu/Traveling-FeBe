import React from "react";
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-01.jpg';
import ava02 from '../../assets/images/ava-02.jpg';
import ava03 from '../../assets/images/ava-03.jpg';

const Testimonials = () => {

    const settings = {
        dots:true,
        Infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        Responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    Infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Placeat atque voluptate esse corporis at doloribus voluptatum,
                quas accusamus quos facilis distinctio, itaque, possimus hic nulla? 
                Non tenetur fugiat ipsa nisi.</p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                    <div className="mb-0 mt-3">Nguyễn Hậu</div>
                    <p>Customer</p>
                </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Placeat atque voluptate esse corporis at doloribus voluptatum,
                quas accusamus quos facilis distinctio, itaque, possimus hic nulla? 
                Non tenetur fugiat ipsa nisi.</p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div className="mb-0 mt-3">Lee hoo</div>
                    <p>Customer</p>
                </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Placeat atque voluptate esse corporis at doloribus voluptatum,
                quas accusamus quos facilis distinctio, itaque, possimus hic nulla? 
                Non tenetur fugiat ipsa nisi.</p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                    <div className="mb-0 mt-3">Jonh</div>
                    <p>Customer</p>
                </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Placeat atque voluptate esse corporis at doloribus voluptatum,
                quas accusamus quos facilis distinctio, itaque, possimus hic nulla? 
                Non tenetur fugiat ipsa nisi.</p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                    <div className="mb-0 mt-3">Jonh</div>
                    <p>Customer</p>
                </div>
        </div>
    </Slider>
}

export default Testimonials;