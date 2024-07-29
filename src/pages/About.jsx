import TacoBanner from "../components/TacoBanner";
import tacoTruck from "../images/tacoTruck.jpg";
import chipImage from "../images/BlueOnYellow-Logo.png";
import VisitUs from "../components/VisitUs";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <TacoBanner 
                pageTitle="About Us"
                pagePath="Home / About"
            />
            <div className="about">
                <div className="our-story">
                    <div>
                        <h2>Our Story</h2>
                        <p>
                            We are a taco food truck company located at Klyde Warren Park in Dallas, Texas. 
                            We’ve been in business since 2010. Our values include providing a family-friendly 
                            atmosphere, serving the community, and satisfying our customers. Our mission is to 
                            bring you the best tacos made with the freshest ingredients. 
                        </p>
                    </div>
                    <div>
                        <img src={tacoTruck} width="488" height="auto" />
                    </div>
                </div>
                <div className="meet-chip">
                    <div>
                        <img src={chipImage} width="300" height="auto" />
                    </div>
                    <div>
                        <h2>Meet Chip</h2>
                        <p>
                            Chip is our fun-loving mascot who embodies the spirit of fiesta wherever he goes! 
                            With his lively sombrero and cheerful demeanor, Chip brings a festive energy to every 
                            aspect of our company. He loves to greet customers with a hearty "¡Hola!" and is always 
                            ready to spice up any gathering with his contagious enthusiasm for delicious tacos. 
                            Whether he's salsa dancing or sampling the latest taco creation, Chip ensures that every 
                            visit to our truck is a memorable fiesta for taco lovers of all ages.
                        </p>
                    </div>
                </div>
            </div>
            <VisitUs />
            <Footer />
        </>
    )
}

export default About;