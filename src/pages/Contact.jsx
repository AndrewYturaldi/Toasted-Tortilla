import phoneImg from "../images/phoneYellow.png";
import emailImg from "../images/emailYellow.png";
import instaImg from "../images/instaYellow.png";
import xImg from "../images/xYellow.png";
import facebookImg from "../images/facebookYellow.png";
import TacoBanner from "../components/TacoBanner";
import VisitUs from "../components/VisitUs";
import Footer from "../components/Footer";

function Contact() {
    return (
        <>
            <TacoBanner 
                pageTitle="Contact Us"
                pagePath="Home / Contact"
            />
            <div className="contact">
                <div className="contact-inner">
                    <div className="contact-info-outer">
                        <div className="contact-info-inner">
                            <h2>Drop Us A Line</h2>
                            <h6 className="contact-text">
                                Whether you’re placing a catering order, asking a question, 
                                or reaching out about your recent experience, we would love 
                                to hear from you!
                            </h6>
                            <ul>
                                <li>
                                    <a href="tel:596-785-6002" >
                                        <img src={phoneImg} width="40" height="auto"/> 
                                        <h6>596-785-6002</h6>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:contact@toastedtortilla.com" >
                                        <img src={emailImg} width="40" height="auto"/> 
                                        <h6>contact@toastedtortilla.com</h6>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" target="_blank" >
                                        <img src={instaImg} width="40" height="auto"/> 
                                        <h6>@ToastedTortilla</h6>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.x.com/" target="_blank" >
                                        <img src={xImg} width="40" height="auto"/> 
                                        <h6>@ToastedTortillaOfficial</h6>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" >
                                        <img src={facebookImg} width="40" height="auto"/> 
                                        <h6>@TheToastedTortilla</h6>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <label>Full Name<span className="asterik">*</span></label>
                            <input type="text" placeholder="e.g. Daniel Neds" required />
                            <label className="other-label">Email<span className="asterik">*</span></label>
                            <input type="email" placeholder="email@example.com" required />
                            <label className="other-label">Phone<span className="asterik">*</span></label>
                            <input type="tel" placeholder="123-456-7890" required />
                            <label className="other-label">Message<span className="asterik">*</span></label>
                            <textarea placeholder="Enter your message here..." rows="8" required ></textarea>
                            <button>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <VisitUs />
            <Footer />
        </>
    )
}

export default Contact;