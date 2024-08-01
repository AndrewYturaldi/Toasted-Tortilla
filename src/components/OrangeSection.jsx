import { useState } from "react";
import { Link } from "react-router-dom";
import topWave from "../images/topWave.svg"
import bottomWave from "../images/bottomWave.svg";

function OrangeSection({ title, description, linkTo, btnText, imageSrc }) {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    }

    return (
        <>
            <div className="orange-section">
                <div className="top-wave-container">
                    <div className="top-wave"></div>
                </div>
                <div className="bottom-wave-container">
                    <div className="bottom-wave"></div>
                </div>
                <div className="orange-inner">
                    <div className="orange-container">
                        <img className="menu-tacos" src={imageSrc} width="500" height="auto"/>
                        <div className="orange-text">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <div className="orange-button-container">
                                <Link onClick={openNav} to={linkTo}>
                                    <div className="orange-link-button">{btnText}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrangeSection;