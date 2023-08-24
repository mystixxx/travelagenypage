import React, {useEffect} from "react";
import "./Footer.css";
import logoImage from "../../assets/Logologo.png";
import { BiLogoFacebook } from 'react-icons/bi';
import { CiTwitter } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Footer = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="footer" data-aos="zoom-in">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="first-grid">
                        <div className="footer-logo">
                            <img alt="Logo" src={logoImage} />
                        </div>
                        <p>Book your trip in minute, get full<br></br> Control for much longer.</p>
                        <div className="social-circle">
                            <div className="social-icons">
                                <BiLogoFacebook className="inside-icon"/>
                            </div>
                            <div className="social-icons">
                                <AiOutlineInstagram className="inside-icon"/>
                            </div>
                            <div className="social-icons">
                                <CiTwitter className="inside-icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="second-grid">
                        <h2>Company</h2>
                        <div className="paragraphsGrid">
                            <p>About</p>
                            <p>Careers</p>
                            <p>Logistic</p>
                        </div>
                    </div>
                    <div className="third-grid">
                        <h2>Contact</h2>
                        <div className="paragraphsGrid">
                            <p>Help/FAQ</p>
                            <p>Press</p>
                            <p>Affilates</p>
                        </div>
                    </div>
                    <div className="fourth-grid">
                        <h2>More</h2>
                        <div className="paragraphsGrid">
                            <p>Press Centre</p>
                            <p>Our Blog</p>
                            <p>Low fare tips</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;