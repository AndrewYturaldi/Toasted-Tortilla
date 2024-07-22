import tacoHero from "../images/tacoHero.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import bottomWave from "../images/bottomWave.svg";

function Hero() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    }

    return (
        <>
            <div className="home-hero">
                <div className="hero-flex">
                    <img src={tacoHero} width="670" height="auto"/>
                    <div className="hero-words">
                        <h1 className="hero-title">Taco-bout a Good Time!</h1>
                        <h4 className="hero-subtitle">Ready to Serve You at Our Dallas, 
                            TX Food Truck</h4>
                        <div className="hero-buttons">
                            <Link onClick={openNav} to="/menu">
                                <div className="link-button">
                                    View Menu
                                </div>
                            </Link>
                            <Link onClick={openNav } to="/.visit-us">
                                <div className="link-button">
                                    Visit Us
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <img className="bottom-wave" src={bottomWave} />
            </div>
        </>
    )
}

export default Hero;