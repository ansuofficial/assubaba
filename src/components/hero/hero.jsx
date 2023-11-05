import banner from "../../images/banner.jpg" 

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <div className="hero">
                <div className="hero-image">
                    <img src={banner} alt="Hero image" />
                </div>
            </div>
        </div>
    )
}

export default Hero