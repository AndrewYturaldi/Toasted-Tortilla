import Hero from "../components/Hero";
import BlueSection from "../components/BlueSection";
import brandImage from "../images/brandImage.jpg";
import cateringBag from "../images/cateringBag.jpg";
import OrangeSection from "../components/OrangeSection";
import menuTacos from "../images/menuTacos.jpg";
import DownloadApp from "../components/DownloadApp";
import VisitUs from "../components/VisitUs";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Hero />
            <BlueSection 
            title="What is the Toasted Tortilla?"
            description="We are a taco food truck company located at Klyde Warren Park in Dallas, Texas. 
                         Our mission is to bring you the best tacos made with the freshest ingredients!"
            linkTo="/about"
            btnText="Discover Our Story"
            imageSrc={brandImage}
            />
            <OrangeSection 
            title="Check Out Our Menu"
            description="Our menu is packed with irresistible dishes crafted with love and creativity, 
                         ensuring each visit is a delicious adventure for everyone!"
            linkTo="/menu"
            btnText="View Menu"
            imageSrc={menuTacos}
            />
            <BlueSection 
            title="Catering for Every Occasion"
            description="Whether it's a family gathering, business luncheon, or birthday party, our dedicated 
                         team provides a seamless catering experience from start to finish!"
            linkTo="/contact"
            btnText="Contact Us"
            imageSrc={cateringBag}
            />
            <DownloadApp />
            <VisitUs />
            <Footer />
        </>
    )
}

export default Home;