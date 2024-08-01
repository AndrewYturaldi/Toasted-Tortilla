function TacoBanner({ pageTitle, pagePath }) {
    return (
        <>
            <div className="taco-banner">
                <div className="text">
                    <h2>{pageTitle}</h2>
                    <h5>{pagePath}</h5>
                </div>
                <div className="bottom-wave-container">
                    <div className="bottom-wave"></div>
                </div>
            </div>
        </>
    )
}

export default TacoBanner;