import React, {useEffect} from "react";
import { deals, settings } from "../../json/deals.js";
import Card from "../Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Deals.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Deals = () => {
    useEffect(() => {
        AOS.init();
    })
    const cardComnponent = deals.map((cities, i) => {
        return (
            <Card 
                key={i} 
                id={deals[i].id} 
                photo={deals[i].photo} 
                name={deals[i].name}
                stars={deals[i].stars}
                discount={deals[i].discountprice}
                realprice={deals[i].realprice}
                location={deals[i].location}
            />
        );
    })

    return(
        <div className="deals" data-aos="zoom-in" id='dealsSection'>
            <h1>Exclusive <span className='text'>deals & discounts</span></h1>
            <p className="testp">Discover our fantastic early booking discounts<br></br> & start planning your journey.</p>
            <div className="cityDeals">
            <Slider {...settings}>
                {cardComnponent}
            </Slider>
            </div>
        </div>
    );
}

export default Deals;