import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import caculateAvgRating from "../utils/avgRating";
import "./tour-card.css";

const TourCard = ({ tour }) => {
  // Kiểm tra xem 'tour' có tồn tại và có thuộc tính 'photo' hay không
  if (!tour || !tour.photo) {
    return <div>No tour data available</div>;
  }

  const { _id, title, city, photo, price, featured, reviews } = tour;

  const { totalRating, avgRating } = caculateAvgRating(reviews);
  console.log(photo);
  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          {featured && <span>featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>{" "}
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <div key={_id}>
            <h5 className="tour__title">
              <Link to={`/tours/${_id}`}>{title}</Link>
            </h5>
          </div>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span> /per person</span>
            </h5>

            <button className="btn booking__btn">
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
