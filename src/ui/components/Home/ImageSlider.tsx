import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

const ImageSlider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const styleSlide = {
        width: "100%",
        height: "430px",
        backgroundImage: `url(${slides[currentSlide].url})`,
        backgroundSize: "cover",
    };

    const styleMask = {
        width: "100%",
        position: "relative",
    }

    const arrowLeft = {
        left: "30px",
    }

    const arrowRight = {
        right: "30px",
    }

    const goToPrevious = () => {
        const isFirstSlide = currentSlide === 0
        const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1
        setCurrentSlide(newSlide)
    }

    const goToNext = () => {
        const isLastSlide = currentSlide === slides.length - 1
        const newSlide = isLastSlide ? 0 : currentSlide + 1
        setCurrentSlide(newSlide)
    }

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex)
    }

    return (
        <div style={styleMask}>
            <div className="arrows-slide" style={arrowLeft} onClick={goToPrevious}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className="arrows-slide" style={arrowRight} onClick={goToNext}>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
    
            <div className="slider-design" style={styleSlide}></div>
            <div className="dots-container">
                {slides.map((slide, slideIndex) => (
                    <div className="dots-slide" style={{ color: slideIndex === currentSlide ? "#D08339" : "white" }} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        <FontAwesomeIcon icon={faCircle} />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default ImageSlider