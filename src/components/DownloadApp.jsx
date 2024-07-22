import topWave from "../images/topWave.svg"
import appImage from "../images/appImage.jpg";
import appleLogo from "../images/appleLogo.png";
import playLogo from "../images/playLogo.png";
import bottomWave from "../images/bottomWave.svg";

function DownloadApp() {
    return (
        <>
            <div className="orange-section">
                <img className="top-wave" src={topWave} />
                <div className="orange-inner">
                    <div className="orange-container download-app-container">
                        <img className="app-image" src={appImage} width="300" height="auto"/>
                        <div className="orange-text download-app-text">
                            <h2>Download Our App</h2>
                            <p>Reward points, special offers, custom tacos, and more! 
                                Download our new mobile app on your Apple or Android device today!</p>
                            <div className="orange-button-container download-app-buttons">
                                <a href="https://www.apple.com/app-store/" target="_blank">
                                    <div className="orange-link-button">
                                        <img className="symbol-logo" src={appleLogo} width="25" height="auto"/>Download Now
                                    </div>
                                </a>
                                <a href="https://play.google.com/" target="_blank">
                                    <div className="orange-link-button">
                                        <img className="symbol-logo" src={playLogo} width="30" height="auto" />Download Now
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="bottom-wave" src={bottomWave} />
            </div>
        </>
    )
}

export default DownloadApp;