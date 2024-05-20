import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import caculateAvgRating from "../utils/avgRating";

import "./tour-card.css";

 const TourCard = ({ tour }) => {
   const { id, title, city, photo, price, featured, reviews } = tour;

   const { totalRating, avgRating } = caculateAvgRating(reviews);

    return (
      <div className="tour__card">
         <card>
            <div className="tour__img">
               <img src={photo} alt="tour-img" />
               {  featured && <span>featured</span>}
            </div>


            <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
               <span className="tour__location d-flex align-items-center gap-1">
                  <i class="ri-map-pin-line"></i> {city}
               </span>
               <span className="tour__rating d-flex align-items-center gap-1">
                  <i class="ri-start-fill"></i> {avgRating === 0 ? null : avgRating}
                  {totalRating === 0 ? (
                     "Not rated"
                  ) : (
                     <span>({reviews.length})</span>
                  )}
               </span>
            </div>
            <div key={tour.id}>
          <h5 className="tour__title">
            <Link to={`/tours/${tour.id}`}>{tour.title}</Link>
          </h5>
        </div>

            <div className="card__bottom d-lex align-items-center justify-content-between mt-3">
               <h5>
                  ${price} <span> /per person</span>
               </h5>

               <button className="btn booking__btn">
                  <Link to={'/tours/${id}'}>Book Now</Link> 
               </button>
            </div>
         </CardBody>
         </card>
      </div>
    )
 }
 export default TourCard