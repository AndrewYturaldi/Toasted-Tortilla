import { useState } from "react";
import { Link } from "react-router-dom";

function BlueSection({ title, description, linkTo, btnText, imageSrc }) {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    }

    return (
        <div className="blue-section">
            <div className="blue-container">
                <div className="blue-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="blue-button">
                        <Link onClick={openNav} to={linkTo}>
                            <div className="blue-link-button">{btnText}</div>
                        </Link>
                    </div>
                </div>
                <img src={imageSrc} width="400" height="auto" alt="Section Image"/>
            </div>
        </div>
    );
}

export default BlueSection;
