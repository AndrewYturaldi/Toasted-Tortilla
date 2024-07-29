import { useState } from "react";
import { Link } from "react-router-dom";
import topWave from "../images/topWave.svg"
import footerLogo from "../images/footerLogo.jpg";
import phoneBlue from "../images/phoneBlue.png";
import emailBlue from "../images/emailBlue.png";
import googlePlay from "../images/googlePlay.png";
import appStore from "../images/appStore.png";
import facebookBlue from "../images/facebookBlue.png";
import instaBlue from "../images/instaBlue.png";
import xBlue from "../images/xBlue.png";

function Footer() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    }

    return (
        <>
            <footer>
                <img className="top-wave" src={topWave} />
                <div className="footer-main-container">
                    <div className="logo-section">
                        <img className="footer-logo" src={footerLogo} width="180" height="auto"/>
                        <p>"Flavorful Fiesta <br/>
                         on Wheels!"</p>
                    </div>
                    <div className="contact-us-section">
                        <h4>Contact Us</h4>
                        <p>
                            The Toasted Tortilla <br/> 
                            2012 Woodall Rodgers <br/>
                            Fwy, Dallas, TX 75021
                        </p>
                        <div className="contact-links-section">
                            <a href="tel:596-785-6002">
                                <img src={phoneBlue} width="30" height="auto"/>
                            </a>
                            <a href="mailto:contact@toastedtortilla.com">
                                <img src={emailBlue} width="36" height="auto"/>
                            </a>  
                        </div>
                        <p>
                            Find us at <br/>
                            <a href="https://www.klydewarrenpark.org/" target="_blank">Klyde Warren Park</a>
                        </p>
                    </div>
                    <div className="pages-section">
                        <h4>Pages</h4>
                        <ul>
                            <li><Link onClick={openNav} to="/">Home</Link></li>
                            <li><Link onClick={openNav} to="/About">About</Link></li>
                            <li><Link onClick={openNav} to="/Menu">Menu</Link></li>
                            <li><Link onClick={openNav} to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="service-hours-section">
                        <h4>Service Hours</h4>
                        <p>
                            Mon - Thurs: 11am - 9pm <br/>
                            Fri: 11am - 10:30pm <br/>
                            Sat: 11am - 11pm <br/>
                            Sun: Closed
                        </p>
                    </div>
                    <div className="get-app-section">
                        <h4>Get Our App</h4>
                        <a href="https://play.google.com/" target="_blank">
                            <img className="google-play" src={googlePlay} width="184" height="auto"/>
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank">
                            <img className="app-store" src={appStore} width="184" height="auto"/>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom-container">
                    <div className="socials">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src={facebookBlue} width="32" height="auto"/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img src={instaBlue} width="34" height="auto"/>
                        </a>
                        <a href="https://x.com/" target="_blank">
                            <img src={xBlue} width="32" height="auto"/>
                        </a>
                    </div>
                    <p className="copyright-text">
                        <span className="alternate-font">&copy;</span> Copyright The Toasted 
                        Tortilla 2024 | Concept & Design by <a href="https://danielneds.myportfolio.com/toasted-tortilla" target="_blank">Daniel Neds</a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;