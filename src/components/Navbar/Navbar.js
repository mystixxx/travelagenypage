import React, { useState } from "react";
import {HashLink} from 'react-router-hash-link';
import "./Navbar.css";
import logo from '../../assets/Logologo.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import Hero from "../Hero/Hero";
import Things from "../Things/Things";
import Deals from "../Deals/Deals";
import Vacations from "../Vacations/Vacations";
import Testimonials from "../SliderMenu/SliderMenu";


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img alt="Logo" src={logo}/>
            </div>
                <ul className={click ? 'navMenu active' : 'navMenu'}>
                    <li><HashLink smooth to="/Hero/#heroSection" className="nav-items">Home</HashLink ></li>
                    <li><HashLink smooth to="/Things/#aboutSection" className="nav-items">About</HashLink></li>
                    <li><HashLink smooth to="/Deals/#dealsSection" className="nav-items">Destination</HashLink></li>
                    <li><HashLink smooth to="/Vacations/#vacationsSection" className="nav-items">Tour</HashLink></li>
                    <li><HashLink smooth to="/Testimonials/#testimonialsSection" className="nav-items">Testimonials</HashLink></li>
                    <li><HashLink smooth to="/" className="login buttons">Login</HashLink></li>
                    <li><HashLink smooth to="/" className="signUp buttons">Sign Up</HashLink></li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={30}/>) : <FaBars size={30}/>}                 
                </div>
        </div>
    );    
}


export default Navbar;