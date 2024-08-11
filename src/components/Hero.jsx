import React, { useState } from 'react';
import tacoHero from "../images/tacoHero.png";
import { Link } from 'react-router-dom';

function Hero({ onVisitUsClick }) {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    }

    return (
        <>
            <div className="home-hero">
                <div className="hero-flex">
                    <img src={tacoHero} width="670" height="auto" alt="Taco Hero"/>
                    <div className="hero-words">
                        <h1 className="hero-title">Taco-bout a Good Time!</h1>
                        <h4 className="hero-subtitle">Ready to Serve You at Our Dallas, TX Food Truck</h4>
                        <div className="hero-buttons">
                            <Link onClick={openNav} to="/menu" >
                                <div className="link-button">
                                    View Menu
                                </div>
                            </Link>
                            <button onClick={onVisitUsClick} className="link-button">
                                Visit Us
                            </button>
                        </div>
                    </div>
                </div>
                <div className="wave-container">
                    <div className="bottom-wave"></div>
                </div>
            </div>
        </>
    );
}

export default Hero;
