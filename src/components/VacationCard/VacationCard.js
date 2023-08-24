import React from "react";
import "./VacationCard.css"
import { BiSolidNavigation } from "react-icons/bi";
import starImg from "../../assets/star.png";

const formatPrice = (price) => {
    if (price >= 1000) {
        const formattedPrice = (price / 1000).toFixed(2) + "k";
        return formattedPrice;
    }
    return price.toString();
};

const VacationCard = ({ photo, name, location, price, days, stars }) => {
    const formattedPrice = formatPrice(price);
    return (
        <div className="vacation-card">
            <div className="image-container-vacation">
                <img alt={name} src={photo} />
            </div>
            <div className="r1-details-vacation">
                <div className="location-vacation">
                    <h4>{name + ','}</h4>
                    <h4>{location}</h4>
                </div>
                <h4 className="vacation-price">{"$" + formattedPrice}</h4>
            </div>
            <div className="r2-details-vacation">
                <div className="vacation-length">
                    <BiSolidNavigation color="#FA7436" width="16px"
                     height="16px"/>
                    <p>{days + " Days Trip"}</p>
                </div>
                <div className="review-vacation">
                    <img alt="star" src={starImg} />
                    <p>{stars}</p>
                </div>
            </div>
        </div>
    );
}

export default VacationCard;