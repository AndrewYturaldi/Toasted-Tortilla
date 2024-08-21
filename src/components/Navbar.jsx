import { Link } from "react-router-dom";
import { useState } from "react";
import headerLogo from "../images/headerLogo.png";

function Navbar() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    }

    return (
        <>
            <nav>
                <div className="nav-container">
                    <Link onClick={openNav} to="/">
                        <img className="header-logo" src={headerLogo} width="auto" height="58" alt="header logo"/>
                    </Link>
                    <ul>
                        <Link onClick={openNav} to="/">
                            <li>Home</li>
                        </Link>
                        <Link onClick={openNav} to="/about">
                            <li>About</li>
                        </Link>
                        <Link onClick={openNav} to="/menu">
                            <li>Menu</li>
                        </Link>
                        <Link onClick={openNav} to="/contact">
                            <li>Contact</li>
                        </Link>
                        <label className="hamburger-menu hidden">
                            <input type="checkbox"/>
                        </label>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;