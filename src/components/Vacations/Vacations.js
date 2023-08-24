import React, {useEffect} from "react";
import { vacations, settingsVacation } from "../../json/deals.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Vacations.css"
import VacationCard from "../VacationCard/VacationCard.js";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Vacations = () => {
    useEffect(() => {
        AOS.init();
    })
    const VacationcardComnponent = vacations.map((vacation, i) => {
        return (
            <VacationCard 
                key={i} 
                id={vacations[i].id} 
                photo={vacations[i].photo} 
                name={vacations[i].name}
                stars={vacations[i].stars}
                price={vacations[i].price}
                days={vacations[i].days}
                location={vacations[i].location}
            />
        );
    })

    return(
        <div className="vacations" data-aos="zoom-in" id='vacationsSection'>
            <h1>Best <span className='vacationText'>vacation plan</span></h1>
            <p className="textp">Plan your perfect vacation with our travel agency. Choose<br></br> among hundreds of all-inclusive offers!</p>
            <div className="cityVacations">
            <Slider {...settingsVacation}>
                {VacationcardComnponent}
            </Slider>
            </div>
        </div>
    );
}

export default Vacations;