import bottomWave from "../images/bottomWave.svg"

function TacoBanner({ pageTitle, pagePath }) {
    return (
        <>
            <div className="taco-banner">
                <div className="text">
                    <h2>{pageTitle}</h2>
                    <h5>{pagePath}</h5>
                    <img className="bottom-wave" src={bottomWave} />
                </div>
            </div>
        </>
    )
}

export default TacoBanner;