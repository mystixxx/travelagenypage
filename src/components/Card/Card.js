import React from "react";
import "./Card.css"
import { FaLocationDot } from "react-icons/fa6";
import starImg from "../../assets/star.png";

const Card = ({ photo, name, location, realprice, discount, stars }) => {
    return (
        <div className="card">
            <div className="image-container-deals">
                <img alt={name} src={photo} />
                <div className="bookNow">
                    <button className="bookNowBtn">Book Now</button>
                </div>
            </div>
            <div className="r1-details">
                <h2>{name}</h2>
                <div className="review">
                    <img alt="star" src={starImg} />
                    <p>{stars}</p>
                </div>
            </div>
            <div className="r2-details">
                <div className="location">
                    <FaLocationDot color="#999999" />
                    <p>{location}</p>
                </div>
                <div className="prices">
                    <p className="discount">{"$" + discount}</p>
                    <div className="realprice">
                        <p>{"$" + realprice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;